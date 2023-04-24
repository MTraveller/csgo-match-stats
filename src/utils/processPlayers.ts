function processPlayers(matchLog: string[], assigned: string) {
  const teams: [object] = [{}];

  matchLog
    .filter(e => e.includes(assigned))
    .forEach(e => {
      const player = e.match(/:\s\\"(.*?)<\d\d>/);
      const side = e.match(/<Unassigned>\sto\s<(.*?)>/);
      if (player?.length && side?.length) teams.push({ [side[1]]: player[1] });
    });

  teams.shift();
  return teams;
}

export default processPlayers;
