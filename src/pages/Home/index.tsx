import NottodoCarousel from "@/components/home/NottodoCarousel";
import HomeCalendar from "@/components/home/ModerationCalendar";
import { useCallback, useMemo, useState } from "react";
import ModerationAddModal from "@/components/home/ModerationAddModal";
import ModerationList from "@/components/home/ModerationList";
import ModerationDetailModal from "@/components/home/ModerationDetailModal";
import { Moderation, Nottodo } from "@/types";
import { getEndOfDate, getStartOfDate, isSameDate } from "@/utils";
import ModerationDeleteModal from "@/components/home/ModerationDeleteModal";
import EmptyNottodo from "./EmptyNottodo";
import {
  useGetAllNottodosByUserId,
  useGetModerations,
  usePostModeration,
} from "@/api";

type NewModerationType = {
  content: string;
  success: boolean;
};

const Home = () => {
  const [currentNottodo, setCurrentNottodo] = useState<Nottodo | null>(null);
  const [date, setDate] = useState<Date>(new Date());
  const [isToday, setIsToday] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedModeration, setSelectedModeration] =
    useState<Moderation | null>(null);
  const [newModeration, setNewModeration] = useState<NewModerationType>({
    content: "",
    success: true,
  });

  const nottodosQuery = useGetAllNottodosByUserId("1");

  const carouselNottodos = useMemo(
    () => nottodosQuery.data || [],
    [nottodosQuery.data]
  );

  const onChangeNottodo = useCallback((nottodo: Nottodo) => {
    setCurrentNottodo(nottodo);
  }, []);

  const moderationsOfTodayQuery = useGetModerations(
    currentNottodo?.id || "",
    getStartOfDate(date),
    getEndOfDate(date),
    !!currentNottodo
  );

  const moderationsMutation = usePostModeration();

  const setSelectedDate = (date: Date) => {
    setDate(date);
    setIsToday(isSameDate(date, new Date()));
  };

  const onSubmit = () => {
    moderationsMutation.mutate({
      ...newModeration,
      nottodoId: currentNottodo!.id,
    });
    onCancelAddModifyModal();
  };

  const onClickModeration = (id: string) => {
    const moderation = moderationsOfTodayQuery.data?.find(
      (item) => item.id === id
    );

    if (moderation) {
      setShowDetailModal(true);
      setSelectedModeration(moderation);
    }
  };

  const onShowDeleteModal = () => {
    setShowDetailModal(false);
    setShowDeleteModal(true);
  };

  const onCancelDeleteModal = () => {
    setShowDeleteModal(false);
    setShowDetailModal(true);
  };

  const onCancelAddModifyModal = () => {
    setNewModeration({
      content: "",
      success: true,
    });
    setShowAddModal(false);
  };

  const onModify = () => {
    setNewModeration({
      content: selectedModeration!.content,
      success: selectedModeration!.success,
    });
    setShowDetailModal(false);
    setShowAddModal(true);
  };

  const setSuccess = (success: boolean) => {
    setNewModeration((moderation) => ({
      ...moderation,
      success,
    }));
  };

  const setContent = (value: string) => {
    setNewModeration((moderation) => ({
      ...moderation,
      content: value,
    }));
  };

  if (nottodosQuery.isLoading) {
    return <div>로딩중...</div>;
  }

  if (nottodosQuery.isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  if (nottodosQuery.isIdle) {
    return <div>데이터가 없습니다.</div>;
  }

  if (nottodosQuery.data.length === 0) {
    return <EmptyNottodo />;
  }

  return (
    <div>
      <NottodoCarousel nottodos={carouselNottodos} onSelect={onChangeNottodo} />
      <HomeCalendar
        date={date}
        nottodoId={currentNottodo?.id || ""}
        onDateChange={setSelectedDate}
      />
      <ModerationList
        moderations={moderationsOfTodayQuery.data || []}
        isToday={isToday}
        onAddModeration={() => setShowAddModal(true)}
        onClickModeration={onClickModeration}
      />
      <ModerationAddModal
        success={newModeration.success}
        content={newModeration.content}
        setSuccess={setSuccess}
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
      <ModerationDeleteModal
        isOpen={showDeleteModal}
        onClose={onCancelDeleteModal}
        onDelete={console.log}
      />
    </div>
  );
};

export default Home;
