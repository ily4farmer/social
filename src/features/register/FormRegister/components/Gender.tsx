import { Radio, Stack } from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';

import { FormRadioGroup } from '~shared';
import { TRegisterShema } from '~types';

export const Gender = () => {
  const { control } = useFormContext<TRegisterShema>();

  return (
    <Controller
      name="gender"
      control={control}
      render={({ field }) => (
        <FormRadioGroup
          {...field}
          label={{ children: 'Пол' }}
          radioGroup={{
            children: (
              <Stack direction="row">
                <Radio value="male">Муж</Radio>
                <Radio value="female">Жен</Radio>
                <Radio value="other">Другое</Radio>
              </Stack>
            ),
            onChange: field.onChange,
            value: field.value,
          }}
        />
      )}
    />
  );
};
