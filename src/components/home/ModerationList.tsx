import { ModerationItemType } from "@/types";
import { dateToHHMMMeridiemformat, moderationStatusToColor } from "@/utils";
import SecondaryButton from "@/components/common/buttons/SecondaryButton";
import AddModerationCard from "@/components/home/AddModerationCard";
import NoModerationCard from "./NoModerationCard";
interface ModerationListItemProps {
  item: ModerationItemType;
  onClick: () => void;
}

const ModerationListItem = ({ item, onClick }: ModerationListItemProps) => {
  return (
    <li className="flex justify-between mt-5 items-center" onClick={onClick}>
      <div className="flex">
        <span className={`w-1.5 rounded-xl mr-2 bg-${moderationStatusToColor(item.status)}`} />
        <span>{item.title}</span>
      </div>
      <span className="text-gray-500 text-sm">{dateToHHMMMeridiemformat(item.date)}</span>
    </li>
  )
}

interface ModerationListProps {
  isToday: boolean;
  moderations: ModerationItemType[];
  onClickModeration: (id: number) => void;
  onAddModeration: () => void;
}

const ModerationList = ({ isToday, moderations, onClickModeration, onAddModeration }: ModerationListProps) => {
  if (moderations.length === 0) {
    if (isToday) {
      return <AddModerationCard onClick={onAddModeration} />;
    } else {
      return <NoModerationCard />;
    }
  }

  return (
    <div className="flex flex-col items-center mb-4">
      <ul className="my-5 border-t w-11/12 mx-auto">
      {
        moderations.map((item,index) => (
          <ModerationListItem key={`${item.title}_${index}`} item={item} onClick={() => onClickModeration(item.id)}/>
        )) 
      }
      </ul>
      <SecondaryButton className="px-8 py-2" label={"기록 추가"} onClick={onAddModeration} />
    </div>
  );
}
 
export default ModerationList;