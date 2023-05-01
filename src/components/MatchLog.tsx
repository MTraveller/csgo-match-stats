import EventsContext from '../contexts/eventsContexts';
import MatchResult from './MatchResult';


function MatchLog() {
  const { url } = useUrlStore();
  const { statuses, roundsPlayersStats } = processLog(url);

  return error ? (
    <h2>{error.message}</h2>
  ) : (
    <EventsContext.Provider value={{ statuses, roundsPlayersStats }}>
      <MatchResult />
    </EventsContext.Provider>
  );
}

export default MatchLog;
