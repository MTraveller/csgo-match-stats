import { Heading, Spinner } from '@chakra-ui/react';
import { useContext } from 'react';
import EventsContext from '../../../contexts/eventsContexts';
import useRoundStore from '../../../stores/roundStore';

function Scores() {
  const { statuses } = useContext(EventsContext);
  const { round } = useRoundStore();
  const isMap = statuses[round]?.map ? true : false;

  return isMap ? (
    <Heading color='black'>{statuses[round].roundScore}</Heading>
  ) : (
    <Spinner size='lg' />
  );
}

export default Scores;
