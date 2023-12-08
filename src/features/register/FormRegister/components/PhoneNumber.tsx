import { Controller, useFormContext } from 'react-hook-form';

import { FormInput } from '~shared';
import { TRegisterShema } from '~types';

export const PhoneNumber = () => {
  const {
    clearErrors,
    control,
    formState: { errors },
  } = useFormContext<TRegisterShema>();

  return (
    <Controller
      name="phoneNumber"
      control={control}
      render={({ field }) => (
        <FormInput
          {...field}
          control={{ isInvalid: Boolean(errors.phoneNumber) }}
          label={{ children: 'Телефон' }}
          input={{
            onChange: field.onChange,
            onFocus: () => clearErrors('phoneNumber'),
            placeholder: 'Введите телефон',
            type: 'text',
            value: field.value,
          }}
          errorMessage={{
            children: errors.phoneNumber && errors.phoneNumber.message,
          }}
        />
      )}
    />
  );
};
