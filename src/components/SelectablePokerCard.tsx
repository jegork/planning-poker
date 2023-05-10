import PokerCard, { PokerCardProps } from './PokerCard';
import { motion } from 'framer-motion';

export interface SelectablePokerCardProps extends PokerCardProps {
  onClick: (value: PokerCardProps['value']) => void;
}

const variants = {
  initial: {
    y: 0,
  },
  hover: {
    y: '-25%',
    zIndex: 100,
  },
};

export default function SelectablePokerCard({
  onClick,
  ...rest
}: SelectablePokerCardProps) {
  return (
    <motion.button
      style={{ position: 'relative', overflow: 'hidden', padding: '0 1px' }}
      // initial={{ y: 100 }}
      // whileHover={{ y: 0, z: 100 }}
      initial="initial"
      animate="initial"
      whileHover="hover"
      onClick={() => onClick(rest.value)}
    >
      <motion.div
        variants={variants}
        style={{ position: 'relative', bottom: '-25%' }}
      >
        <PokerCard border="1px solid black" {...rest} />
      </motion.div>
    </motion.button>
  );
}
