import { useState } from "react";
import BottomModal from "../atoms/BottomModal";
import ToggleButtonGroup from "../molecules/ToggleButtonGroup";
import TextAreaInput from "../atoms/TextAreaInput";
import SecondaryButton from "../atoms/buttons/SecondaryButton";

type ModerationType = 'success' | 'fail'

interface ModerationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (moderationType: ModerationType, content: string) => void;
}

const ModerationModal = ({ isOpen, onClose, onSubmit }: ModerationModalProps) => {
  const [moderationType, setModerationType] = useState<ModerationType>('success')
  const [content, setContent] = useState<string>('')
  const [isShort, setIsShort] = useState<boolean>(false);
  const values: [ModerationType, ModerationType] = ['success', 'fail']

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
      <ToggleButtonGroup<ModerationType>
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
 
export default ModerationModal;