import processEvents from '../utils/processEvents';
import useLogFetcher from './useLogFetcher';
import useUrlLogsStore from '../stores/urlLogsStore';

const useProcessLog = () => {
  const { data, isError, error } = useLogFetcher();
  const { setLog } = useUrlLogsStore();

  const gameEvents: string[] = [];

  try {
    gameEvents.push(...JSON.stringify(data).split('\\r\\n'));
  } catch {
    setLog(false);
  }

  const { statuses, roundsPlayersStats } = processEvents(gameEvents);

  return { statuses, roundsPlayersStats, isError, error };
};

export default useProcessLog;
