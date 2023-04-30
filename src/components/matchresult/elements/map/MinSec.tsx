import { Box, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import EventsContext from '../../../../contexts/eventsContexts';
import useRoundStore from '../../../../stores/roundStore';

function MinSec() {
  const { statuses } = useContext(EventsContext);
  const { round } = useRoundStore();

  const isTime = statuses[round]?.roundTime ? true : false;

  const minutes = isTime && statuses[round].roundTime?.minutes;
  const seconds = isTime && statuses[round].roundTime?.seconds;

  return (
    <>
      <Heading size='lg'>Took:</Heading>
      <Box display='flex' flexWrap='wrap'>
        <Heading size='md'>
          {minutes && minutes > 0 ? `${minutes} Mins` : ''}
        </Heading>
        <Heading size='md' marginLeft={minutes && minutes > 0 ? 1 : 0}>
          {seconds && seconds > 0 ? `${seconds} Secs` : ''}
        </Heading>
      </Box>
    </>
  );
}

export default MinSec;
