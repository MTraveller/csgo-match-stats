function processMapTeams(matchStart: string[]) {
  const mapTeams = [];
  const matchMap = matchStart[0]?.match(/on\s\\"(.*?)\\"/)?.at(1);
  const teamCT = matchStart[1]?.match(/":\s(.*)/)?.at(1);
  const teamTerrorist = matchStart[2]?.match(/":\s(.*)/)?.at(1);

  mapTeams.push(matchMap, teamCT, teamTerrorist);
  return mapTeams;
}

export default processMapTeams;
