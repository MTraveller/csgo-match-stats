import { useEffect } from 'react';
import EventsContext from '../contexts/eventsContexts';
import useMatchLengthStore from '../stores/lengthStore';
import useLogStore from '../stores/logStore';
import processEvents from '../utils/processEvents';
import MatchResult from './MatchResult';

interface Url {
  url: string;
}

function MatchLog() {
  const { log } = useLogStore();
  // const { data, error } = useLogFetcher(url);
  let { matchLength, setMatchLength } = useMatchLengthStore();
  const gameEvents = JSON.stringify(data).split('\\r\\n');
  const { statuses, roundsPlayersStats } = processEvents(gameEvents);

  const statusesLength = Object.values(statuses).map((_, idx) => idx).length;

  useEffect(() => {
    if (statusesLength && !length) setMatchLength(statusesLength);
  }, [matchLength, statusesLength, setMatchLength]);

  return error ? (
    <h2>{error.message}</h2>
  ) : (
    <EventsContext.Provider value={{ statuses, roundsPlayersStats }}>
      <MatchResult />
    </EventsContext.Provider>
  );
}

export default MatchLog;
