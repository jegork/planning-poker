import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';

export interface StoriesListProps {
  stories: { name: string }[];
  activeId: number | null;
  onAddStory: (name: string) => void;
}

export default function StoriesList({
  stories,
  activeId,
  onAddStory,
}: StoriesListProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newStoryName, setNewStoryName] = useState<string>('');

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new story</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              _focusVisible={{
                borderColor: 'purple.500',
              }}
              value={newStoryName}
              onChange={(e) => {
                e.preventDefault();
                setNewStoryName(e.target.value);
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Flex justify="space-between" align="center" w="full">
              <Button colorScheme="purple" variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button
                colorScheme="purple"
                onClick={() => onAddStory(newStoryName)}
              >
                Create
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Card>
        <CardHeader>
          <Heading size="md">Stories</Heading>
        </CardHeader>
        <CardBody>
          <Stack direction="column" spacing={3}>
            {stories.map((s, idx) => (
              <Box
                key={idx}
                bg="gray.50"
                w="300px"
                py={3}
                px={3}
                borderWidth="2px"
                borderStyle="solid"
                borderColor="purple.500"
                rounded="md"
              >
                <Flex w="full" justify="space-between" align="center">
                  <Text fontSize="14px">{s.name}</Text>
                  <Button
                    size="sm"
                    colorScheme="purple"
                    variant="ghost"
                    visibility={activeId === idx ? 'hidden' : 'visible'}
                  >
                    Select
                  </Button>
                </Flex>
              </Box>
            ))}
          </Stack>
        </CardBody>
        <CardFooter>
          <Box w="full">
            <Button float="right" colorScheme="purple" onClick={onOpen}>
              Add
            </Button>
          </Box>
        </CardFooter>
      </Card>
    </>
  );
}
