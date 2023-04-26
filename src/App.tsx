import { Container, Grid, GridItem } from '@chakra-ui/react';
import Nav from './components/Nav';
import Match from './components/Match';

function App() {
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
      h='100vh'
      gap={10}
    >
      <GridItem pl='2' area={'header'}>
        <Nav />
      </GridItem>
      <GridItem p='6' area={'main'}>
        <Container
          maxWidth='1400px'
          display='flex'
          flexDirection='column'
          flex='1'
          centerContent
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
