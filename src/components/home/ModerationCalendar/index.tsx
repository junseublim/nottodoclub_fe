import useWeeklyCalendar from "@/hooks/useWeeklyCalendar";
import ArrowNavigation from "./ArrowNavigation";
import WeekCalendar from "./WeekCalendar";
import { Moderation } from "@/types";
import { getDotColorOfDate } from "@/utils/moderations";
import { useGetModerations } from "@/api";

interface HomeCalendarProps {
  date: Date;
  onDateChange: (date: Date) => void;
  nottodoId: string;
}

const ModerationCalendar = ({
  date,
  onDateChange,
  nottodoId,
}: HomeCalendarProps) => {
  const {
    movePreviousWeek,
    moveNextWeek,
    weekDays,
    month,
    week,
    monday,
    sunday,
  } = useWeeklyCalendar(date);

  const weeklyModerationsQuery = useGetModerations(
    nottodoId || "",
    monday,
    sunday,
    !!nottodoId
  );

  if (weeklyModerationsQuery.isLoading) {
    return <div>로딩중...</div>;
  }

  if (weeklyModerationsQuery.isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  if (weeklyModerationsQuery.isIdle) {
    return <div>데이터가 없습니다.</div>;
  }

  const weekDaysWithStatus = () => {
    return weekDays.map((day) => {
      return {
        date: day,
        dotColor: getDotColorOfDate(weeklyModerationsQuery!.data, day),
      };
    });
  };

  return (
    <div className="mt-10 mx-5">
      <ArrowNavigation
        className="my-4 mx-3"
        label={`${month}월 ${week}째주`}
        onLeftClick={movePreviousWeek}
        onRightClick={moveNextWeek}
      />
      <WeekCalendar
        days={weekDaysWithStatus()}
        selectedDate={date}
        onDatechange={onDateChange}
      />
    </div>
  );
};

export default ModerationCalendar;
