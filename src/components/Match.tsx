import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import MatchForm from './MatchForm';
import MatchGameLog from './MatchGameLog';

const Match = () => {
  const [url, setUrl] = useState('');

  return (
    <>
      <MatchForm setUrl={setUrl} />

      <Box bg='#251821' w='100%' p={10}>
        {url ? (
          <MatchGameLog url={url} />
        ) : (
          <h2>Please enter a url to a .txt log file to view match stats.</h2>
        )}
      </Box>
    </>
  );
};

export default Match;
