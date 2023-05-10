import { Box, BoxProps, Center, Flex, Text } from '@chakra-ui/react';

export interface PokerCardProps {
  value: number;
  color: BoxProps['bgColor'];
  border?: BoxProps['border'];
}

export default function PokerCard({ value, color, border = 'initial'}: PokerCardProps) {
  return (
    <Box
      h="150px"
      w="100px"
      border={border}
      bgColor={color}
      shadow="md"
      color="white"
      px={2}
      py={1}
    >
      <Flex h="full" w="full" flexDir="column">
        <Text textAlign="left">{value}</Text>
        <Center flexGrow="1">
          <Text fontSize="48px">{value}</Text>
        </Center>
        <Text
          textAlign="left"
          transform="rotate(180deg)"
          transformOrigin="center center"
        >
          {value}
        </Text>
      </Flex>
    </Box>
  );
}
