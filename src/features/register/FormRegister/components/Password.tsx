import { Controller, useFormContext } from 'react-hook-form';

import { FormInput } from '~shared';
import { TRegisterShema } from '~types';

export const Password = () => {
  const {
    clearErrors,
    control,
    formState: { errors },
  } = useFormContext<TRegisterShema>();

  return (
    <Controller
      name="password"
      control={control}
      render={({ field }) => (
        <FormInput
          {...field}
          control={{ isInvalid: Boolean(errors.password) }}
          label={{ children: 'Пароль' }}
          input={{
            onChange: field.onChange,
            onFocus: () => clearErrors('password'),
            placeholder: 'Введите пароль',
            type: 'password',
            value: field.value,
          }}
          errorMessage={{
            children: errors.password && errors.password.message,
          }}
        />
      )}
    />
  );
};
