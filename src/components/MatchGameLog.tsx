import useLogFetcher from '../hooks/useLogFetcher';
import { Log } from '../hooks/useLogFetcher';
import processTeams from '../utils/processTeams';

function MatchGameLog({ url }: Log) {
  const { data: log, error, isLoading } = useLogFetcher(url);
  const gameEvents = log?.split(/[\r\n]+/);
  const teams = processTeams(url);
  const matchResult = processEvents(gameEvents);

  console.log(matchResult);
  console.log(teams);
  console.log(gameEvents);

  return isLoading ? <h2>Loading...</h2> : error ? error : log;
}

export default MatchGameLog;
