import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Logs {
  data: string;
}

interface Fetchs {
  url: string;
  refetchUrl: boolean;
}

const useLogFetcher = (url, refetchUrl): Fetchs => {
  const fetchLogs = () =>
    axios
      .get<Log>('https://api.codetabs.com/v1/proxy/?quest=' + url)
      .then(res => res.data);

  const data = useQuery<Logs, Error>({
    queryKey: ['logs'],
    queryFn: fetchLogs,
    keepPreviousData: true,
    initialData: { data: '' },
  });
  
  if (refetchUrl) useQuery().refetch()
  
  return data;
};

export default useLogFetcher;
