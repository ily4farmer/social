'use client';

import 'react-datepicker/dist/react-datepicker.css';
// import './chakra-react-datepicker.css';
import './styles.scss';

import { forwardRef, Input, InputGroup, InputProps } from '@chakra-ui/react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';

const customDateInput = ({ onChange, onClick, value, ...props }: InputProps, ref: unknown) => (
  <Input
    autoComplete="off"
    value={value}
    ref={ref}
    onClick={onClick}
    onChange={onChange}
    {...props}
  />
);
customDateInput.displayName = 'DateInput';

const CustomInput = forwardRef(customDateInput);

export const ReactDatePickerComponent = ({
  dateFormat,
  onChange,
  ...props
}: ReactDatePickerProps) => (
  <InputGroup position="relative" zIndex={10}>
    <ReactDatePicker
      onChange={onChange}
      className="react-datapicker__input-text"
      customInput={<CustomInput />}
      dateFormat={dateFormat}
      {...props}
    />
  </InputGroup>
);
