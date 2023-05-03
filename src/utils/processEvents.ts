import calcAverageTime from './calcAverageTime';
import processPlayers from './processPlayers';
import processRounds from './processRounds';
import processScores from './processScores';

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
  const { logs, statuses } = processRounds(matchStart);
  const averageTime = calcAverageTime({ statuses });
  const roundsPlayersStats = processScores(logs, players);

  return { statuses, roundsPlayersStats, averageTime };
}

export default processEvents;
