import { Box, BoxProps, Center, Text } from '@chakra-ui/react';

export interface PokerCardProps {
  value: number;
  color: BoxProps['bgColor'];
}

export default function PokerCard({ value, color }: PokerCardProps) {
  return (
    <Box h="150px" w="100px" bgColor={color} border="2px solid black">
      <Center h="full" w="full">
        <Text fontSize="48px" color="white">
          {value}
        </Text>
      </Center>
    </Box>
  );
}
