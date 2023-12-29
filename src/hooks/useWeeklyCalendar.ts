import { useEffect, useState } from "react";

export default function useWeeklyCalendar () {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [weekDays, setWeekDays] = useState<Date[]>([])
  const [month, setMonth] = useState<number>(0)
  const [week, setWeek] = useState<number>(0)

  const getMondayByDate = (date: Date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }

  const getWeekDatesWithMonday = (mondayDate: Date) => {
    const weekDates = [];
    const currentDay = new Date(mondayDate);

    for (let i = 0; i < 7; i++) {
      weekDates.push(new Date(currentDay));
      currentDay.setDate(currentDay.getDate() + 1);
    }

    return weekDates;
  }

  const getWeekOrdinalOfMonth = (date: Date) => {
    const firstDateOfMonth = new Date(date)
    firstDateOfMonth.setDate(1)
    const firstDayOfMonth = firstDateOfMonth.getDay()

    const startOfFirstWeek = new Date(firstDateOfMonth)

    if (firstDayOfMonth > 4) {
      if (firstDayOfMonth === 0) {
        startOfFirstWeek.setDate(2)
      } else {
        startOfFirstWeek.setDate(1 + 7 - firstDayOfMonth)
      }
    }

    const startOfWeek = new Date(startOfFirstWeek)
    let weekOrdinal = 0

    while (startOfWeek <= date) {
      const currentDate = startOfWeek.getDate()
      startOfWeek.setDate(currentDate + 7)
      weekOrdinal += 1
    }

    return weekOrdinal
  }

  useEffect(() => {
    const monday = getMondayByDate(selectedDate)
    const weekDays = getWeekDatesWithMonday(monday)
    const thursday = weekDays[3]
    const month = thursday.getMonth() + 1
    const week = getWeekOrdinalOfMonth(thursday)

    setWeekDays(weekDays)
    setMonth(month)
    setWeek(week)
  }, [selectedDate])

  const moveDatesBy = (dates: number) => {
    const clonedDate = new Date(selectedDate)
    const date = clonedDate.getDate()
    clonedDate.setDate(date + dates)
    setSelectedDate(clonedDate)
  }

  const movePreviousWeek = () => moveDatesBy(-7)
  const moveNextWeek = () => moveDatesBy(7)

  return {
    movePreviousWeek,
    moveNextWeek,
    weekDays,
    month,
    week
  }
}