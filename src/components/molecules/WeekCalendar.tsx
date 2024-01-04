import { isSameDate } from "@/utils";

type WeekDayStatus = "good" | "not bad" | "bad";

type WeekDay = {
  date: Date;
  status: WeekDayStatus | null;
};

interface WeekCalendarProps {
  days: WeekDay[];
  selectedDate: Date;
  onDatechange: (date: Date) => void;
}

type StatusToBgColorMap = {
  [k in WeekDayStatus]: string;
};

const statusBgColorMap: StatusToBgColorMap = {
  good: "bg-green-positive",
  "not bad": "bg-yellow-warning",
  bad: "bg-red-negative",
};

const WeekCalendar = ({
  days,
  selectedDate,
  onDatechange,
}: WeekCalendarProps) => {
  const weekDaysHeader = ["월", "화", "수", "목", "금", "토", "일"];
  const isSelected = (date: Date) => isSameDate(date, selectedDate);

  const selectedDateClass = (date: Date) =>
    isSelected(date) ? "rounded-full bg-primary" : "";

  const getDotColor = (status: WeekDayStatus) => {
    if (status === null) return "";
    return statusBgColorMap[status];
  };

  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr className="text-sm text-gray-500">
          {weekDaysHeader.map((weekDay) => (
            <th key={weekDay} className="py-2 text-center">
              {weekDay}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {days.map((day, index) => (
            <td
              className={`p-2 relative ${selectedDateClass(
                day.date,
              )} max-w-1/7`}
              key={`${day.date.getTime()}_${index}`}
              onClick={() => onDatechange(day.date)}
            >
              {!isSelected(day.date) && (
                <span
                  className={`w-1 h-1 ${getDotColor(
                    day.status,
                  )} rounded-full absolute top-0 inset-x-5`}
                ></span>
              )}
              <span className="block text-center">{day.date.getDate()}</span>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default WeekCalendar;
