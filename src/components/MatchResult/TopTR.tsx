import { Box, Heading, Text } from '@chakra-ui/react';

interface TopPlayers {
  topTRPlayer: [string, number, number];
}

function TopTR({ topTRPlayer }: TopPlayers) {
  return (
    <Box w='full' display='flex' flexDir='column' alignItems='center' gap={3}>
      <Heading size='md'>Top Terrorist Player:</Heading>
      <Box w='full' display='flex' flexDir='column' alignItems='center' gap={2}>
        <Heading size='2xl'>{topTRPlayer[0]}</Heading>
        <Box w='full'>
          <Box w='full' display='flex' justifyContent='space-around'>
            <Text fontSize='2xl'>Damage done:</Text>
            <Text fontSize='2xl'>{topTRPlayer[1]}</Text>
          </Box>
          <Box w='full' display='flex' justifyContent='space-around'>
            <Text fontSize='2xl'>Kills done:</Text>
            <Text fontSize='2xl'>{topTRPlayer[2]}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TopTR;
