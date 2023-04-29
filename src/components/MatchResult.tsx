import { useState } from 'react';
import { Box, Center, Grid, GridItem, Heading } from '@chakra-ui/react';
import { RoundsPlayersStats } from '../utils/processScores';
import processTopPlayers from '../utils/processTopPlayers';
import RoundPicker from './MatchResult/RoundPicker';
import TopPlayer from './MatchResult/TopPlayer';



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

function MatchResult({ rounds, performance }: MatchResults) {
  const [round, setRound] = useState(0);
  const statuses = rounds.statuses as StatusObj;

  const { topCTPlayer, topTRPlayer } = processTopPlayers(
    performance,
    round + 1
  );
  
  topCTPlayer.unshift('Counter Terrorist');
  topTRPlayer.unshift('Terrorist');

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
            justifyContent='space-around'
            color='black'
            p={6}
            gap={5}
          >
            <Box w='full' display='flex' flexDir='column' gap={2}>
              <Heading>{statuses[round]?.map}</Heading>
              <Heading size='lg'>Round:</Heading>
              <Heading>
                {round + 1} of {Object.values(statuses).length}
              </Heading>
            </Box>
            <Box w='full' display='flex' flexDir='column'>
              <Heading size='lg'>Took: </Heading>
              <Box display='flex' flexWrap='wrap'>
                <Heading size='md'>
                  {statuses[round]?.roundTime.minutes > 0 &&
                    `${statuses[round]?.roundTime.minutes} Mins`}
                </Heading>
                <Heading
                  size='md'
                  marginLeft={statuses[round]?.roundTime.minutes > 0 ? 2.5 : 0}
                >
                  {statuses[round]?.roundTime.seconds > 0 &&
                    `${statuses[round]?.roundTime.seconds} Secs`}
                </Heading>
              </Box>
            </Box>
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
              <Heading color='blue.700'>Counter Terrorist:</Heading>
              <Heading color='whiteAlpha.700'>{statuses[round]?.ct}</Heading>
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
              <Heading color='red.700'>Terrorist:</Heading>
              <Heading color='whiteAlpha.700'>{statuses[round]?.tr}</Heading>
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={2} bg='#000000'>
          <Center h='full'>
            <TopCT topCTPlayer={topCTPlayer} />
          </Center>
        </GridItem>
        <GridItem colSpan={2} bg='#000000'>
          <Center h='full'>
            <TopTR topTRPlayer={topTRPlayer} />
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default MatchResult;
