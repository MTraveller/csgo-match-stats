import { Box, Spinner } from '@chakra-ui/react';
import { useContext } from 'react';
import EventsContext from '../../../../contexts/eventsContexts';
import useRoundStore from '../../../../stores/roundStore';
import MinSec from './MinSec';
import Played from './Played';

function MapDetails() {
  const { statuses } = useContext(EventsContext);
  const { round } = useRoundStore();

  const isMap = statuses[round]?.map ? true : false;

  return (
    <Box
      display='flex'
      flexDir='column'
      h='full'
      alignItems='center'
      justifyContent='space-around'
      color='black'
      p={6}
    >
      {isMap ? (
        <>
          <Box w='full' display='flex' flexDir='column' gap={2}>
            <Played />
          </Box>
          <Box w='full' display='flex' flexDir='column'>
            <MinSec />
          </Box>
        </>
      ) : (
        <Spinner size='xl' />
      )}
    </Box>
  );
}

export default MapDetails;
