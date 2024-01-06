import { useState } from "react";
import BottomModal from "../molecules/Modals/BottomModal";
import ToggleButtonGroup from "../molecules/ToggleButtonGroup";
import TextAreaInput from "../atoms/TextAreaInput";
import SecondaryButton from "../atoms/buttons/SecondaryButton";
import { ModerationStatusType } from "@/types";

interface ModerationAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (moderationType: ModerationStatusType, content: string) => void;
}

const ModerationAddModal = ({ isOpen, onClose, onSubmit }: ModerationAddModalProps) => {
  const [moderationType, setModerationType] = useState<ModerationStatusType>('success')
  const [content, setContent] = useState<string>('')
  const [isShort, setIsShort] = useState<boolean>(false);
  const values: [ModerationStatusType, ModerationStatusType] = ['success', 'fail']

  const onClickSubmit = () => {
    const isShort = content.length < 4

    if (isShort) {
      setIsShort(true)
      return;
    }

    onSubmit(moderationType, content)
  }

  return (<BottomModal isOpen={isOpen} onClose={onClose}>
    <div className="w-11/12 mx-auto">
      <ToggleButtonGroup<ModerationStatusType>
        values={values}
        labels={[ '성공 기록', '실패 기록']}
        toggledClasses={['bg-green-positive', 'bg-red-negative']}
        selected={moderationType}
        onToggle={(value) => setModerationType(value)}
      />
      <TextAreaInput
        value={content}
        onChange={setContent}
        placeholder={"코멘트 입력 (최소 4자)"}
        hasError={isShort}
        errorMessage="4자 이상 입력해주세요."
      />
      <SecondaryButton
        label="완료"
        className="w-full py-3 my-4"
        onClick={onClickSubmit}
      />
    </div>
  </BottomModal>)
}
 
export default ModerationAddModal;