import { RoundsPlayersStats } from './processScores';

function processTopPlayers(
  roundsPlayersStats: RoundsPlayersStats,
  currRound: number
) {
  let topCTPlayer: [string, number, number] = ['', 0, 0];
  let topTRPlayer: [string, number, number] = ['', 0, 0];

  for (const round of Object.values(roundsPlayersStats)) {
    if (--currRound + 1 < 0) {
      break;
    }

    const { CT, TERRORIST } = round;

    let topCTDmg = 0;
    let topCTKill = 0;
    let topCTName = '';
    for (const name of Object.keys(CT)) {
      const obj = CT[name];
      if ('damage' in obj && obj.damage > topCTDmg) {
        topCTDmg = obj.damage;
        topCTKill = obj.kills;
        topCTName = name;
      }
    }

    topCTPlayer = [topCTName, topCTDmg, topCTKill];

    let topTRDmg = 0;
    let topTRKill = 0;
    let topTRName = '';
    for (const name of Object.keys(TERRORIST)) {
      const obj = TERRORIST[name];
      if ('damage' in obj && obj.damage > topTRDmg) {
        topTRDmg = obj.damage;
        topTRKill = obj.kills;
        topTRName = name;
      }
    }

    topTRPlayer = [topTRName, topTRDmg, topTRKill];
  }

  const topPlayers = [[...topCTPlayer], [...topTRPlayer]];

  return topPlayers;
}

export default processTopPlayers;
