import { Box, Center, Grid, GridItem, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import EventsContext from '../../../contexts/eventsContexts';
import useMatchLengthStore from '../../../stores/lengthStore';
import useRoundStore from '../../../stores/roundStore';
import RoundPicker from '../RoundPicker';
import Team from '../Team';
import TopPlayer from '../TopPlayer';

function XL() {
  const { statuses } = useContext(EventsContext);
  const { round } = useRoundStore();
  const { matchLength } = useMatchLengthStore();

  const isMap = statuses[round]?.map ? true : false;
  const isTime = statuses[round]?.roundTime ? true : false;

  const minutes = isTime && statuses[round].roundTime?.minutes;
  const seconds = isTime && statuses[round].roundTime?.seconds;

  const { ct, tr } = isMap ? statuses[round] : { ct: '', tr: '' };

  return (
    <>
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
          {isMap && (
            <Box
              display='flex'
              flexDir='column'
              h='full'
              alignItems='center'
              justifyContent='space-around'
              color='black'
              p={6}
              gap={5}
            >
              <Box w='full' display='flex' flexDir='column' gap={2}>
                <Heading>{statuses[round].map}</Heading>
                <Heading size='lg'>Round:</Heading>
                <Heading>
                  {round + 1} of {matchLength}
                </Heading>
              </Box>
              <Box w='full' display='flex' flexDir='column'>
                <Heading size='lg'>Took: </Heading>
                <Box display='flex' flexWrap='wrap'>
                  <Heading size='md'>
                    {minutes && minutes > 0 && `${minutes} Mins`}
                  </Heading>
                  <Heading
                    size='md'
                    marginLeft={minutes && minutes > 0 ? 2.5 : 0}
                  >
                    {seconds && seconds > 0 && `${seconds} Secs`}
                  </Heading>
                </Box>
              </Box>
            </Box>
          )}
        </GridItem>
        <GridItem colSpan={4} bg='#000000'>
          <Box
            h='full'
            display='flex'
            flexDir='row'
            justifyContent='space-around'
            alignItems='center'
          >
            <Team team={[ct ? ct : '', 'ct']} />
            {isMap && (
              <Box
                w='120px'
                h='80px'
                display='flex'
                flexDir='column'
                justifyContent='center'
                alignItems='center'
                bgColor='#fdfe3f'
                borderRadius='full'
                gap={5}
              >
                <Heading color='black'>{statuses[round].roundScore}</Heading>
              </Box>
            )}
            <Team team={[tr ? tr : '', 'tr']} />
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
    </>
  );
}

export default XL;
