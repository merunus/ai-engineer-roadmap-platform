import type { Module, Phase, Task, TaskProgress } from '../types';

export interface Stats {
  totalTasks: number;
  completedTasks: number;
  totalHours: number;
  completedHours: number;
}

export const emptyStats: Stats = {
  totalTasks: 0,
  completedTasks: 0,
  totalHours: 0,
  completedHours: 0,
};

function addTask(stats: Stats, task: Task, progress: Record<string, TaskProgress>): void {
  stats.totalTasks += 1;
  stats.totalHours += task.estimatedHours;
  if (progress[task.id]?.completed) {
    stats.completedTasks += 1;
    stats.completedHours += task.estimatedHours;
  }
}

export function statsForModule(
  mod: Module,
  progress: Record<string, TaskProgress>,
): Stats {
  const s: Stats = { ...emptyStats };
  for (const task of mod.tasks) addTask(s, task, progress);
  return s;
}

export function statsForPhase(
  phase: Phase,
  progress: Record<string, TaskProgress>,
): Stats {
  const s: Stats = { ...emptyStats };
  for (const mod of phase.modules) {
    for (const task of mod.tasks) addTask(s, task, progress);
  }
  return s;
}

export function statsForRoadmap(
  roadmap: Phase[],
  progress: Record<string, TaskProgress>,
): Stats {
  const s: Stats = { ...emptyStats };
  for (const phase of roadmap) {
    for (const mod of phase.modules) {
      for (const task of mod.tasks) addTask(s, task, progress);
    }
  }
  return s;
}

export function pct(done: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((done / total) * 100);
}

export interface FlatTask {
  task: Task;
  phaseTitle: string;
  moduleTitle: string;
}

export function flattenTasks(roadmap: Phase[]): FlatTask[] {
  const out: FlatTask[] = [];
  for (const phase of roadmap) {
    for (const mod of phase.modules) {
      for (const task of mod.tasks) {
        out.push({
          task,
          phaseTitle: phase.title,
          moduleTitle: mod.title,
        });
      }
    }
  }
  return out;
}

export function nextUpTasks(
  roadmap: Phase[],
  progress: Record<string, TaskProgress>,
  limit = 5,
): FlatTask[] {
  return flattenTasks(roadmap)
    .filter((f) => !progress[f.task.id]?.completed)
    .slice(0, limit);
}
