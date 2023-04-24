import useLogFetcher from '../hooks/useLogFetcher';
import processEvents from '../utils/processEvents';
import processTeams from '../utils/processTeams';

interface Url {
  url: string;
}

function MatchGameLog({ url }: Url) {
  const { data, error, isLoading } = useLogFetcher(url);
  const gameEvents = JSON.stringify(data).split('\\r\\n');
  const teams = processTeams(url);
  const matchResult = processEvents(gameEvents);

  console.log(teams);
  console.log(matchResult);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error.message}</h2>
  ) : (
    <h2>Stats</h2>
  );
}

export default MatchGameLog;
