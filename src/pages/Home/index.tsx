import NottodoCarousel from "@/components/home/NottodoCarousel";
import HomeCalendar from "@/components/home/ModerationCalendar";
import {  useEffect, useState } from "react";
import ModerationAddModal from "@/components/home/ModerationAddModal";
import ModerationList from "@/components/home/ModerationList";
import ModerationDetailModal from "@/components/home/ModerationDetailModal";
import { Moderation, ModerationStatusType, Nottodo } from "@/types";
import { isSameDate } from "@/utils";
import DeleteModerationModal from "@/components/home/DeleteModerationModal";
import EmptyNottodo from "./EmptyNottodo";
import { useGetAllNottodosByUserId, useGetAllModerationByNottodoId } from "@/api";

type NewModerationType = {
  content: string;
  status: ModerationStatusType;
}

const Home = () => {
  const [currentNottodo, setCurrentNottodo] = useState<Nottodo | null>(null);
  const [date, setDate] = useState<Date>(new Date());
  const [isToday, setIsToday] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedModeration, setSelectedModeration] = useState<Moderation | null>(null)
  const [newModeration, setNewModeration] = useState<NewModerationType>({
    content: '',
    status: 'success'
  })

  const nottodosQuery = useGetAllNottodosByUserId('1')
  const moderationsQuery = useGetAllModerationByNottodoId(currentNottodo?.id || '', !!currentNottodo)


  useEffect(() => {
    const { data } = nottodosQuery
    if (data && data.length > 0) {
      setCurrentNottodo(data[0])
    }

  }, [nottodosQuery.data])

  const setSelectedDate = (date: Date) => {
    setDate(date);
    setIsToday(isSameDate(date, new Date()))
  };

  const onSubmit = () => {
    onCancelAddModifyModal()
  }

  const onClickModeration = (id: string) => {
    const moderation = moderationsQuery.data?.find(item => item.id === id)

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

  if (!nottodosQuery.data || !moderationsQuery.data) {
    return
  }

  if (nottodosQuery.data && nottodosQuery.data.length === 0) {
    return <EmptyNottodo />
  }

  return (
    <div>
      <NottodoCarousel 
        nottodos={nottodosQuery.data}
      />
      <HomeCalendar date={date} onDateChange={setSelectedDate} />
      <ModerationList 
        moderations={moderationsQuery.data}
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
