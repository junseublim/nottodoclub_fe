export function isSameDate(date1: Date, date2: Date) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export function isTomorrowOrLater(date: Date) {
  const today = new Date();
  today.setHours(23, 59, 59, 999)

  return date > today
}

export function dateToHHMMMeridiemformat(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date);
}