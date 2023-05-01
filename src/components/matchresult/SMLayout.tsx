import { Box, Center, Grid, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import RoundPicker from './elements/RoundPicker';
import Scores from './elements/Scores';
import Team from './elements/Team';
import TopPlayer from './elements/TopPlayer';
import MapDetails from './elements/map/MapDetails';

function SMLayout() {
  const [pageOffSet, setPageOffSet] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 250 ? setPageOffSet(true) : setPageOffSet(false);
    });
  }, []);

  return (
    <Grid
      maxWidth='full'
      templateRows='repeat(4, 1fr)'
      templateColumns='repeat(7, 1fr)'
      columnGap={2}
      gap={2}
      p={2}
    >
      <GridItem rowSpan={1} colSpan={6} bg='#fdfe3f' borderLeftRadius='10'>
        <MapDetails />
      </GridItem>
      <GridItem
        h='full'
        display='flex'
        rowSpan={4}
        colSpan={1}
        justifyContent='end'
      >
        <Box
          mt='8'
          alignSelf='start'
          position={pageOffSet ? 'fixed' : 'relative'}
          top={pageOffSet ? '20px' : ''}
        >
          <RoundPicker minH='500px' ml='-10' orientation='vertical' />
        </Box>
      </GridItem>
      <GridItem colSpan={6} height='360px' bg='#000000'>
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
      <GridItem colSpan={6} bg='#000000'>
        <Center h='full'>
          <TopPlayer team={'ct'} />
        </Center>
      </GridItem>
      <GridItem colSpan={6} bg='#000000'>
        <Center h='full'>
          <TopPlayer team={'tr'} />
        </Center>
      </GridItem>
    </Grid>
  );
}

export default SMLayout;
