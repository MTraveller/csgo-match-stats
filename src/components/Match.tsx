import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import MatchForm from './MatchForm';
import MatchGameLog from './MatchGameLog';

export interface Url {
  url: string;
}

const Match = () => {
  const [url, setUrl] = useState<Url>();

  return (
    <>
      <MatchForm setUrl={setUrl} />

      <Box bg='#251821' w='100%' p={10}>
        {url && <MatchGameLog url={url?.toString()} />}
      </Box>
    </>
  );
};

export default Match;
