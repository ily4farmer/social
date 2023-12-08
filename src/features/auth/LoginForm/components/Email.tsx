import { Controller, useFormContext } from 'react-hook-form';

import { FormInput } from '~shared';
import { TAuthLoginShema } from '~types';

export const Email = () => {
  const {
    clearErrors,
    control,
    formState: { errors },
  } = useFormContext<TAuthLoginShema>();

  return (
    <Controller
      name="email"
      control={control}
      render={({ field }) => (
        <FormInput
          {...field}
          control={{ isInvalid: Boolean(errors.email) }}
          label={{ children: 'Email' }}
          input={{
            onChange: field.onChange,
            onFocus: () => clearErrors('email'),
            placeholder: 'Введите email',
            type: 'text',
            value: field.value,
          }}
          errorMessage={{
            children: errors.email && errors.email.message,
          }}
        />
      )}
    />
  );
};
