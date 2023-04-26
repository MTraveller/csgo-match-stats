import {
  Box,
  Button,
  Circle,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

interface MatchResults {
  rounds: LogStatusObj;
  performance: object[];
}

interface LogStatusObj {
  logs: object[];
  statuses: StatusObj[] | object;
}

interface StatusObj {
  map: string;
  round: string;
  roundScore: string;
  roundTime: { minutes: number; seconds: number };
  ct: string;
  tr: string;
}

function MatchResult({ rounds, performance }: MatchResults) {
  console.log(rounds, performance);
  console.log(rounds.statuses);

  return (
    <Box w='full'>
      <Box minH='60px' mb='6' p='0'>
        <HStack
          justifyContent='space-between'
          alignItems='center'
          overflow='hidden'
        >
          <Button colorScheme='black' size='sm'>
            <ArrowLeftIcon boxSize={4} color='#fdfe3f' />
          </Button>
          <Flex color='white' gap={3} overflow='scroll'>
            {Object.values(rounds.statuses).map((obj: StatusObj) => (
              <Circle
                key={obj.round}
                minW={6}
                bg='#000000'
                border='1px'
                borderColor='#fdfe3f'
                as='button'
              >
                <Text color='#fdfe3f'>{obj.round}</Text>
              </Circle>
            ))}
          </Flex>
          <Button colorScheme='black' size='sm'>
            <ArrowRightIcon boxSize={4} color='#fdfe3f' />
          </Button>
        </HStack>
      </Box>
      <Grid
        h='300px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg='#200d19' />
        <GridItem colSpan={2} bg='#000000' />
        <GridItem colSpan={2} bg='#000000' />
        <GridItem colSpan={4} bg='#200d19' />
      </Grid>
    </Box>
  );
}

export default MatchResult;
