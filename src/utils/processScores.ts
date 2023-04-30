import { EventLog, Players, RoundsPlayersStats } from '../exports';

interface Logs {
  log: string[];
}

function processScores(logs: Logs[], players: Players[]) {
  const roundsPlayerStats: RoundsPlayersStats = {};

  for (const pObj of players) {
    for (const [i, rObj] of Object.entries(logs)) {
      const rIdx = Number(i);

      let playerDMG: (string | number)[] = [];
      let playerKills: (string | number)[] = [];

      let player = '';
      let playingOn = '';

      if (rObj.log.length) {
        for (const e of rObj.log) {
          player = pObj.player;
          const attacker = e.match(/:\s\\"(.*?)</)?.at(1);
          const isAttack = e.includes(EventLog.attack);
          const isKill = e.includes(EventLog.kill);
          const teamRegex = e.match(/(><(\w+)>\\"\sleft\sbuyzone)/)?.at(2);

          if (attacker === pObj.player) {
            if (isAttack || isKill) {
              const damage = Number(e.match(/damage\s\\"(.*?)\\"/)?.at(1));
              damage ? playerDMG.push(damage) : 0;

              const killed = e.match(/killed\s\\"(.*?)<\d\d>/)?.at(1);
              if (killed) playerKills.push(killed);
            }

            if (!playingOn && teamRegex) {
              playingOn = teamRegex;
            }
          }
        }
      }

      if (playingOn) {
        playerDMG.unshift(player, '-');
        playerDMG.unshift(playingOn);
        playerDMG.unshift(rIdx + 1);

        if (playerDMG.length > 0) {
          const roundDMG = playerDMG
            .slice(4)
            .reduce((acc, curr) => Number(acc) + Number(curr), 0);

          playerDMG = playerDMG.slice(0, 3).concat(roundDMG);
        } else {
          playerDMG.push(0);
        }

        playerKills.unshift(player, '-');
        playerKills.unshift(playingOn);
        playerKills.unshift(rIdx + 1);

        if (playerKills.length > 0) {
          playerKills = playerKills
            .slice(0, 3)
            .concat(playerKills.slice(4).length);
        } else {
          playerKills.push(0);
        }

        if (!roundsPlayerStats[rIdx + 1]) {
          roundsPlayerStats[rIdx + 1] = {};
        }

        if (!roundsPlayerStats[rIdx + 1][playingOn]) {
          roundsPlayerStats[rIdx + 1][playingOn] = {};
        }
        player = player.trim();

        if (!roundsPlayerStats[rIdx + 1][playingOn][player]) {
          roundsPlayerStats[rIdx + 1][playingOn][player] = {
            damage: 0,
            kills: 0,
          };
        }

        roundsPlayerStats[rIdx + 1][playingOn][player].damage = Number(
          playerDMG[3]
        );
        roundsPlayerStats[rIdx + 1][playingOn][player].kills = Number(
          playerKills[3]
        );
      }
    }
  }

  return roundsPlayerStats;
}

export default processScores;
