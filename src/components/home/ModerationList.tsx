import { ModerationItemType } from "@/types";
import { dateToHHMMMeridiemformat, moderationStatusToColor } from "@/utils";

interface ModerationListProps {
  moderations: ModerationItemType[];
  onClick: (id: number) => void;
}

const ModerationList = ({ moderations, onClick }: ModerationListProps) => {
  return (<ul className="my-5 border-t w-11/12 mx-auto">
    {
      moderations.map((item,index) => (
        <li className="flex justify-between mt-5 items-center" key={`${item.title}_${index}`} onClick={() => onClick(item.id)}>
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