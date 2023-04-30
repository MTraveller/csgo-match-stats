import { create } from 'zustand';

interface RoundStore {
  round: number;
  setRound: (round: number) => void;
}

const useRoundStore = create<RoundStore>(set => ({
  round: 0,
  setRound: roundNumber => set(() => ({ round: roundNumber })),
}));

export default useRoundStore;
