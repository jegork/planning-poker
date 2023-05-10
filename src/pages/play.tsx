import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react';
import PlayersList from '../components/PlayersList';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import SelectablePokerCard, {
  SelectablePokerCardProps,
} from '../components/SelectablePokerCard';
import StoriesList, { StoriesListProps } from '../components/StoriesList';
import PokerTable, { PokerTableProps } from '../components/PokerTable';

const FIBONACCI = '1, 2, 3, 5, 8, 13, 21, 34, 55, 89'
  .split(', ')
  .map((v) => parseInt(v));

function getRandom(list: Array<any>) {
  return list[Math.floor(Math.random() * list.length)];
}

interface Props {
  isPlaying: PokerTableProps['isPlaying'];
  playerVotes: PokerTableProps['playerVotes'];
  playersList: Array<string>;
  storiesList: StoriesListProps['stories'];
  activeStoryId: StoriesListProps['activeId'];
  code: string;
}

export default function PlayPage({
  playerVotes = [],
  playersList = [],
  storiesList = [],
  activeStoryId = null,
  isPlaying = false,
  code = '',
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const handleSelectCard: SelectablePokerCardProps['onClick'] = (v) => {};
  const handleGameReset = () => {};
  const handleGameResume = () => {};
  const handleGamePause = () => {};
  const handleStoryAdd = (name: string) => {};

  return (
    <Flex flexDir="column" w="full" h="100vh" bg="gray.50" align="center">
      <Box w="full" bgColor="purple.500">
        <Flex py={4} px={6} color="white">
          <Heading>OpenPlanningPoker</Heading>
        </Flex>
      </Box>
      <Flex flexGrow={1} h="full" flexDir="column" px={4} py={8} maxW="1400px">
        <Box flexGrow="1" w="full">
          <Grid
            h="full"
            w="full"
            gap="4"
            gridTemplateColumns={'1fr auto'}
            gridTemplateRows={'auto 400px 1fr'}
            templateAreas={`
            "table info"
            "table players"
            "table stories"
          `}
          >
            <GridItem area={'info'}>
              <Card>
                <CardHeader>
                  <Heading size="md">Game info</Heading>
                </CardHeader>
                <CardBody>
                  <Flex
                    flexDir="row"
                    w="full"
                    justify="space-between"
                    align="center"
                  >
                    <Text>Code: {code}</Text>
                    <Button size="sm" colorScheme="purple">
                      Share
                    </Button>
                  </Flex>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem area={'table'}>
              <Stack
                direction="column"
                align="center"
                justify="space-between"
                h="full"
              >
                <Center flexGrow={1}>
                  <PokerTable
                    playerVotes={playerVotes}
                    isPlaying={isPlaying}
                    onReset={handleGameReset}
                    onPause={handleGamePause}
                    onResume={handleGameResume}
                  />
                </Center>
                <Wrap
                  spacingY={2}
                  direction="row"
                  spacing={4}
                  w="full"
                  justify="center"
                >
                  {FIBONACCI.map((v) => (
                    <SelectablePokerCard
                      key={v}
                      value={v}
                      color="red"
                      onClick={handleSelectCard}
                    />
                  ))}
                </Wrap>
              </Stack>
            </GridItem>

            <GridItem area={'players'}>
              <PlayersList players={playersList} />
            </GridItem>

            <GridItem area={'stories'}>
              <StoriesList
                activeId={activeStoryId}
                stories={storiesList}
                onAddStory={handleStoryAdd}
              />
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const params = context.query;

  if (!params?.id || Array.isArray(params.id)) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    };
  }

  const playersList = [
    'Player 1',
    'Player 2',
    'Player 3',
    'Player 4',
    'Player 5',
  ];

  const playerVotes = playersList.map((v) => ({
    name: v,
    vote: getRandom(FIBONACCI),
  }));

  playerVotes[playerVotes.length - 1].vote = null;

  const props = {
    playerVotes,
    playersList,
    storiesList: [1, 2, 3, 4].map((v) => ({ name: 'Story ' + v })),
    activeStoryId: 0,
    isPlaying: true,
    code: params.id,
  };

  return {
    props: props,
  };
};
