import timeDiffCalc from './timeDiffCalc';

export interface Rounds {
  roundLog: string[];
  roundTime: object[];
}

function processRounds(matchStart: string[], start: string, end: string) {
  const rounds: Rounds[] = [];

  const matchesStartIdx = matchStart
    .map((e, i) => {
      if (e.includes(start)) return i;
    })
    .filter(item => Number(item));

  const matchesEndIdx = matchStart
    .map((e, i) => {
      if (e.includes(end)) return i;
    })
    .filter(item => Number(item));

  for (let i = 0; i < 22; i++) {
    const sliceFrom = matchesStartIdx.shift();
    const sliceTo = matchesEndIdx.shift();

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

    rounds.push({
      roundTime: timeDiffCalc(startTime, finishTime),
      roundLog: matchStart.slice(sliceFrom, sliceTo ? sliceTo + 1 : -1),
    });

    if (matchesStartIdx.length === 1) matchesStartIdx.pop();
  }

  return rounds;
}

export default processRounds;
