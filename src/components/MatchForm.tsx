import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  log: z.string().url(),
});

type FormData = z.infer<typeof schema>;

interface SetUrl {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
}

const MatchForm = ({ setUrl }: SetUrl) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    setUrl(data.log);
  };

  return (
    <Box w='100%' p={5}>
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
            {errors.log ? (
              errors.log.message
            ) : (
              <Box fontStyle='italic'>
                <p>
                  Log link e.g.
                  https://blast-recruiting.s3.eu-central-1.amazonaws.com/NAVIvsVitaGF-Nuke.txt
                </p>
              </Box>
            )}
          </FormHelperText>
        </FormControl>
      </form>
    </Box>
  );
};

export default MatchForm;
