import useLogFetcher from '../hooks/useLogFetcher';
import { Log } from '../hooks/useLogFetcher';

function MatchGameLog({ url }: Log) {
  const { data: log, error, isLoading } = useLogFetcher(url);

  const gameEvents = log?.split(/[\r\n]+/);

  console.log(gameEvents);

  return isLoading ? <h2>Loading...</h2> : error ? error : log;
}

export default MatchGameLog;
