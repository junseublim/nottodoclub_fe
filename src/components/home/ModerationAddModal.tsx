import BottomModal from "@/components/common/modals/BottomModal";
import ToggleButtonGroup from "@/components/common/buttons/ToggleButtonGroup";
import TextAreaInput from "../common/TextAreaInput";
import SecondaryButton from "../common/buttons/SecondaryButton";
import { ModerationStatusType } from "@/types";

interface ModerationAddModalProps {
  success: boolean;
  content: string;
  setSuccess: (success: boolean) => void;
  setContent: (content: string) => void;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const ModerationAddModal = ({
  success,
  content,
  setSuccess,
  setContent,
  isOpen,
  onClose,
  onSubmit,
}: ModerationAddModalProps) => {
  const values: [ModerationStatusType, ModerationStatusType] = [
    "success",
    "fail",
  ];

  const onClickSubmit = () => {
    onSubmit();
  };

  const onToggleStatus = (status: ModerationStatusType) => {
    if (status === "success") setSuccess(true);
    else setSuccess(false);
  };

  return (
    <BottomModal
      modalName="ModerationAddModal"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="w-11/12 mx-auto">
        <ToggleButtonGroup<ModerationStatusType>
          values={values}
          labels={["성공 기록", "실패 기록"]}
          toggledClasses={["bg-green-positive", "bg-red-negative"]}
          selected={success ? "success" : "fail"}
          onToggle={onToggleStatus}
        />
        <TextAreaInput
          value={content}
          onTextChange={setContent}
          placeholder={"코멘트 입력 (최소 4자)"}
          hasError={false}
        />
        <SecondaryButton
          label="완료"
          className="w-full py-3 my-4"
          onClick={onClickSubmit}
        />
      </div>
    </BottomModal>
  );
};

export default ModerationAddModal;
