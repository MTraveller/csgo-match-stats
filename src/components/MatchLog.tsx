import useLogFetcher from '../hooks/useLogFetcher';
import processEvents from '../utils/processEvents';
import MatchResult from './MatchResult';

interface Url {
  url: string;
}

function MatchLog({ url }: Url) {
  let { data, error, isLoading } = useLogFetcher(url);
  const gameEvents = JSON.stringify(data).split('\\r\\n');
  const matchResult = processEvents(gameEvents);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error.message}</h2>
  ) : (
    <MatchResult
      rounds={matchResult.rounds}
      performance={matchResult.performance}
    />
  );
}

export default MatchLog;
