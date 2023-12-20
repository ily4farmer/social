import {
  Box,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormLabel,
  FormLabelProps,
} from '@chakra-ui/react';
import { ReactDatePickerProps } from 'react-datepicker';

import { ReactDatePickerComponent } from '~ui';

type FormInputProps = {
  control?: FormControlProps;
  datePicker: ReactDatePickerProps;
  errorMessage?: FormErrorMessageProps;
  label?: FormLabelProps;
};

export const FormDatePicker = ({ control, datePicker, errorMessage, label }: FormInputProps) => (
  <FormControl {...control}>
    <FormLabel {...label} />
    <ReactDatePickerComponent {...datePicker} />
    <Box minH={17} mt="5px">
      <FormErrorMessage mt={0} {...errorMessage} />
    </Box>
  </FormControl>
);
