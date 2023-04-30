import { Box, Heading, Spinner } from '@chakra-ui/react';
import { Teams } from './layout/XL';

function Team({ team }: Teams) {
  const isCT = team[1] === 'ct' ? true : false;

  return team[0] === '' ? (
    <Spinner size='xl' color={isCT ? 'blue.700' : 'red.700'} />
  ) : (
    <Box display='flex' flexDir='column' alignItems='center' gap={5}>
      <Heading color={isCT ? 'blue.600' : 'red.600'}>
        {isCT ? 'Counter Terrorist' : 'Terrorist'}
      </Heading>
      <Heading color='whiteAlpha.700'>{team[0]}</Heading>
    </Box>
  );
}

export default Team;
