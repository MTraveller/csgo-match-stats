import React, { FormEvent, useRef, useState } from 'react';
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

  const logRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setInput(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (logRef.current !== null) console.log(logRef.current.value);
  };

  return (
    <Box w='100%' p={5}>
      <form onSubmit={handleSubmit}>
        <FormControl marginBottom={10}>
          <FormLabel>Match Log URL</FormLabel>
          <InputGroup size='md'>
            <Input
              ref={logRef}
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
