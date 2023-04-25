export interface Players {
  team: string;
  player: string;
}

function processPlayers(matchLog: string[], assigned: string) {
  const teams: Players[] = [];

  matchLog
    .filter(e => e.includes(assigned))
    .forEach(e => {
      const player = e.match(/:\s\\"(.*?)<\d\d>/)?.at(1);
      const team = e.match(/<Unassigned>\sto\s<(.*?)>/)?.at(1);
      if (player?.length && team?.length) teams.push({ team, player });
    });

  return teams;
}

export default processPlayers;
