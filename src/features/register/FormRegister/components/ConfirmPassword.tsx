import { Controller, useFormContext } from 'react-hook-form';

import { FormInput } from '~shared';
import { TRegisterShema } from '~types';

export const ConfirmPassword = () => {
  const {
    clearErrors,
    control,
    formState: { errors },
  } = useFormContext<TRegisterShema>();

  return (
    <Controller
      name="confirmPassword"
      control={control}
      render={({ field }) => (
        <FormInput
          {...field}
          control={{ isInvalid: Boolean(errors.confirmPassword) }}
          label={{ children: 'Повторите пароль' }}
          input={{
            onChange: field.onChange,
            onFocus: () => clearErrors('confirmPassword'),
            placeholder: 'Введите пароль',
            type: 'password',
            value: field.value,
          }}
          errorMessage={{
            children: errors.confirmPassword && errors.confirmPassword.message,
          }}
        />
      )}
    />
  );
};
