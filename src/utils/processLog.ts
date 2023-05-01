import useLogFetcher from '../hooks/useLogFetcher';
import useMatchLengthStore from '../stores/lengthStore';
import useLogStore from '../stores/logStore';
import processEvents from '../utils/processEvents';

function processLog() {
  const { oldUrl, newUrl } = useUrlStore();
  
  let refetch = false;
  if (oldUrl !== newUrl) refetch = true;
  
  const { data, error } = useLogFetcher(url, refetch);
  
  
  const gameEvents = JSON.stringify(data).split('\\r\\n');
  const { statuses, roundsPlayersStats } = processEvents(gameEvents);

  const statusesLength = Object.values(statuses).map((_, idx) => idx).length;
    
  let { matchLength, setMatchLength } = useMatchLengthStore();
  if (statusesLength !== matchLength) setMatchLength(statusesLength);
  
  return statusesLength ? { statuses, roundsPlayersStats } : false;
}

export default processLog;
