import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export interface Log {
  url: string;
  data?: string;
}

const useLogFetcher = (url: string) => {
  const fetchLogs = () =>
    axios
      .get<Log>('https://api.codetabs.com/v1/proxy/?quest=' + url)
      .then(res => res.data);

  return useQuery<Log, Error>({
    queryKey: ['logs'],
    queryFn: fetchLogs,
  });
};

export default useLogFetcher;
