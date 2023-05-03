import { Box, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import EventsContext from '../../../../contexts/eventsContexts';
import useMatchLengthStore from '../../../../stores/lengthStore';
import useRoundStore from '../../../../stores/roundStore';

function MinSec() {
  const { statuses } = useContext(EventsContext);
  const { matchLength } = useMatchLengthStore();
  const { round } = useRoundStore();

  const isTime = statuses[round]?.roundTime ? true : false;

  const minutes = isTime && statuses[round].roundTime?.minutes;
  const seconds = isTime && statuses[round].roundTime?.seconds;

  return (
    <Box display='flex' flexDir='column' gap={3}>
      <Box>
        <Heading size='lg'>Round:</Heading>
        <Heading>
          {round + 1} of {matchLength}
        </Heading>
      </Box>
      <Box>
        <Heading size='lg'>Took:</Heading>
        <Box display='flex' flexWrap='wrap'>
          <Heading size='md'>
            {minutes && minutes > 0 ? `${minutes} Mins` : ''}
          </Heading>
          <Heading size='md' marginLeft={minutes && minutes > 0 ? 1 : 0}>
            {seconds && seconds > 0 ? `${seconds} Secs` : ''}
          </Heading>
        </Box>
      </Box>
    </Box>
  );
}

export default MinSec;
