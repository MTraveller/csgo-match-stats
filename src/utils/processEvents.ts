const MATCH = {
  start: 'Match_Start',
  status: 'MatchStatus',
  ct: 'CT',
  terror: 'TERRORIST',
  assigned: '<Unassigned> to',
  round: 'Round_Start',
  attack: 'attacked',
  kill: 'killed',
};

function processEvents(matchLog: string[]) {
  console.log('processEvents', matchLog);

  const matchMaps = matchLog.filter(log => log.includes(MATCH.start));
  const matchStatus = matchLog.filter(log => log.includes(MATCH.status));
  const matchCT = matchLog.filter(log => log.includes(MATCH.ct));
  const matchTerror = matchLog.filter(log => log.includes(MATCH.terror));
  const matchAssigned = matchLog.filter(log => log.includes(MATCH.assigned));
  const matchRound = matchLog.filter(log => log.includes(MATCH.round));
  const matchAttack = matchLog.filter(log => log.includes(MATCH.attack));
  const matchKill = matchLog.filter(log => log.includes(MATCH.kill));

  console.log(matchMaps);
  console.log(matchStatus);
  console.log(matchCT);
  console.log(matchTerror);
  console.log(matchAssigned);
  console.log(matchRound);
  console.log(matchAttack);
  console.log(matchKill);
}

export default processEvents;
