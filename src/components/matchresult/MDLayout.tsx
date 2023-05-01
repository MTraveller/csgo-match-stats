import { Box, Center, Grid, GridItem } from '@chakra-ui/react';
import MapDetails from './elements/map/MapDetails';
import RoundPicker from './elements/RoundPicker';
import Scores from './elements/Scores';
import Team from './elements/Team';
import TopPlayer from './elements/TopPlayer';

function MDLayout() {
  return (
    <Box p={6}>
      <Box minH='60px' mb='6' p='0'>
        <RoundPicker />
      </Box>
      <Grid
        h='800px'
        templateRows='repeat(8, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg='#fdfe3f' borderLeftRadius='10'>
          <MapDetails />
        </GridItem>
        <GridItem rowSpan={2} colSpan={4} height='360px' bg='#000000'>
          <Box
            h='full'
            display='flex'
            flexDir='column'
            justifyContent='space-evenly'
            alignItems='center'
          >
            <Box display='flex' flexDir='column' alignItems='center' gap={2}>
              <Team team={'ct'} />
            </Box>
            <Box
              w='100px'
              h='45px'
              display='flex'
              flexDir='column'
              justifyContent='center'
              alignItems='center'
              bgColor='#fdfe3f'
              borderRadius='full'
            >
              <Scores />
            </Box>
            <Box display='flex' flexDir='column' alignItems='center' gap={2}>
              <Team team={'tr'} />
            </Box>
          </Box>
        </GridItem>
        <GridItem rowSpan={3} colSpan={5} bg='#000000'>
          <Center h='full'>
            <TopPlayer team={'ct'} />
          </Center>
        </GridItem>
        <GridItem rowSpan={3} colSpan={5} bg='#000000'>
          <Center h='full'>
            <TopPlayer team={'tr'} />
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default MDLayout;
