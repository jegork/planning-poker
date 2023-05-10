import { Box, BoxProps, Center, Flex, Text } from '@chakra-ui/react';

export interface PokerCardProps {
  value: number | null;
  color: BoxProps['bgColor'];
  border?: BoxProps['border'];
  textColor?: BoxProps['color'];
}

export default function PokerCard({
  value,
  color,
  border = 'initial',
  textColor = 'white',
}: PokerCardProps) {
  return (
    <Box
      h="150px"
      w="100px"
      border={border}
      bgColor={color}
      shadow="md"
      color={textColor}
      px={2}
      py={1}
    >
      <Flex h="full" w="full" flexDir="column">
        <Text textAlign="left">{value || '?'}</Text>
        <Center flexGrow="1">
          <Text fontSize="48px">{value || '?'}</Text>
        </Center>
        <Text
          textAlign="left"
          transform="rotate(180deg)"
          transformOrigin="center center"
        >
          {value || '?'}
        </Text>
      </Flex>
    </Box>
  );
}
