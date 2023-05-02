import { Button } from '@chakra-ui/button';
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Box, Text } from '@chakra-ui/layout';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import useUrlStore from '../stores/urlStore';

const schema = z.object({
  log: z.string().url().endsWith('.txt', { message: 'URL must end with .txt' }),
});

type FormData = z.infer<typeof schema>;

const MatchForm = () => {
  const { url, setUrl } = useUrlStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    if (isValid && !errors.log)
      return url !== data.log
        ? setUrl(data.log, true)
        : setUrl(data.log, false);
  };

  return (
    <Box w='full'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl marginBottom={10}>
          <FormLabel>Match Log URL</FormLabel>
          <InputGroup size='md'>
            <Input
              id='log'
              type='text'
              focusBorderColor='#fdfe3f'
              {...register('log')}
            />
            <InputRightElement width='6.3rem'>
              <Button
                isDisabled={!isValid}
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
            <Box color='whiteAlpha.600' fontSize='md' fontStyle='italic'>
              {errors.log ? (
                <Text>{errors.log.message}</Text>
              ) : (
                <Text>
                  Log link e.g.
                  https://blast-recruiting.s3.eu-central-1.amazonaws.com/NAVIvsVitaGF-Nuke.txt
                </Text>
              )}
            </Box>
          </FormHelperText>
        </FormControl>
      </form>
    </Box>
  );
};

export default MatchForm;
