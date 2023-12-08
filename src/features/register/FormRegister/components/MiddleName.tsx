import { Controller, useFormContext } from 'react-hook-form';

import { FormInput } from '~shared';
import { TRegisterShema } from '~types';

export const MiddleName = () => {
  const {
    clearErrors,
    control,
    formState: { errors },
  } = useFormContext<TRegisterShema>();

  return (
    <Controller
      name="middleName"
      control={control}
      render={({ field }) => (
        <FormInput
          {...field}
          control={{ isInvalid: Boolean(errors.middleName) }}
          label={{ children: 'Отчество' }}
          input={{
            onChange: field.onChange,
            onFocus: () => clearErrors('middleName'),
            placeholder: 'Введите отчество',
            type: 'text',
            value: field.value,
          }}
          errorMessage={{
            children: errors.middleName && errors.middleName.message,
          }}
        />
      )}
    />
  );
};
