import { Box, Center, Grid, GridItem } from '@chakra-ui/react';
import MapDetails from './elements/map/MapDetails';
import RoundPicker from './elements/RoundPicker';
import Scores from './elements/Scores';
import Team from './elements/Team';
import TopPlayer from './elements/TopPlayer';

function LGLayout() {
  return (
    <Box p={10}>
      <Box minH='60px' mb='6' p='0'>
        <RoundPicker />
      </Box>
      <Grid
        h='600px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg='#fdfe3f' borderLeftRadius='10'>
          <MapDetails />
        </GridItem>
        <GridItem colSpan={4} bg='#000000'>
          <Box
            h='full'
            display='flex'
            flexDir='row'
            justifyContent='space-around'
            alignItems='center'
          >
            <Box display='flex' flexDir='column' alignItems='center' gap={2}>
              <Team team={'ct'} />
            </Box>
            <Box
              w='120px'
              h='80px'
              display='flex'
              flexDir='row'
              justifyContent='center'
              alignItems='center'
              bgColor='#fdfe3f'
              borderRadius='full'
              gap={5}
            >
              <Scores />
            </Box>
            <Box display='flex' flexDir='column' alignItems='center' gap={2}>
              <Team team={'tr'} />
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={2} bg='#000000'>
          <Center h='full'>
            <TopPlayer team={'ct'} />
          </Center>
        </GridItem>
        <GridItem colSpan={2} bg='#000000'>
          <Center h='full'>
            <TopPlayer team={'tr'} />
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default LGLayout;
