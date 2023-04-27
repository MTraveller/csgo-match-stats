import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Button, Circle, Flex, Text } from '@chakra-ui/react';

interface Rounds {
  statuses: object;
  round: number;
  setRound: React.Dispatch<React.SetStateAction<number>>;
}

interface Round {
  round: string;
}

function RoundPicker({ statuses, round, setRound }: Rounds) {
  const roundsStatus = Object.values(statuses);

  return (
    <Flex justifyContent='space-between'>
      <Box display='flex' flex='1' justifyContent='start'>
        <Button
          colorScheme='black'
          size='sm'
          onClick={() => round > 0 && setRound(round - 1)}
        >
          <ArrowLeftIcon
            boxSize={4}
            color={round === 0 ? '#200d19' : '#fdfe3f'}
          />
        </Button>
      </Box>
      <Box display='flex' flex='6' flexDirection='row' gap={3}>
        {statuses &&
          roundsStatus.map((obj: Round) => (
            <Circle
              key={obj.round}
              minW={8}
              bg='#000000'
              border='1px'
              borderColor='#fdfe3f'
              as='button'
              onClick={e => setRound(Number(e.currentTarget.innerText) - 1)}
            >
              <Text color='#fdfe3f'>{obj.round}</Text>
            </Circle>
          ))}
      </Box>
      <Box display='flex' flex='1' justifyContent='end'>
        <Button
          colorScheme='black'
          size='sm'
          onClick={() => round < roundsStatus.length - 1 && setRound(round + 1)}
        >
          <ArrowRightIcon
            boxSize={4}
            color={round === roundsStatus.length - 1 ? '#200d19' : '#fdfe3f'}
          />
        </Button>
      </Box>
    </Flex>
  );
}

export default RoundPicker;
