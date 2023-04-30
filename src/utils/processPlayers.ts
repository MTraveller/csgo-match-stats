import { Players } from '../exports';

function processPlayers(matchLog: string[], assigned: string) {
  const teams: Players[] = [];

  for (const e of matchLog) {
    if (e.includes(assigned)) {
      const player = e.match(/:\s\\"(.*?)<\d\d>/)?.[1];
      const team = e.match(/<Unassigned>\sto\s<(.*?)>/)?.[1];
      if (player?.length && team?.length) teams.push({ team, player });
    }
  }

  return teams;
}

export default processPlayers;
