import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import PokerCard, { PokerCardProps } from './PokerCard';

export interface PokerTableProps {
  playerVotes: Array<{ name: string; vote: number }>;
  isPlaying: boolean;
  onResume: () => void;
  onPause: () => void;
  onReset: () => void;
}

export default function PokerTable({
  playerVotes,
  isPlaying,
  onReset,
  onPause,
  onResume,
}: PokerTableProps) {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Current votes</Heading>
      </CardHeader>
      <CardBody flexDir="row">
        <Stack direction="row" py={6} px={14}>
          {playerVotes.map((v) => (
            <Box key={v.name}>
              <PokerCard value={v.vote} color={'green'} />
              <Text w="full" textAlign="center" mt={2}>
                {v.name}
              </Text>
            </Box>
          ))}
        </Stack>
      </CardBody>
      <CardFooter>
        <Stack direction="row" align="center" w="full">
          <ButtonGroup isAttached colorScheme="purple">
            <Button onClick={() => onReset()}>Reset</Button>
            <Button onClick={() => (isPlaying ? onPause() : onResume())}>
              {isPlaying ? 'Resume' : 'Pause'}
            </Button>
          </ButtonGroup>
          <Text textAlign="right" float="right" flexGrow="1">
            Time left: 0 s
          </Text>
        </Stack>
      </CardFooter>
    </Card>
  );
}
