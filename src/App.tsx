import { Container, Grid, GridItem, useBreakpoint } from '@chakra-ui/react';
import Nav from './components/Nav';
import Match from './components/Match';

function App() {
  // eslint-disable-next-line
  let breakpoint = useBreakpoint();

  return (
    <Grid
      templateAreas={`"header" "main" "footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'1fr'}
      backgroundImage="url('https://chewedup.blast.tv/images/header.png')"
      backgroundRepeat='no-repeat'
      backgroundPosition='center'
      backgroundColor='#200d19'
      backgroundSize='cover'
      bgBlendMode='overlay'
      fontWeight='bold'
      overflow='hidden'
      color='#ffffff'
      w='100wv'
      minH='100vh'
      gap={10}
    >
      <GridItem pl='2' area={'header'}>
        <Nav />
      </GridItem>
      <GridItem p={breakpoint === 'base' || 'sm' ? 0 : 6} area={'main'}>
        <Container
          centerContent
          maxWidth='1400px'
          display='flex'
          flexDirection='column'
          flex='1'
        >
          <Match />
        </Container>
      </GridItem>
      <GridItem pl='5' bg='#251821' area={'footer'}>
        @{' '}
        <a
          href='https://github.com/MTraveller'
          target='_blank'
          rel='noopener noreferrer'
        >
          MTraveller
        </a>
      </GridItem>
    </Grid>
  );
}

export default App;
