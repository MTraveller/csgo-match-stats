
async function processLog(url: string) {
  const matchIdentifier = url.slice(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
  const playingTeams = matchIdentifier.slice(0, matchIdentifier.indexOf('-')).split('vs');

  console.log(playingTeams)

  const res = await fetch(url);
  const logData = (await res.text()).split(/[\r\n]+/);

  const eventLog = logData[6].split(' ');

  console.log(eventLog[4]);
  console.log(eventLog.includes('"nextlevel"'));
  console.log(eventLog[5].slice(1, -1));
}

processLog('http://blast-recruiting.s3.eu-central-1.amazonaws.com/NAVIvsVitaGF-Nuke.txt');