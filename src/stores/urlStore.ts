import { create } from 'zustand';

interface UrlStore {
  orlUrl: string;
  newUrl: string;
  setUrl: (log: string) => void;
}

const useUrlStore = create<UrlStore>(set => ({
  oldUrl,
  newUrl: '',
  setUrl: url => set((url, orlUrl) => { 
    if (oldUrl !== url) {
      return url;
    }),
}));

export default useUrlStore;
