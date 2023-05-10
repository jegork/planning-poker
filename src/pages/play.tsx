import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import PokerCard from '../components/PokerCard';
import PlayersList from '../components/PlayersList';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import SelectablePokerCard, {
  SelectablePokerCardProps,
} from '../components/SelectablePokerCard';

const FIBONACCI = '1, 2, 3, 5, 8, 13, 21, 34, 55, 89'
  .split(', ')
  .map((v) => parseInt(v));

function getRandom(list: Array<any>) {
  return list[Math.floor(Math.random() * list.length)];
}

interface Props {
  playerVotes: Array<{ name: string; vote: number }>;
  playersList: Array<string>;
}

export default function PlayPage({
  playerVotes = [],
  playersList = [],
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const handleSelectCard: SelectablePokerCardProps['onClick'] = (v) => {};

  return (
    <Box w="full" h="100vh" bg="gray.50" px={4} py={6}>
      <Flex h="full" flexDir="column">
        <Box flexGrow="1" w="full">
          <Grid
            h="full"
            w="full"
            gap="4"
            gridTemplateColumns={'1fr 150px'}
            gridTemplateRows={'200px 1fr'}
            templateAreas={`
            "table players"
            "table stories"
          `}
          >
            <GridItem area={'table'}>
              <Stack
                direction="column"
                align="center"
                justify="space-between"
                h="full"
              >
                <Center flexGrow={1}>
                  <Stack
                    direction="row"
                    spacing={8}
                    bg="white"
                    p={24}
                    rounded="sm"
                  >
                    {playerVotes.map((v) => (
                      <Box key={v.name}>
                        <PokerCard value={v.vote} color={'green'} />
                        <Text w="full" textAlign="center">
                          {v.name}
                        </Text>
                      </Box>
                    ))}
                  </Stack>
                </Center>
                <Stack direction="row" spacing={6} w="full" justify="center">
                  {FIBONACCI.map((v) => (
                    <SelectablePokerCard
                      key={v}
                      value={v}
                      color="red"
                      onClick={handleSelectCard}
                    />
                  ))}
                </Stack>
              </Stack>
            </GridItem>

            <GridItem area={'players'}>
              <PlayersList players={playersList} />
            </GridItem>

            <GridItem area={'stories'}></GridItem>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
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

  const props = {
    playerVotes,
    playersList,
  };

  return {
    props: props,
  };
};
