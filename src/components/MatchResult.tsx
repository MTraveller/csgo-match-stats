import { Box, useBreakpoint } from '@chakra-ui/react';
import { useContext } from 'react';
import EventsContext from '../contexts/eventsContexts';
import TopPlayersContext from '../contexts/topPlayersContext';
import useRoundStore from '../stores/roundStore';
import processTopPlayers from '../utils/processTopPlayers';
import GridXL from './matchresult/grids/gridXL';

function MatchResult() {
  const breakpoint = useBreakpoint({ ssr: false });
  const { roundsPlayersStats } = useContext(EventsContext);
  const { round } = useRoundStore();

  console.log(breakpoint); // To determine browserSize

  const topPlayers = processTopPlayers(roundsPlayersStats, round);

  topPlayers[0].unshift('Counter Terrorist');
  topPlayers[1].unshift('Terrorist');

  return (
    <TopPlayersContext.Provider value={{ topPlayers }}>
      <Box>
        <GridXL />
      </Box>
    </TopPlayersContext.Provider>
  );
}

export default MatchResult;
