import { Box, Heading, Text } from '@chakra-ui/react';

interface TopPlayers {
  topCTPlayer: (string | number)[];
}

function TopCT({ topCTPlayer }: TopPlayers) {
  return (
    <Box w='full' display='flex' flexDir='column' alignItems='center' gap={3}>
      <Heading size='md' color='whiteAlpha.700'>
        Top Counter Terrorist Player:
      </Heading>
      <Box w='full' display='flex' flexDir='column' alignItems='center' gap={2}>
        <Heading
          size='2xl'
          fontWeight='black'
          color='whiteAlpha.700'
          bgGradient='linear(to-r, #000000, blue.500, #000000)'
          px={16}
          py={2}
        >
          {topCTPlayer[0]}
        </Heading>
        <Box w='full'>
          <Box w='full' display='flex' justifyContent='space-around'>
            <Text fontSize='2xl' color='whiteAlpha.700' p={2}>
              Damage done:
            </Text>
            <Text fontSize='2xl' color='whiteAlpha.700'>
              {topCTPlayer[1]}
            </Text>
          </Box>
          <Box w='full' display='flex' justifyContent='space-around'>
            <Text fontSize='2xl' color='whiteAlpha.700'>
              Kills done:
            </Text>
            <Text fontSize='2xl' color='whiteAlpha.700'>
              {topCTPlayer[2]}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TopCT;
