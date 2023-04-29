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
  const roundsLengthMinusOne = roundsStatus.length - 1;

  return (
    <Flex h='60px' justifyContent='space-between'>
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
      <Box
        h='40px'
        display='flex'
        flexFlow='row'
        flexShrink={2}
        overflowY='scroll'
        gap={3}
      >
        {roundsStatus.length &&
          roundsStatus.map((obj: Round) => {
            const roundMinusOne = Number(obj.round) - 1;
            const roundMinusTwo = Number(obj.round) - 2;
            const roundEqualCurrRound = roundMinusOne === round;

            return (
              <Circle
                key={obj.round}
                display={
                  roundMinusTwo > round || Number(obj.round) < round
                    ? 'none'
                    : 'block'
                }
                minW={10}
                bg={roundEqualCurrRound ? '#fdfe3f' : '#000000'}
                border='1px'
                borderColor='#fdfe3f'
                as='button'
                onClick={e => setRound(Number(e.currentTarget.innerText) - 1)}
              >
                <Text
                  textColor={roundEqualCurrRound ? '#000000' : '#fdfe3f'}
                  fontWeight={roundEqualCurrRound ? 'black' : 'normal'}
                >
                  {obj.round}
                </Text>
              </Circle>
            );
          })}
      </Box>
      <Box display='flex' flex='1' justifyContent='end'>
        <Button
          colorScheme='black'
          size='sm'
          onClick={() => round < roundsLengthMinusOne && setRound(round + 1)}
        >
          <ArrowRightIcon
            boxSize={4}
            color={round === roundsLengthMinusOne ? '#200d19' : '#fdfe3f'}
          />
        </Button>
      </Box>
    </Flex>
  );
}

export default RoundPicker;
