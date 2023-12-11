import {
  Box,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormLabel,
  FormLabelProps,
  Input,
  InputProps,
} from '@chakra-ui/react';

type FormInputProps = {
  control?: FormControlProps;
  errorMessage?: FormErrorMessageProps;
  input: InputProps;
  label?: FormLabelProps;
};

export const FormInput = ({ control, errorMessage, input, label }: FormInputProps) => (
  <FormControl {...control}>
    <FormLabel {...label} />
    <Input {...input} />
    <Box minH={17} mt="5px">
      <FormErrorMessage mt={0} {...errorMessage} />
    </Box>
  </FormControl>
);
