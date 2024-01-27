import NottodoCarousel from "@/components/home/NottodoCarousel";
import HomeCalendar from "@/components/home/ModerationCalendar";
import {  useState } from "react";
import ModerationAddModal from "@/components/home/ModerationAddModal";
import ModerationList from "@/components/home/ModerationList";
import ModerationDetailModal from "@/components/home/ModerationDetailModal";
import { ModerationItemType, ModerationStatusType } from "@/types";
import { isSameDate } from "@/utils";
import DeleteModerationModal from "@/components/home/DeleteModerationModal";
import EmptyNottodo from "./EmptyNottodo";

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

  const setSelectedDate = (date: Date) => {
    setDate(date);
    setIsToday(isSameDate(date, new Date()))
  };

  const onSubmit = () => {
    onCancelAddModifyModal()
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
    return <EmptyNottodo />
  }

  return (
    <div>
      <NottodoCarousel />
      <HomeCalendar date={date} onDateChange={setSelectedDate} />
      <ModerationList 
        moderations={moderations}
        isToday={isToday}
        onAddModeration={() => setShowAddModal(true)}
        onClickModeration={onClickModeration}
      />
      <ModerationAddModal
        status={newModeration.status}
        content={newModeration.content}
        setStatus={setStatus}
        setContent={setContent}
        isOpen={showAddModal}
        onSubmit={onSubmit}
        onClose={onCancelAddModifyModal}
      />
      <ModerationDetailModal
        moderation={selectedModeration}
        isOpen={showDetailModal}
        onModify={onModify}
        onDelete={onShowDeleteModal}
        onClose={() => setShowDetailModal(false)}
      />
      <DeleteModerationModal
        isOpen={showDeleteModal}
        onClose={onCancelDeleteModal}
        onDelete={console.log}
      />
    </div>
  );
};

export default Home;
