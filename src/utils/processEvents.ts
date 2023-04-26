import processScores from './processScores';
import processPlayers from './processPlayers';
import processRounds from './processRounds';

const enum Event {
  start = 'Match_Start',
  status = 'MatchStatus',
  map = 'on map',
  ct = 'Team playing \\"CT\\"',
  tr = 'Team playing \\"TERRORIST\\"',
  assigned = '<Unassigned> to',
  roundStart = 'Round_Start',
  roundEnd = 'Round_End',
  roundsPlayed = 'RoundsPlayed',
  attack = 'attacked',
  kill = 'killed',
}

function processEvents(matchLog: string[]) {
  const matchStart = matchLog.slice(
    matchLog.findLastIndex(e => e.includes(Event.start))
  );
  const players = processPlayers(matchLog, Event.assigned);
  // const playingTeams = processMapTeams(matchStart);
  const playingRounds = processRounds(
    matchStart,
    Event.roundStart,
    Event.roundEnd,
    Event.roundsPlayed
  );
  const roundsAttacks = processScores(
    playingRounds,
    players,
    Event.attack,
    Event.kill
  );

  // console.log(playingTeams);
  console.log(playingRounds);
  console.log(roundsAttacks);

  return [1, 2, 3];
}

export default processEvents;
