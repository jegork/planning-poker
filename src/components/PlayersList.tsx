import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function PlayersList({ players }: { players: string[] }) {
  return (
    <Card h="full">
      <CardHeader>
        <Heading size="md">Joined players</Heading>
      </CardHeader>
      <CardBody>
        <Stack dir={'column'}>
          {players.map((v) => (
            <Text key={v}>{v}</Text>
          ))}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>Total: {players.length}</CardFooter>
    </Card>
  );
}
