import { Box, Center, Flex, Heading } from '@chakra-ui/react';

const Nav = () => {
  return (
    <header>
      <Flex pl='3' alignItems='center'>
        <Center w='60px' h='60px'>
          Logo
        </Center>
        <Box w='100%' pl='10'>
          <Heading size='md'>CS:GO Match Stats</Heading>
        </Box>
      </Flex>
    </header>
  );
};

export default Nav;
