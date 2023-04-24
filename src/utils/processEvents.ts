import processPlayers from './processPlayers';

const enum Event {
  start = 'Match_Start',
  status = 'MatchStatus',
  ct = 'CT',
  terror = 'TERRORIST',
  assigned = '<Unassigned> to',
  round = 'Round_Start',
  attack = 'attacked',
  kill = 'killed',
}

function processEvents(matchLog: string[]) {
  const matchStart = matchLog.slice(
    matchLog.findLastIndex(e => e.includes(Event.start))
  );

  const players = processPlayers(matchLog, Event.assigned);

  console.log(players);
  console.log(matchStart);

  return [1, 2, 3];
}

export default processEvents;