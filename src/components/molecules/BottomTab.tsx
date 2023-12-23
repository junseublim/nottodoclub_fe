import { useState } from "react";
import HomeIcon from "../atoms/HomeIcon";
import ListIcon from "../atoms/ListIcon";
import { IconProps } from "../atoms/types";
import UserIcon from "../atoms/UserIcon";
import BadgeIcon from "../atoms/BadgeIcon";


interface Tab {
  id: number;
  label: string;
  icon: ({ isSelected }: IconProps) => JSX.Element
}

const tabs: Tab[] = [
  { id: 1, label: '홈', icon: HomeIcon},
  { id: 2, label: '리스트', icon: ListIcon},
  { id: 3, label: '뱃지', icon: BadgeIcon},
  { id: 4, label: '마이페이지', icon: UserIcon},
];

const BottomTab = () => {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 p-2 flex justify-around border-t">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className="flex flex-col justify-center items-center"
        >
          <tab.icon isSelected={activeTab === tab.id } />
          {tab.label}
        </div>
      ))}
    </div>
  );
}
 
export default BottomTab;