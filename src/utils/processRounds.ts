import timeDiffCalc from './timeDiffCalc';

export interface Rounds {
  roundLog: string[];
  roundStatuses: object[];
}

interface Statuses {
  map: string;
  round: string;
  roundScore: string;
  roundTime?: object;
}

function processRounds(
  matchStart: string[],
  start: string,
  end: string,
  played: string
) {
  const rounds: Rounds[] = [];

  const roundsIndexes = matchStart
    .map((e, i) => {
      if (e.includes(start)) return i;
      if (e.includes(end)) return i;
    })
    .filter(item => Number(item));

  let roundStatuses: Statuses[] = [];

  matchStart.forEach(e => {
    let matchMap = '';
    let roundsPlayed = '';
    let roundScore = '';

    if (e.includes(played)) {
      const isPlayed = e.match(/Played:\s(.*)/)?.at(1);
      const isScore = e.match(/Score:\s(.*?)\s/)?.at(1);
      const isMap = e.match(/\\"(\w+)\\"/)?.at(1);

      matchMap = isMap ? isMap : '';
      roundsPlayed = isPlayed ? isPlayed : '';
      roundScore = isScore ? isScore : '';
    }

    if (roundsPlayed !== '0' && roundsPlayed && roundScore)
      roundStatuses.push({
        map: matchMap,
        round: roundsPlayed,
        roundScore,
      });
  });

  roundStatuses = roundStatuses.filter((_, idx) => idx % 2 === 0);

  const roundsPlayed = roundsIndexes.length / 2;

  for (let i = 0; i < roundsPlayed - 1; i++) {
    const sliceFrom = roundsIndexes.shift();
    const sliceTo = roundsIndexes.shift();

    let startTime = '';
    let finishTime = '';
    matchStart.forEach((e, idx) => {
      const idxFrom = idx === sliceFrom;
      const idxTo = idx === sliceTo;
      if (idxFrom || idxTo) {
        const time = e.match(/\s-\s(.*):\s/)?.at(1);
        if (idxFrom) {
          startTime = time ? time : '';
        } else {
          finishTime = time ? time : '';
        }
      }
    });

    roundStatuses[i].roundTime = timeDiffCalc(startTime, finishTime);

    rounds.push({
      roundLog: matchStart.slice(sliceFrom, sliceTo ? sliceTo + 1 : -1),
      roundStatuses,
    });

    if (roundsIndexes.length === 1) roundsIndexes.pop();
  }

  return rounds;
}

export default processRounds;
