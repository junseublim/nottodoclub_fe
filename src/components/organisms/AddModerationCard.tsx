import CardWithButton from "../molecules/Home/CardWithButton";

interface AdddModerationCardProps {
  onClick: () => void;
}


const AdddModerationCard = ({onClick}: AdddModerationCardProps) => {
  return (<CardWithButton
    label="기록 추가"
    onClick={onClick}
  />)
}
 
export default AdddModerationCard;