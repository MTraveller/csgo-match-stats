import { ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';

function Nav() {
  return (
    <header>
      <Flex pl='3' alignItems='center'>
        <Center w='60px' h='60px'>
          <ArrowRightIcon boxSize={4} />
        </Center>
        <Box w='100%' pl='10'>
          <Heading size='md'>CS:GO Match Stats</Heading>
        </Box>
      </Flex>
    </header>
  );
}

export default Nav;
