import { Grid, GridItem } from '@chakra-ui/react';
import Nav from './components/Nav';
import Match from './components/Match';

function App() {
  return (
    <Grid
      templateAreas={`"header" "main" "footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'1fr'}
      h='100vh'
      gap={10}
      backgroundImage="url('https://chewedup.blast.tv/images/header.png')"
      backgroundPosition='center'
      backgroundSize='cover'
      backgroundRepeat='no-repeat'
      bgBlendMode='overlay'
      backgroundColor='#200d19'
      color='#ffffff'
      fontWeight='bold'
    >
      <GridItem pl='2' area={'header'}>
        <Nav />
      </GridItem>
      <GridItem p='10' area={'main'}>
        <Match />
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
