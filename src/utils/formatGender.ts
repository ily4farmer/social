import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

enum EGenderVariants {
  Female = 'Female',
  Male = 'male',
  Other = 'Other',
}

export const formatGender = (gender: string): string | null => {
  if (gender === EGenderVariants.Male) {
    return 'Мужской';
  }

  if (gender === EGenderVariants.Female) {
    return 'Женский';
  }

  if (gender === EGenderVariants.Other) {
    return 'Другой';
  }

  return null;
};
