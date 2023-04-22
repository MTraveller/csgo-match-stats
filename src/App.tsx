import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Form from './components/form';

function App() {
  return (
    <Grid
      templateAreas={`"header" "main" "footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'1fr'}
      h='100vh'
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
        CS:GO Game Match Stats
      </GridItem>
      <GridItem pl='2' area={'main'}>
        <Form />
      </GridItem>
      <GridItem pl='2' bg='#251821' area={'footer'}>
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
