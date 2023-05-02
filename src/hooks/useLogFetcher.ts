import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useUrlStore from '../stores/urlStore';

interface Logs {
  data: string;
}

const useLogFetcher = () => {
  const { valid, url } = useUrlStore();

  const fetchLogs = () =>
    axios
      .get<Logs>('https://api.codetabs.com/v1/proxy/?quest=' + url)
      .then(res => res.data);

  return useQuery<Logs, Error>({
    queryKey: ['logs', valid && url],
    queryFn: fetchLogs,
    enabled: valid && !!url,
  });
};

export default useLogFetcher;
