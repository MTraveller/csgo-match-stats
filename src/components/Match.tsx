import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import MatchForm from './MatchForm';
import MatchLog from './MatchLog';

const Match = () => {
  const [url, setUrl] = useState('');

  return (
    <>
      <MatchForm setUrl={setUrl} />

      <Box w='full' bg='#251821' p={10}>
        {url ? (
          <MatchLog url={url} />
        ) : (
          <h2>Please enter a url to a .txt log file to view match stats.</h2>
        )}
      </Box>
    </>
  );
};

export default Match;
