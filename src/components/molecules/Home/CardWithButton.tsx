import Card from "@/components/atoms/Card";
import SecondaryButton from "@/components/atoms/buttons/SecondaryButton";

interface CardWithButtonProps {
  label: string;
  onClick: () => void;
}

const CardWithButton = ({ label, onClick }: CardWithButtonProps) => {
  return (
    <Card>
      <SecondaryButton className="px-8 py-2" label={label} onClick={onClick} />
    </Card>
  );
};

export default CardWithButton;
