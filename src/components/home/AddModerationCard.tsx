import Card from "@/components/common/Card";
import SecondaryButton from "@/components/common/buttons/SecondaryButton"

interface AdddModerationCardProps {
  onClick: () => void;
}

const AdddModerationCard = ({ onClick }: AdddModerationCardProps) => {
  return <Card>
    <SecondaryButton className="px-8 py-2" label="기록 추가" onClick={onClick} />
  </Card>;
};

export default AdddModerationCard;
