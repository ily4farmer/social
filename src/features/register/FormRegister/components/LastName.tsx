import { Controller, useFormContext } from 'react-hook-form';

import { FormInput } from '~shared';
import { TRegisterShema } from '~types';

export const LastName = () => {
  const {
    clearErrors,
    control,
    formState: { errors },
  } = useFormContext<TRegisterShema>();

  return (
    <Controller
      name="lastName"
      control={control}
      render={({ field }) => (
        <FormInput
          {...field}
          control={{ isInvalid: Boolean(errors.lastName) }}
          label={{ children: 'Фамилия' }}
          input={{
            onChange: field.onChange,
            onFocus: () => clearErrors('lastName'),
            placeholder: 'Введите фамилию',
            type: 'text',
            value: field.value,
          }}
          errorMessage={{
            children: errors.lastName && errors.lastName.message,
          }}
        />
      )}
    />
  );
};
