import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Log {
  data: string;
}

const useLogFetcher = (url: string) => {
  console.log('useLogFetcher', url);

  const fetchLogs = () =>
    axios
      .get<Log>('https://api.codetabs.com/v1/proxy/?quest=' + url)
      .then(res => res.data);

  return useQuery<Log, Error>({
    queryKey: ['logs'],
    queryFn: fetchLogs,
    keepPreviousData: true,
    initialData: { data: '' },
  });
};

export default useLogFetcher;
