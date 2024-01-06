import TextButton from "../atoms/buttons/TextButton";
import CenterModal from "../molecules/Modals/CenterModal";

interface DeleteModerationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModerationModal = ({isOpen, onClose, onDelete}: DeleteModerationModalProps) => {
  return (<CenterModal
    isOpen={isOpen}
    onClose={onClose}
  >
    <div>
        나의 절제 기록이 사라져요. 정말로 삭제하시겠어요?
    </div>
    <div className="mt-4">
      <TextButton
        className="text-gray-600 w-1/2 py-2"
        label="취소"
        onClick={onClose}
      />
      <TextButton
        className="text-red-negative font-bold w-1/2 py-2"
        label="삭제"
        onClick={onDelete}
      />
    </div>
  
  </CenterModal>);
}
 
export default DeleteModerationModal;