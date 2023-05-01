import { create } from 'zustand';

interface UrlStore {
  url: string;
  setUrl: (log: string) => void;
}

const useUrlStore = create<UrlStore>(set => ({
  url: '',
  setUrl: url => set(() => ({ url })),
}));

export default useUrlStore;
