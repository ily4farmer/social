import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

export const formatDateBirthday = (birthday: string): string =>
  dayjs(birthday).format('DD.MM.YYYY');
