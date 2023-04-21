import { Grid, GridItem } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={`"header" "main" "footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'1fr'}
      h='100vh'
      color='#ffffff'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='#200d19' area={'header'}>
        CS:GO Game Match Stats
      </GridItem>
      <GridItem pl='2' bg='#200d19' area={'main'}>
        Main
      </GridItem>
      <GridItem pl='2' bg='#251821' area={'footer'}>
        @{' '}
        <a href='https://github.com/MTraveller' target='_blank'>
          MTraveller
        </a>
      </GridItem>
    </Grid>
  );
}

export default App;
