import { Box, Heading, Text } from '@chakra-ui/react';

interface TopPlayers {
  topPlayer: (string | number)[];
}

function TopPlayer({ topPlayer }: TopPlayers) {
  return (
    <Box w='full' display='flex' flexDir='column' alignItems='center' gap={3}>
      <Heading size='md' color='whiteAlpha.700'>
        Top {topPlayer[0]} Player:
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
          {topPlayer[1]}
        </Heading>
        <Box w='full'>
          <Box w='full' display='flex' justifyContent='space-around'>
            <Text fontSize='2xl' color='whiteAlpha.700' p={2}>
              Damage done:
            </Text>
            <Text fontSize='2xl' color='whiteAlpha.700'>
              {topPlayer[2]}
            </Text>
          </Box>
          <Box w='full' display='flex' justifyContent='space-around'>
            <Text fontSize='2xl' color='whiteAlpha.700'>
              Kills made:
            </Text>
            <Text fontSize='2xl' color='whiteAlpha.700'>
              {topPlayer[3]}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TopPlayer;
