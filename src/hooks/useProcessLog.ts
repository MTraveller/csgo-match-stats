import processEvents from '../utils/processEvents';
import useLogFetcher from './useLogFetcher';

const useProcessLog = () => {
  const { data, isError, error } = useLogFetcher();

  const gameEvents: string[] = [];
  let isErrorUrl = false;

  try {
    gameEvents.push(...JSON.stringify(data).split('\\r\\n'));
  } catch {
    // TODO: Implement solution when URL has no logs.
    isErrorUrl = true;
  }

  const { statuses, roundsPlayersStats } = processEvents(gameEvents);

  return { statuses, roundsPlayersStats, isError, error, isErrorUrl };
};

export default useProcessLog;
