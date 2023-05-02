import { create } from 'zustand';

interface UrlStore {
  valid: boolean;
  url: string;
  setUrl: (url: string, valid: boolean) => void;
}

const useUrlStore = create<UrlStore>(set => ({
  valid: false,
  url: '',
  setUrl: (newUrl, bool) => set(() => ({ url: newUrl, valid: bool })),
}));

export default useUrlStore;
