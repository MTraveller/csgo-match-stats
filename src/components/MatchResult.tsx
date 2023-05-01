import { useContext } from 'react';
import EventsContext from '../contexts/eventsContexts';
import TopPlayersContext from '../contexts/topPlayersContext';
import useRoundStore from '../stores/roundStore';
import processTopPlayers from '../utils/processTopPlayers';
import Layout from './matchresult/Layout';

function MatchResult() {
  const { roundsPlayersStats } = useContext(EventsContext);
  const { round } = useRoundStore();

  const topPlayers = processTopPlayers(roundsPlayersStats, round);

  topPlayers[0].unshift('Counter Terrorist');
  topPlayers[1].unshift('Terrorist');

  return (
    <TopPlayersContext.Provider value={{ topPlayers }}>
      <Layout />
    </TopPlayersContext.Provider>
  );
}

export default MatchResult;
