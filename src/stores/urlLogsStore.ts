import { create } from 'zustand';

interface UrlLogsStore {
  isLog: true | false;
  setLog: (isLog: boolean) => void;
}

const useUrlLogStore = create<UrlLogsStore>(set => ({
  isLog: true,
  setLog: isLog => set(() => ({ isLog })),
}));

export default useUrlLogStore;
