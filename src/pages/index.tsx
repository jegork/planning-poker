import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Input,
  Stack, Text,
} from '@chakra-ui/react';

export default function IndexPage() {
  return (
    <Box w="full" h="100vh" bgColor="#715DF2" bgImage="/background.svg" backgroundSize="cover">
      <Center h="full" color="white">
        <Stack dir="column" spacing={6}>
          <Box>
            <Heading size="md" textAlign="center">
              Welcome to
            </Heading>
            <Heading size="lg" textAlign="center">
              OpenPlanningPoker
            </Heading>
          </Box>
          <Button size="lg" colorScheme="whiteAlpha" variant="solid">
            Create a new game
          </Button>
          <Flex w="full" position="relative" py={2} align="center">

            <Divider borderColor="white" borderWidth="1px"/>
            <Text
              px={2}
              textTransform="uppercase"
              fontSize="20px"
              color="white"
              fontWeight="semibold"
            >
              Or
            </Text>
            <Divider borderColor="white" borderWidth="1px" />
          </Flex>
          <Input
            placeholder="Game code"
            _placeholder={{ color: 'whiteAlpha.800' }}
            size="lg"
            fontWeight="bold"
            textAlign="center"
            _focusVisible={{}}
          ></Input>
          <Button size="lg" colorScheme="whiteAlpha" variant="solid">
            Join an existing game
          </Button>
        </Stack>
      </Center>
    </Box>
  );
}
