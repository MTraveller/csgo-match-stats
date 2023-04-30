interface Statuses {
  map: string;
  round: string;
  roundScore: string;
  roundTime?: { minutes?: number; seconds?: number };
  ct?: string;
  tr?: string;
}

export default Statuses;
