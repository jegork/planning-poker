import { Box, Heading, Stack, Text } from '@chakra-ui/react';

export default function PlayersList({ players }: { players: string[] }) {
  return (
    <Box>
      <Heading size="sm">Joined players:</Heading>
      <Stack dir={'column'}>
        {players.map((v) => (
          <Text key={v}>{v}</Text>
        ))}
      </Stack>
    </Box>
  );
}
