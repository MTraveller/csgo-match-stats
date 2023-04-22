async function useLogFetcher(url: string) {
  const matchIdentifier = url.slice(url.lastIndexOf('/') + 1, url.indexOf('.txt'));
  const playingTeams = matchIdentifier.slice(0, matchIdentifier.indexOf('-')).split('vs');

  const res = await fetch(url);
  const logData = (await res.text()).split(/[\r\n]+/);

  return { playingTeams, logData }
}

export default useLogFetcher;
