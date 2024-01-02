import useWeeklyCalendar from "@/hooks/useWeeklyCalendar";
import ArrowNavigation from "../molecules/ArrowNavigation";
import WeekCalendar from "../molecules/WeekCalendar";

interface HomeCalendarProps {
  date: Date;
  onDateChange: (date: Date) => void;
}

const getWeekDays = (weekDays) => {
  return weekDays.map((date, index) => ({
    status: index % 2 === 0 ? "good" : "not bad",
    date,
  }));
};

const HomeCalendar = ({ date, onDateChange }: HomeCalendarProps) => {
  const { movePreviousWeek, moveNextWeek, weekDays, month, week } =
    useWeeklyCalendar();

  return (
    <div className="mt-10 mx-5">
      <ArrowNavigation
        className="my-4 mx-3"
        label={`${month}월 ${week}째주`}
        onLeftClick={movePreviousWeek}
        onRightClick={moveNextWeek}
      />
      <WeekCalendar
        days={getWeekDays(weekDays)}
        selectedDate={date}
        onDatechange={onDateChange}
      />
    </div>
  );
};

export default HomeCalendar;
