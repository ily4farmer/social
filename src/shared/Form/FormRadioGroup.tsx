import {
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  RadioGroup,
  RadioGroupProps,
} from '@chakra-ui/react';

type FormRadioGroupProps = {
  control?: FormControlProps;
  label?: FormLabelProps;
  radioGroup: RadioGroupProps;
};

export const FormRadioGroup = ({ control, label, radioGroup }: FormRadioGroupProps) => (
  <FormControl {...control}>
    <FormLabel {...label} />
    <RadioGroup {...radioGroup} />
  </FormControl>
);
