import processScores from './processScores';
import processPlayers from './processPlayers';
import processRounds from './processRounds';

export const enum EventLog {
  start = 'Match_Start',
  status = 'MatchStatus',
  map = 'on map',
  ct = 'Team playing \\"CT\\"',
  tr = 'Team playing \\"TERRORIST\\"',
  assigned = '<Unassigned> to',
  roundStart = 'Round_Start',
  roundEnd = 'Round_End',
  roundsPlayed = 'RoundsPlayed',
  attack = 'attacked',
  kill = 'killed',
}

function processEvents(matchLog: string[]) {
  const matchStart = matchLog.slice(
    matchLog.findLastIndex(e => e.includes(EventLog.start))
  );
  const players = processPlayers(matchLog, EventLog.assigned);
  const playingRounds = processRounds(matchStart);
  const roundsAttacks = processScores(playingRounds, players);

  console.log(playingRounds);
  console.log('RoundsAttacks', roundsAttacks);

  return [1, 2, 3];
}

export default processEvents;
