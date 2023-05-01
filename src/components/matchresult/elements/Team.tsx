import { Heading, Spinner } from '@chakra-ui/react';
import { useContext } from 'react';
import EventsContext from '../../../contexts/eventsContexts';
import useRoundStore from '../../../stores/roundStore';

interface Teams {
  team: string;
}

function Team({ team }: Teams) {
  const { statuses } = useContext(EventsContext);
  const { round } = useRoundStore();

  const isCT = team === 'ct' ? true : false;
  const ctOrTr = isCT ? statuses[round]?.ct : statuses[round]?.tr;

  return team === '' ? (
    <Spinner size='xl' color={isCT ? 'blue.700' : 'red.700'} />
  ) : (
    <>
      <Heading color={isCT ? 'blue.600' : 'red.600'}>
        {isCT ? 'Counter Terrorist' : 'Terrorist'}
      </Heading>
      <Heading color='whiteAlpha.700'>{ctOrTr}</Heading>
    </>
  );
}

export default Team;
