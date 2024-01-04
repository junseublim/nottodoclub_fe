import { ModerationItemType } from "@/types";
import { dateToHHMMMeridiemformat, moderationStatusToColor } from "@/utils";

interface ModerationListProps {
  moderations: ModerationItemType[]
}

const ModerationList = ({ moderations }: ModerationListProps) => {
  return (<ul className="my-5 border-t w-11/12 mx-auto">
    {
      moderations.map(item => (
        <li className="flex justify-between mt-5 items-center">
          <div className="flex">
            <span className={`w-1.5 rounded-xl mr-2 bg-${moderationStatusToColor(item.status)}`} />
            <span>{item.title}</span>
          </div>
          <span className="text-gray-500 text-sm">{dateToHHMMMeridiemformat(item.date)}</span>
        </li>
      ))
    }
  </ul>);
}
 
export default ModerationList;