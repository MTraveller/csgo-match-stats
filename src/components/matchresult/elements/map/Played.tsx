import { Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import EventsContext from '../../../../contexts/eventsContexts';
import useMatchLengthStore from '../../../../stores/lengthStore';
import useRoundStore from '../../../../stores/roundStore';

function Played() {
  const { statuses } = useContext(EventsContext);
  const { round } = useRoundStore();
  const { matchLength } = useMatchLengthStore();

  return (
    <>
      <Heading>{statuses[round].map}</Heading>
      <Heading size='lg'>Round:</Heading>
      <Heading>
        {round + 1} of {matchLength}
      </Heading>
    </>
  );
}

export default Played;
