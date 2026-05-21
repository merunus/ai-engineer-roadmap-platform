import { useCallback, useEffect, useRef, useState } from 'react';
import type { UIState } from '../types';
import { loadUIState, saveUIState } from '../db/db';

const DEFAULT: UIState = {
  collapsed: {},
  filter: 'all',
  hideCompleted: false,
  dark:
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-color-scheme: dark)').matches,
};

export interface UseUIState {
  ui: UIState;
  loaded: boolean;
  setFilter: (filter: UIState['filter']) => void;
  setHideCompleted: (hide: boolean) => void;
  setDark: (dark: boolean) => void;
  toggleCollapsed: (id: string) => void;
  isCollapsed: (id: string, defaultCollapsed: boolean) => boolean;
}

export function useUIState(): UseUIState {
  const [ui, setUI] = useState<UIState>(DEFAULT);
  const [loaded, setLoaded] = useState(false);
  const initialLoad = useRef(true);

  useEffect(() => {
    let alive = true;
    loadUIState().then((s) => {
      if (alive) {
        if (s) setUI({ ...DEFAULT, ...s });
        setLoaded(true);
      }
    });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }
    void saveUIState(ui);
  }, [ui, loaded]);

  useEffect(() => {
    const root = document.documentElement;
    if (ui.dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [ui.dark]);

  const setFilter = useCallback(
    (filter: UIState['filter']) => setUI((s) => ({ ...s, filter })),
    [],
  );
  const setHideCompleted = useCallback(
    (hideCompleted: boolean) => setUI((s) => ({ ...s, hideCompleted })),
    [],
  );
  const setDark = useCallback(
    (dark: boolean) => setUI((s) => ({ ...s, dark })),
    [],
  );
  const toggleCollapsed = useCallback((id: string) => {
    setUI((s) => ({
      ...s,
      collapsed: { ...s.collapsed, [id]: !s.collapsed[id] },
    }));
  }, []);

  const isCollapsed = useCallback(
    (id: string, defaultCollapsed: boolean) => {
      const v = ui.collapsed[id];
      return v === undefined ? defaultCollapsed : v;
    },
    [ui.collapsed],
  );

  return {
    ui,
    loaded,
    setFilter,
    setHideCompleted,
    setDark,
    toggleCollapsed,
    isCollapsed,
  };
}
