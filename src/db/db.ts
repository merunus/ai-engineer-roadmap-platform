import { openDB, type DBSchema, type IDBPDatabase } from "idb";
import type { ProgressExport, TaskProgress, UIState } from "../types";

interface RoadmapDB extends DBSchema {
  progress: {
    key: string;
    value: TaskProgress;
  };
  ui: {
    key: string;
    value: UIState;
  };
}

const DB_NAME = "ai-roadmap";
const DB_VERSION = 1;
const UI_KEY = "singleton";

let dbPromise: Promise<IDBPDatabase<RoadmapDB>> | null = null;

function getDB(): Promise<IDBPDatabase<RoadmapDB>> {
  if (!dbPromise) {
    dbPromise = openDB<RoadmapDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("progress")) {
          db.createObjectStore("progress", { keyPath: "taskId" });
        }
        if (!db.objectStoreNames.contains("ui")) {
          db.createObjectStore("ui");
        }
      },
    });
  }
  return dbPromise;
}

export async function loadAllProgress(): Promise<Record<string, TaskProgress>> {
  const db = await getDB();
  const items = await db.getAll("progress");
  const map: Record<string, TaskProgress> = {};
  for (const item of items) {
    map[item.taskId] = item;
  }
  return map;
}

export async function putProgress(progress: TaskProgress): Promise<void> {
  const db = await getDB();
  await db.put("progress", progress);
}

export async function clearProgress(): Promise<void> {
  const db = await getDB();
  await db.clear("progress");
}

export async function bulkPutProgress(items: TaskProgress[]): Promise<void> {
  const db = await getDB();
  const tx = db.transaction("progress", "readwrite");
  await Promise.all(items.map((item) => tx.store.put(item)));
  await tx.done;
}

export async function loadUIState(): Promise<UIState | null> {
  const db = await getDB();
  return (await db.get("ui", UI_KEY)) ?? null;
}

export async function saveUIState(state: UIState): Promise<void> {
  const db = await getDB();
  await db.put("ui", state, UI_KEY);
}

export function buildExport(
  progress: Record<string, TaskProgress>,
): ProgressExport {
  return {
    version: 1,
    exportedAt: Date.now(),
    progress: Object.values(progress),
  };
}

export function parseImport(text: string): TaskProgress[] {
  const parsed: unknown = JSON.parse(text);
  if (
    !parsed ||
    typeof parsed !== "object" ||
    !("progress" in parsed) ||
    !Array.isArray((parsed as ProgressExport).progress)
  ) {
    throw new Error('Invalid progress file: missing "progress" array.');
  }
  const items = (parsed as ProgressExport).progress;
  for (const item of items) {
    if (
      typeof item.taskId !== "string" ||
      typeof item.completed !== "boolean"
    ) {
      throw new Error("Invalid progress file: malformed entry.");
    }
  }
  return items;
}
