import useLogFetcher from '../hooks/useLogFetcher';
import processEvents from '../utils/processEvents';
import processUrlTeams from '../utils/processUrlTeams';
import MatchResult from './MatchResult';

interface Url {
  url: string;
}

function MatchLog({ url }: Url) {
  const { data, error, isLoading } = useLogFetcher(url);
  const gameEvents = JSON.stringify(data).split('\\r\\n');
  const teamsIsValid = processUrlTeams(url).length === 2 ? true : false;
  const matchResult = processEvents(gameEvents);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error.message}</h2>
  ) : !teamsIsValid ? (
    <h2>Please enter a valid url with team names and match log!</h2>
  ) : (
    <MatchResult
      rounds={matchResult.rounds}
      performance={matchResult.performance}
    />
  );
}

export default MatchLog;