import { Box, Circle, Flex, Grid, GridItem, Text } from '@chakra-ui/react';

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
    <>
      <Box w='100%' h='50px' mb='6' p='0'>
        <Flex color='white' height='12' gap={3}>
          {Object.values(rounds.statuses).map((obj: StatusObj) => (
            <Circle
              key={obj.round}
              minWidth='50px'
              bg='#200d19'
              border='1px'
              borderColor='#fdfe3f'
              as='button'
            >
              <Text color='#fdfe3f'>{obj.round}</Text>
            </Circle>
          ))}
        </Flex>
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
    </>
  );
}

export default MatchResult;
