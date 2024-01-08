import NotToDoEmpty from "@/assets/svgs/ntd_empty.svg?react";
import PrimaryButton from "@/components/atoms/buttons/PrimaryButton";
import NottodoCarousel from "@/components/atoms/carousel/NottodoCarousel";
import HomeCalendar from "@/components/organisms/HomeCalendar";
import AddModerationCard from "@/components/organisms/AddModerationCard";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import NoModerationCard from "@/components/organisms/NoModerationCard";
import ModerationAddModal from "@/components/organisms/ModerationAddModal";
import ModerationList from "@/components/organisms/ModerationList";
import ModerationDetailModal from "@/components/organisms/ModerationDetailModal";
import { ModerationItemType, ModerationStatusType } from "@/types";
import { isSameDate } from "@/utils";
import DeleteModerationModal from "@/components/organisms/DeleteModerationModal";
import SecondaryButton from "@/components/atoms/buttons/SecondaryButton";

type NewModerationType = {
  content: string;
  status: ModerationStatusType;
}

const Home = () => {
  const [noNottodos] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [currentNottodo, setCurrentNottodo] = useState(null);
  const [moderations, setModerations] = useState<ModerationItemType[]>([
    { id: 0, title: 'title1', date: new Date(), status: 'success' },
    { id: 1, title: 'title2', date: new Date(), status: 'fail' },
    { id: 2, title: 'title3', date: new Date(), status: 'success' },
    { id: 3, title: 'title4', date: new Date(), status: 'fail' },
    { id: 4, title: 'title5', date: new Date(), status: 'success' },
    { id: 5, title: 'title6', date: new Date(), status: 'fail' },
    { id: 6, title: 'title7', date: new Date(), status: 'success' },
    { id: 7, title: 'title8', date: new Date(), status: 'fail' },
    { id: 8, title: 'title9', date: new Date(), status: 'success' },
    { id: 9, title: 'title10', date: new Date(), status: 'fail' },
  ]);
  const [isToday, setIsToday] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedModeration, setSelectedModeration] = useState<ModerationItemType | null>(null)
  const [newModeration, setNewModeration] = useState<NewModerationType>({
    content: '',
    status: 'success'
  })

  const navigate = useNavigate();

  const addNotToDo = "낫투두 등록하기";


  const clickHandler = () => {
    navigate("/list/add");
  };

  const setSelectedDate = (date: Date) => {
    setDate(date);
    setIsToday(isSameDate(date, new Date()))
  };

  const onSubmit = () => {
    console.log(newModeration)
  }

  const onClickModeration = (id: number) => {
    const moderation = moderations.find(item => item.id === id)

    if (moderation) {
      setShowDetailModal(true);
      setSelectedModeration(moderation)
    }
  }

  const onShowDeleteModal = () => {
    setShowDetailModal(false)
    setShowDeleteModal(true)
  }

  const onCancelDeleteModal = () => {
    setShowDeleteModal(false)
    setShowDetailModal(true)
  }

  const onCancelAddModifyModal = () => {
    setNewModeration({
      content: '',
      status: 'success'
    })
    setShowAddModal(false)
  }

  const onModify = () => {
    setNewModeration({
      content: selectedModeration!.title,
      status: selectedModeration!.status
    })
    setShowDetailModal(false)
    setShowAddModal(true)
  }

  const setStatus = (value: ModerationStatusType) => {
    setNewModeration(moderation => ({
      ...moderation,
      status: value
    }))
  }

  const setContent = (value: string) => {
    setNewModeration(moderation => ({
      ...moderation,
      content: value
    }))
  }

  if (noNottodos) {
    return (
      <div className="flex justify-center items-center flex-col h-screen">
        <NotToDoEmpty />

        <div className="flex flex-col items-center my-4 w-30 text-gray-500 text-base font-bold">
            <span>아래 버튼을 눌러</span>
          <span>새로운 낫투두를 등록해주세요.</span>
        </div>
        <PrimaryButton
          className="w-40 py-2"
          label={addNotToDo}
          onClick={clickHandler}
        />
      </div>
    );
  }

  return (
    <div>
      <NottodoCarousel />
      <HomeCalendar date={date} onDateChange={setSelectedDate} />
      {
        moderations.length > 0 &&
        <div className="flex flex-col items-center mb-4">
          <ModerationList moderations={moderations} onClick={onClickModeration} />
          <SecondaryButton className="px-8 py-2" label={"기록 추가"} onClick={() => setShowAddModal(true)} />
        </div>
      }
      {
        moderations.length === 0 && isToday && <AddModerationCard onClick={() => setShowAddModal(true)} />
      }
      {
        moderations.length === 0 && !isToday && <NoModerationCard />
      }
      {
        <ModerationAddModal
          status={newModeration.status}
          content={newModeration.content}
          setStatus={setStatus}
          setContent={setContent}
          isOpen={showAddModal}
          onSubmit={onSubmit}
          onClose={onCancelAddModifyModal}
        />
      }
      {
        <ModerationDetailModal
          moderation={selectedModeration}
          isOpen={showDetailModal}
          onModify={onModify}
          onDelete={onShowDeleteModal}
          onClose={() => setShowDetailModal(false)}
        />
      }
      {
        <DeleteModerationModal
          isOpen={showDeleteModal}
          onClose={onCancelDeleteModal}
          onDelete={console.log}
        />
      }
      
    </div>
  );
};

export default Home;
