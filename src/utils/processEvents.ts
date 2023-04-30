import { EventLog } from '../exports';
import processPlayers from './processPlayers';
import processRounds from './processRounds';
import processScores from './processScores';

function processEvents(matchLog: string[]) {
  const matchStart = matchLog.slice(
    matchLog.findLastIndex(e => e.includes(EventLog.start))
  );
  const players = processPlayers(matchLog, EventLog.assigned);
  const { logs, statuses } = processRounds(matchStart);

  const roundsPlayersStats = processScores(logs, players);

  return { statuses, roundsPlayersStats };
}

export default processEvents;
