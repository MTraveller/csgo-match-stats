import { Box, Text } from '@chakra-ui/react';
import processUrlTeams from '../utils/processUrlTeams';
import MatchForm from './MatchForm';
import MatchLog from './MatchLog';
import useUrlStore from '../stores/urlStore';

function Match() {
  const { url } = useUrlStore();
  const teamsIsValid = processUrlTeams(url).length === 2 ? true : false;

  return (
    <>
      <MatchForm />

      <Box w='full' bg='#251821'>
        {!teamsIsValid && url[1] ? (
          <Text>Please enter a valid url with team names and match log!</Text>
        ) : teamsIsValid && url[1] ? (
          <MatchLog />
        ) : (
          <Text>
            Please enter a url to a .txt log file to view match stats.
          </Text>
        )}
      </Box>
    </>
  );
}

export default Match;
