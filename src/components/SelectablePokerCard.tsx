import PokerCard, { PokerCardProps } from './PokerCard';

export interface SelectablePokerCardProps extends PokerCardProps {
  onClick: (value: PokerCardProps['value']) => void;
}

export default function SelectablePokerCard({
  onClick,
  ...rest
}: SelectablePokerCardProps) {
  return (
    <button onClick={() => onClick(rest.value)}>
      <PokerCard {...rest} />
    </button>
  );
}
