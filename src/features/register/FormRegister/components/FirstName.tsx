import { Controller, useFormContext } from 'react-hook-form';

import { FormInput } from '~shared';
import { TRegisterShema } from '~types';

export const FirstName = () => {
  const {
    clearErrors,
    control,
    formState: { errors },
  } = useFormContext<TRegisterShema>();

  return (
    <Controller
      name="firstName"
      control={control}
      render={({ field }) => (
        <FormInput
          {...field}
          control={{ isInvalid: Boolean(errors.firstName) }}
          label={{ children: 'Имя' }}
          input={{
            onChange: field.onChange,
            onFocus: () => clearErrors('firstName'),
            placeholder: 'Введите имя',
            type: 'text',
            value: field.value,
          }}
          errorMessage={{
            children: errors.firstName && errors.firstName.message,
          }}
        />
      )}
    />
  );
};
