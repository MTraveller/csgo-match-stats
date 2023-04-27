import { Box, Center, Grid, GridItem, Heading } from '@chakra-ui/react';
import RoundPicker from './MatchResult/RoundPicker';
import { useState } from 'react';
import TopThreeCT from './MatchResult/TopThreeCT';
import TopThreeTR from './MatchResult/TopThreeTR';
// import processPerformance from '../utils/processPerformance';
import { RoundsPlayersStats } from '../utils/processScores';

interface MatchResults {
  rounds: {
    logs: object[];
    statuses: object[];
  };
  performance: RoundsPlayersStats;
}

interface StatusObj {
  [x: number]: {
    map: string;
    round: string;
    roundScore: string;
    roundTime: { minutes: number; seconds: number };
    ct: string;
    tr: string;
  };
}

function MatchResult({ rounds }: MatchResults) {
  const [round, setRound] = useState(0);
  const statuses = rounds.statuses as unknown as StatusObj;

  // const { CT, TR } = processPerformance(performance[0]);

  // console.log(CT, TR);

  return (
    <Box>
      <Box minH='60px' mb='6' p='0'>
        <RoundPicker statuses={statuses} round={round} setRound={setRound} />
      </Box>
      <Grid
        h='600px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg='#fdfe3f' borderLeftRadius='10'>
          <Box
            display='flex'
            flexDir='column'
            h='full'
            alignItems='center'
            justifyContent='center'
            color='black'
            gap={5}
          >
            <Heading>{statuses[round]?.map}</Heading>
            <Heading>Round: {round + 1}</Heading>
            <Heading>Took: </Heading>
            <Heading size='lg'>
              {statuses[round]?.roundTime.minutes > 0 &&
                `${statuses[round]?.roundTime.minutes} Mins`}{' '}
              {statuses[round]?.roundTime.seconds > 0 &&
                `${statuses[round]?.roundTime.seconds} Secs`}
            </Heading>
          </Box>
        </GridItem>
        <GridItem colSpan={4} bg='#000000'>
          <Box
            h='full'
            display='flex'
            flexDir='row'
            justifyContent='space-around'
            alignItems='center'
          >
            <Box display='flex' flexDir='column' alignItems='center' gap={5}>
              <Heading>Counter Terrorist:</Heading>
              <Heading>{statuses[round]?.ct}</Heading>
            </Box>
            <Box
              w='120px'
              h='80px'
              display='flex'
              flexDir='column'
              justifyContent='center'
              alignItems='center'
              bgColor='#fdfe3f'
              borderRadius='full'
              gap={5}
            >
              <Heading color='black'>{statuses[round]?.roundScore}</Heading>
            </Box>
            <Box display='flex' flexDir='column' alignItems='center' gap={5}>
              <Heading>Terrorist:</Heading>
              <Heading>{statuses[round]?.tr}</Heading>
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={2} bg='#000000'>
          <Center h='full'>
            <TopThreeCT />
          </Center>
        </GridItem>
        <GridItem colSpan={2} bg='#000000'>
          <Center h='full'>
            <TopThreeTR />
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default MatchResult;
