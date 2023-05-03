import { Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import EventsContext from '../../../../contexts/eventsContexts';
import useRoundStore from '../../../../stores/roundStore';

function Played() {
  const { statuses, averageTime } = useContext(EventsContext);
  const { round } = useRoundStore();

  return (
    <>
      <Heading>{statuses[round].map}</Heading>
      <Heading size='md'>Average Time:</Heading>
      <Heading size='md'>
        {averageTime.mins} Mins {averageTime.secs} Secs
      </Heading>
    </>
  );
}

export default Played;
