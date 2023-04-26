import { EventLog } from './processEvents';
import { Players } from './processPlayers';
import { Rounds } from './processRounds';

interface Logs {
  log?: string[];
}

function processScores(rounds: Rounds, players: Players[]) {
  const playerAttacks: object[] = [];
  const playerKills: object[] = [];

  players.forEach(pObj => {
    rounds.logs.forEach((rObj: Logs, rIdx: number) => {
      rObj.log?.forEach(e => {
        const round = rIdx + 1;
        const player = pObj.player;
        const attacker = e.match(/:\s\\"(.*?)</)?.at(1);
        const isAttack = e.includes(EventLog.attack);

        if (
          attacker === pObj.player &&
          (isAttack || e.includes(EventLog.kill))
        ) {
          const damage = Number(e.match(/damage\s\\"(.*?)\\"/)?.at(1));
          const killed = e.match(/killed\s\\"(.*?)<\d\d>/)?.at(1);
          isAttack
            ? playerAttacks.push({
                round,
                player,
                damage,
              })
            : killed
            ? playerKills.push({
                round,
                player,
                killed,
              })
            : '';
        }
      });
    });
  });

  return [{ attacks: playerAttacks, kills: playerKills }];
}

export default processScores;
