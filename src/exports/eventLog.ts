const enum EventLog {
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

export default EventLog;
