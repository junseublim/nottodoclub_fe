export function isSameDate(date1: Date, date2: Date) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export function isTomorrowOrLater(date: Date) {
  const today = new Date();
  today.setHours(23, 59, 59, 999);

  return date > today;
}

export function dateToHHMMMeridiemformat(date: string) {
  const dateObj = new Date(date);

  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(dateObj);
}

export function dateToYYYYMMDD(date: Date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export const getStartOfWeek = (date: Date) => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  const diff = newDate.getDate() - day + (day === 0 ? -6 : 1);
  newDate.setDate(diff);
  newDate.setHours(0, 0, 0, 0);

  return newDate;
};

export const getEndOfWeek = (date: Date) => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  const diff = newDate.getDate() - day + (day === 0 ? 0 : 7);
  newDate.setDate(diff);
  newDate.setHours(23, 59, 59, 999);

  return newDate;
};

export const getStartOfDate = (date: Date) => {
  const startOfDate = new Date(date.getTime());
  startOfDate.setHours(0, 0, 0, 0);

  return startOfDate;
};

export const getEndOfDate = (date: Date) => {
  const endOfDate = new Date(date.getTime());
  endOfDate.setHours(23, 59, 59, 999);

  return endOfDate;
};
