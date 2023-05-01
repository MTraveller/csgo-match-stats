import { create } from 'zustand';

interface LogStore {
  log: string;
  setLog: (log: string) => void;
}

const useLogStore = create<LogStore>(set => ({
  log: '',
  setLog: log => set(() => ({ log })),
}));

export default useLogStore;
