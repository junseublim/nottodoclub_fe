import useWeeklyCalendar from "@/hooks/useWeeklyCalendar";
import ArrowNavigation from "../molecules/ArrowNavigation";
import WeekCalendar from "../molecules/WeekCalendar";
  
const HomeCalendar = () => {
  const {
    movePreviousWeek,
    moveNextWeek,
    weekDays,
    month,
    week
  } = useWeeklyCalendar()

  return (<div className="mt-10 mx-5">
    <ArrowNavigation
      className="my-4 mx-3"
      label={`${month}월 ${week}째주`}
      onLeftClick={movePreviousWeek}
      onRightClick={moveNextWeek}
    />
    <WeekCalendar
      days={weekDays.map(date => ({
        status: 'good',
        date
      }))}
      selectedDate={new Date('2023-12-21')}
    />
  </div>);
}
 
export default HomeCalendar;