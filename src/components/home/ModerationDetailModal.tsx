import ThumbsUp from "@/assets/svgs/thumb_up.svg?react";
import ThumbsDown from "@/assets/svgs/thumb_down.svg?react";
import BottomModal from "@/components/common/modals/BottomModal";
import { Moderation } from "@/types";
import TertiaryButton from "../common/buttons/TertiaryButton";
import { dateToHHMMMeridiemformat } from "@/utils";

interface ModerationDetailModalProps {
  moderation: Moderation | null;
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  onModify: () => void;
}

const ModerationDetailModal = ({
  moderation,
  isOpen,
  onClose,
  onDelete,
  onModify,
}: ModerationDetailModalProps) => {
  if (moderation === null) {
    return;
  }

  return (
    <BottomModal
      modalName="ModerationDetailModal"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="w-11/12 mx-auto ">
        <div className="flex justify-between">
          <div className="flex">
            {moderation.success ? (
              <>
                <ThumbsUp />
                <span className="ml-2 font-bold">성공 기록</span>
              </>
            ) : (
              <>
                <ThumbsDown />
                <span className="ml-2 font-bold">실패 기록</span>
              </>
            )}
          </div>
          <div className="text-sm text-gray-500">
            {dateToHHMMMeridiemformat(moderation.date)}
          </div>
        </div>
        <div className="my-4">{moderation.content}</div>
        <div className="flex justify-evenly">
          <TertiaryButton
            className="text-red-negative w-[45%] py-2"
            label="삭제"
            onClick={onDelete}
          />
          <TertiaryButton
            className="w-[45%] py-2"
            label="수정"
            onClick={onModify}
          />
        </div>
      </div>
    </BottomModal>
  );
};

export default ModerationDetailModal;
