/**
 * Переводит английское название месяца из строки даты на русский язык.
 */
export const translateMonthNameFromEnglish = (fullDate: string): string => {
  const monthName = fullDate.split(' ')[1].slice(0, -1);
  const monthNames: Record<string, string> = {
    January: 'января,',
    February: 'февраля,',
    March: 'марта,',
    April: 'апрель,',
    May: 'мая,',
    June: 'июня,',
    July: 'июля,',
    August: 'августа,',
    September: 'сентября,',
    October: 'октября,',
    November: 'ноября,',
    December: 'декабря,',
  };

  const dateArray = fullDate.split(' ');
  dateArray.splice(1, 1, monthNames[monthName]);
  return dateArray.join(' ');
};

import { WORD } from './consts';
/**
 * Подбирает правильное склонение слова "омментарий" в зависимости от числа
 */
export const getNoun = (number: number) => {
  let n = number % 100;
  if (n >= 5 && n <= 20) {
    return WORD[0];
  }
  n %= 10;
  if (n === 1) {
    return WORD[2];
  }
  if (n >= 2 && n <= 4) {
    return WORD[1];
  }
  return WORD[0];
};
