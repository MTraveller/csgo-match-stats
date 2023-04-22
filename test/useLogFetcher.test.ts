import useLogFetcher from '../src/hooks/useLogFetcher';

describe('fetch log data from api', () => {
  const data = useLogFetcher(
    'http://blast-recruiting.s3.eu-central-1.amazonaws.com/NAVIvsVitaGF-Nuke.txt'
  );

  test('returns two arrays', async () => {
    const objLength = Object.keys(await data).length;
    expect(objLength).toHaveLength(2);
  });

  test('logData array contain items', async () => {
    const logDataLength = (await data).logData.length;
    expect(logDataLength).toBeGreaterThan(0);
  });

  test('playingTeam array has a length of 2', async () => {
    const playingTeamsLength = (await data).playingTeams.length;
    expect(playingTeamsLength).toHaveLength(2);
  });
});
