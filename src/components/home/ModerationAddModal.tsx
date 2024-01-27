import { useState } from "react";
import BottomModal from "@/components/common/modals/BottomModal";
import ToggleButtonGroup from "@/components/common/buttons/ToggleButtonGroup";
import TextAreaInput from "../common/TextAreaInput";
import SecondaryButton from "../common/buttons/SecondaryButton";
import { ModerationStatusType } from "@/types";
import ErrorSpan from "@/components/common/ErrorSpan";

interface ModerationAddModalProps {
  status: ModerationStatusType;
  content: string
  setStatus: (status: ModerationStatusType) => void;
  setContent: (content: string) => void;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const ModerationAddModal = ({ status, content, setStatus, setContent, isOpen, onClose, onSubmit }: ModerationAddModalProps) => {
  const [isShort, setIsShort] = useState<boolean>(false);
  const values: [ModerationStatusType, ModerationStatusType] = ['success', 'fail']

  const onClickSubmit = () => {
    const isShort = content.length < 4

    if (isShort) {
      setIsShort(true)
      return;
    }

    onSubmit();
  }

  return (<BottomModal modalName="ModerationAddModal" isOpen={isOpen} onClose={onClose}>
    <div className="w-11/12 mx-auto">
      <ToggleButtonGroup<ModerationStatusType>
        values={values}
        labels={[ '성공 기록', '실패 기록']}
        toggledClasses={['bg-green-positive', 'bg-red-negative']}
        selected={status}
        onToggle={(value) => setStatus(value)}
      />
      <TextAreaInput
        value={content}
        onTextChange={setContent}
        placeholder={"코멘트 입력 (최소 4자)"}
        hasError={isShort}
      />
      <ErrorSpan errorMessage="4자 이상 입력해주세요." />
      <SecondaryButton
        label="완료"
        className="w-full py-3 my-4"
        onClick={onClickSubmit}
      />
    </div>
  </BottomModal>)
}
 
export default ModerationAddModal;