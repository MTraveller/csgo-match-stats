interface RoundsPlayersStats {
  [round: number]: {
    [team: string]: {
      [player: string]: {
        damage: number;
        kills: number;
      };
    };
  };
}

export default RoundsPlayersStats;
