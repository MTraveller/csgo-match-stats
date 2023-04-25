function processTeams(url: string) {
  const matchIdentifier = url.slice(
    url.lastIndexOf('/') + 1,
    url.indexOf('.txt')
  );
  const playingTeams = matchIdentifier
    .slice(0, matchIdentifier.indexOf('-'))
    .split('vs');

  return playingTeams;
}

export default processTeams;
