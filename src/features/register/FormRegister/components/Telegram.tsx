import { ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { FormInput } from '~shared';
import { TRegisterShema } from '~types';

export const Telegram = () => {
  const {
    clearErrors,
    control,
    formState: { errors },
    setValue,
  } = useFormContext<TRegisterShema>();

  const telegramHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue('telegram', value);

    if (value.length !== 0 && value[0] !== '@') {
      setValue('telegram', `@${value}`);
    }
  };

  return (
    <Controller
      name="telegram"
      control={control}
      render={({ field }) => (
        <FormInput
          {...field}
          control={{ isInvalid: Boolean(errors.telegram) }}
          label={{ children: 'Telegram' }}
          input={{
            onChange: telegramHandler,
            onFocus: () => clearErrors('telegram'),
            placeholder: 'Введите telegram',
            type: 'text',
            value: field.value,
          }}
          errorMessage={{
            children: errors.telegram && errors.telegram.message,
          }}
        />
      )}
    />
  );
};
