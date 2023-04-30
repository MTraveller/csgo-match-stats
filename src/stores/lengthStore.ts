import { create } from 'zustand';

interface MatchLengthStore {
  matchLength: number;
  setMatchLength: (length: number) => void;
}

const useMatchLengthStore = create<MatchLengthStore>(set => ({
  matchLength: 0,
  setMatchLength: matchLength => set(() => ({ matchLength })),
}));

export default useMatchLengthStore;
