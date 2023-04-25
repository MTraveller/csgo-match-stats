import { Players } from './processPlayers';
import { Rounds } from './processRounds';

function processScores(
  rounds: Rounds[],
  players: Players[],
  attack: string,
  kill: string
) {
  const playerAttacks: object[] = [];
  const playerKills: object[] = [];

  players.forEach(pObj => {
    rounds.forEach((rObj, rIdx) => {
      rObj.roundLog.forEach((e: string) => {
        const round = rIdx + 1;
        const player = pObj.player;
        const attacker = e.match(/:\s\\"(.*?)</)?.at(1);
        const isAttack = e.includes(attack);

        if (attacker === pObj.player && (isAttack || e.includes(kill))) {
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
