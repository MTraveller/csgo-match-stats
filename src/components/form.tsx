import React, { useState } from 'react';
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';

function Form() {
  const [input, setInput] = useState('');

  const handleInputChange = e => setInput(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Box w='100%' p={5}>
      <form onSubmit={handleSubmit}>
        <FormControl marginBottom={10}>
          <FormLabel>Match Log URL</FormLabel>
          <InputGroup size='md'>
            <Input
              type='text'
              focusBorderColor='#fdfe3f'
              value={input}
              onChange={handleInputChange}
            />
            <InputRightElement width='6.3rem'>
              <Button
                type='submit'
                h='1.75rem'
                size='lg'
                color='black'
                colorScheme='yellow'
                fontWeight='bold'
              >
                Load
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormHelperText>
            Enter the CS:GO game match log .txt file
          </FormHelperText>
        </FormControl>
      </form>

      <Box bg='#251821' w='100%' p={8}>
        Hello World
      </Box>
    </Box>
  );
}

export default Form;
