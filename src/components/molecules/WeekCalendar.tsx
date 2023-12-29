type WeekDay = {
  date: Date;
  status: 'good' | 'not bad' | 'bad' | null;
}

interface WeekCalendarProps {
  days: WeekDay[];
  selectedDate: Date;
}

const WeekCalendar = ({ days, selectedDate }: WeekCalendarProps) => {
  const weekDaysHeader = ['월', '화', '수', '목', '금', '토', '일']

  const isSelected = (date: Date) => date.getDate() === selectedDate.getDate()

  const selectedDateClass = (date: Date) => isSelected(date) ? 'rounded-full bg-primary' : ''


  return <table className="w-full border-separate border-spacing-2">
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
          className={`p-2 relative ${selectedDateClass(day.date)} max-w-1/7`}
          key={`${day.date.getTime()}_${index}`}
        >
          {
            !isSelected(day.date) && <span className="w-1 h-1 bg-red-negative rounded-full absolute top-0 inset-x-5"></span>
          }
          <span className="block text-center">{day.date.getDate()}</span>
        </td>
      ))}
    </tr>
  </tbody>
</table>
}
 
export default WeekCalendar;

            
