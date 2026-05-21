import { useCallback, useEffect, useState } from 'react';
import type { TaskProgress } from '../types';
import {
  bulkPutProgress,
  clearProgress,
  loadAllProgress,
  putProgress,
} from '../db/db';

export interface UseProgress {
  progress: Record<string, TaskProgress>;
  loaded: boolean;
  toggleTask: (taskId: string) => void;
  resetAll: () => Promise<void>;
  replaceAll: (items: TaskProgress[]) => Promise<void>;
}

export function useProgress(): UseProgress {
  const [progress, setProgress] = useState<Record<string, TaskProgress>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let alive = true;
    loadAllProgress().then((map) => {
      if (alive) {
        setProgress(map);
        setLoaded(true);
      }
    });
    return () => {
      alive = false;
    };
  }, []);

  const toggleTask = useCallback((taskId: string) => {
    setProgress((prev) => {
      const existing = prev[taskId];
      const now = Date.now();
      const next: TaskProgress = existing
        ? {
            ...existing,
            completed: !existing.completed,
            completedAt: !existing.completed ? now : null,
          }
        : {
            taskId,
            completed: true,
            completedAt: now,
            startedAt: now,
          };
      void putProgress(next);
      return { ...prev, [taskId]: next };
    });
  }, []);

  const resetAll = useCallback(async () => {
    await clearProgress();
    setProgress({});
  }, []);

  const replaceAll = useCallback(async (items: TaskProgress[]) => {
    await clearProgress();
    await bulkPutProgress(items);
    const map: Record<string, TaskProgress> = {};
    for (const item of items) map[item.taskId] = item;
    setProgress(map);
  }, []);

  return { progress, loaded, toggleTask, resetAll, replaceAll };
}
