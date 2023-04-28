function processUrlTeams(url: string) {
  const startIdx = url.lastIndexOf('/') + 1;
  const endIdx = url.indexOf('.txt');

  const matchIdentifier = url
    .substring(startIdx, endIdx)
    .replace(/-[A-Za-z0-9]+$/, '');

  const playingTeams = matchIdentifier.split('vs');

  return playingTeams;
}

export default processUrlTeams;
