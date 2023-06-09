import processEvents from '../utils/processEvents';
import useLogFetcher from './useLogFetcher';

const useProcessLog = () => {
  const { data, isError, error } = useLogFetcher();

  const gameEvents: string[] = [];

  if (data) gameEvents.push(...JSON.stringify(data).split('\\r\\n'));

  const { statuses, roundsPlayersStats, averageTime } =
    processEvents(gameEvents);
  return { statuses, roundsPlayersStats, averageTime, isError, error };
};

export default useProcessLog;
