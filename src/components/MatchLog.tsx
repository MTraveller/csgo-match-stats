import { useEffect } from 'react';
import EventsContext, {
  RoundsPlayersStats,
  Statuses,
} from '../contexts/eventsContexts';
import useProcessLog from '../hooks/useProcessLog';
import useMatchLengthStore from '../stores/lengthStore';
import MatchResult from './MatchResult';

interface ProcessLogs {
  statuses: Statuses[];
  roundsPlayersStats: RoundsPlayersStats;
  averageTime: { mins: number; secs: number };
  isError: boolean;
  error: Error | null;
}

function MatchLog() {
  const {
    statuses,
    roundsPlayersStats,
    averageTime,
    isError,
    error,
  }: ProcessLogs = useProcessLog();
  const { matchLength, setMatchLength } = useMatchLengthStore();

  useEffect(() => {
    const statusesLength = Object.keys(statuses).length;
    if (statusesLength !== matchLength) setMatchLength(statusesLength);
  }, [statuses, matchLength, setMatchLength]);

  return isError ? (
    <h2>{error?.message}</h2>
  ) : (
    <EventsContext.Provider
      value={{ statuses, roundsPlayersStats, averageTime }}
    >
      <MatchResult />
    </EventsContext.Provider>
  );
}

export default MatchLog;
