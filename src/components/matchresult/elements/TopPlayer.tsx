import { Box, Heading, SkeletonText, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import TopPlayersContext from '../../../contexts/topPlayersContext';

type Teams = {
  team: 'ct' | 'tr';
};

function TopPlayer({ team }: Teams) {
  const { topPlayers } = useContext(TopPlayersContext);

  const isCT = team === 'ct' ? true : false;
  const topPlayer = isCT ? topPlayers[0] : topPlayers[1];

  return !topPlayer[1] ? (
    <Box w='full' h='full'>
      <SkeletonText noOfLines={4} spacing='8' skeletonHeight='8' />
    </Box>
  ) : (
    <Box
      w='full'
      h='full'
      display='flex'
      flexDir='column'
      justifyContent='space-evenly'
    >
      <Box display='flex' flexDir='column' alignItems='center' gap={2}>
        <Heading size='md' color='whiteAlpha.700'>
          Best Player:
        </Heading>
        <Heading
          size='2xl'
          fontWeight='black'
          color='whiteAlpha.700'
          bgGradient={`linear(to-r, #000000, ${
            isCT ? 'blue.500' : 'red.500'
          }, #000000)`}
          px={16}
          py={2}
        >
          {topPlayer[1]}
        </Heading>
      </Box>
      <Box w='full'>
        <Box w='full' display='flex' justifyContent='space-around'>
          <Text fontSize='xl' color='whiteAlpha.700'>
            Damage done:
          </Text>
          <Text fontSize='xl' color='whiteAlpha.700'>
            {topPlayer[2]}
          </Text>
        </Box>
        <Box w='full' display='flex' justifyContent='space-around'>
          <Text fontSize='xl' color='whiteAlpha.700'>
            Kills made:
          </Text>
          <Text fontSize='xl' color='whiteAlpha.700'>
            {topPlayer[3]}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default TopPlayer;
