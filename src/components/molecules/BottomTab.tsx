import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@/components/atoms/icons/HomeIcon";
import ListIcon from "@/components/atoms/icons/ListIcon";
import UserIcon from "@/components/atoms/icons//UserIcon";
import BadgeIcon from "@/components/atoms/icons/BadgeIcon";
import { IconProps } from "@/components/atoms/icons/types";

interface Tab {
  id: number;
  label: string;
  path: string;
  icon: ({ isSelected }: IconProps) => JSX.Element
}

const tabs: Tab[] = [
  { id: 1, label: '홈', icon: HomeIcon, path: '/'},
  { id: 2, label: '리스트', icon: ListIcon, path: '/list'},
  { id: 3, label: '뱃지', icon: BadgeIcon, path: '/badge'},
  { id: 4, label: '마이페이지', icon: UserIcon, path: '/mypage'},
];

const BottomTab = () => {
  const [activeTab, setActiveTab] = useState<number|null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentTab = tabs.find(tab => tab.path == currentPath)

    if (currentTab) {
      setActiveTab(currentTab.id)
    } else {
      setActiveTab(null)
    }
  }, [location])

  const handleTabClick = (path: string) => {
    navigate(path)
  }
  
  return (
    <div className="fixed bottom-0 left-0 right-0 p-2 flex justify-around border-t">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => handleTabClick(tab.path)}
          className="flex flex-col justify-center items-center text-gray-500 text-[10px]"
        >
          <tab.icon isSelected={activeTab === tab.id } />
          {tab.label}
        </div>
      ))}
    </div>
  );
}
 
export default BottomTab;