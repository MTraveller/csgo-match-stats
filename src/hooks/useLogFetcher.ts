import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

interface Log {
  data: string;
}

const useLogFetcher = (url: string) => {
  const fetchLogs = () =>
    axios
      .get<Log>('https://api.codetabs.com/v1/proxy/?quest=' + url)
      .then(res => {
        console.log(typeof res.data);
        return res.data;
      });

  return useQuery<Log, Error>({
    queryKey: ['logs'],
    queryFn: fetchLogs,
  });
};

export default useLogFetcher;
