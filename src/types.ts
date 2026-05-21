export type ResourceKind =
  | 'docs'
  | 'video'
  | 'course'
  | 'article'
  | 'tool'
  | 'repo';

export type TaskType = 'practice' | 'theory';

export interface Resource {
  label: string;
  url: string;
  kind: ResourceKind;
}

export interface Task {
  id: string;
  title: string;
  type: TaskType;
  estimatedHours: number;
  description: string;
  deliverable?: string;
  resources: Resource[];
}

export interface Module {
  id: string;
  title: string;
  goal: string;
  tasks: Task[];
}

export interface Phase {
  id: string;
  order: number;
  title: string;
  summary: string;
  modules: Module[];
}

export interface TaskProgress {
  taskId: string;
  completed: boolean;
  completedAt: number | null;
  startedAt: number | null;
}

export interface UIState {
  collapsed: Record<string, boolean>;
  filter: 'all' | 'practice' | 'theory';
  hideCompleted: boolean;
  dark: boolean;
}

export interface ProgressExport {
  version: 1;
  exportedAt: number;
  progress: TaskProgress[];
}
