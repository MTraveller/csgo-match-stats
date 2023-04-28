import { RoundsPlayersStats } from './processScores';

interface Rounds {
  CT: object;
  TERRORIST: object;
}

function processTopPlayers(performance: RoundsPlayersStats, currRound: number) {
  let topCTPlayer: [string, number, number] = ['', 0, 0];
  let topTRPlayer: [string, number, number] = ['', 0, 0];

  Object.values(performance)
    .filter((_, idx) => idx === currRound - 1)
    .forEach((round: Rounds) => {
      const { CT, TERRORIST } = round;

      let topCTDmg = 0;
      let topCTKill = 0;
      let topCTName = '';
      Object.entries(CT).forEach(
        ([name, obj]: [string, { damage: number; kills: number }]) => {
          if ('damage' in obj) {
            if (obj.damage > topCTDmg) {
              topCTDmg = obj.damage;
              topCTKill = obj.kills;
              topCTName = name;
            }
          }
        }
      );

      if (topCTDmg > topCTPlayer[1]) {
        topCTPlayer = [topCTName, topCTDmg, topCTKill];
      }

      let topTRDmg = 0;
      let topTRKill = 0;
      let topTRName = '';
      Object.entries(TERRORIST).forEach(
        ([name, obj]: [string, { damage: number; kills: number }]) => {
          if ('damage' in obj) {
            if (obj.damage > topTRDmg) {
              topTRDmg = obj.damage;
              topTRKill = obj.kills;
              topTRName = name;
            }
          }
        }
      );

      if (topTRDmg > topTRPlayer[1]) {
        topTRPlayer = [topTRName, topTRDmg, topTRKill];
      }
    });

  return { topCTPlayer, topTRPlayer };
}

export default processTopPlayers;
