import { useEffect } from 'react';
import EventsContext, {
  RoundsPlayersStats,
  Statuses,
} from '../contexts/eventsContexts';
import useProcessLog from '../hooks/useProcessLog';
import useMatchLengthStore from '../stores/lengthStore';
import useUrlLogsStore from '../stores/urlLogsStore';
import MatchResult from './MatchResult';

interface ProcessLogs {
  statuses: Statuses[];
  roundsPlayersStats: RoundsPlayersStats;
  isError: boolean;
  error: Error | null;
}

function MatchLog() {
  const { statuses, roundsPlayersStats, isError, error }: ProcessLogs =
    useProcessLog();
  const { matchLength, setMatchLength } = useMatchLengthStore();
  const { isLog } = useUrlLogsStore();

  useEffect(() => {
    const statusesLength = Object.keys(statuses).length;
    if (statusesLength !== matchLength) setMatchLength(statusesLength);
  }, [statuses, matchLength, setMatchLength]);

  return isError ? (
    <h2>{error?.message}</h2>
  ) : isLog ? (
    <EventsContext.Provider value={{ statuses, roundsPlayersStats }}>
      <MatchResult />
    </EventsContext.Provider>
  ) : <h2>Error: The entered URL has no match logs!!!</h2>;
}

export default MatchLog;
