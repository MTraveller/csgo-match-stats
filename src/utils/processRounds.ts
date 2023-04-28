import timeDiffCalc from './timeDiffCalc';
import { EventLog } from './processEvents';
import processTeams from './processTeams';

interface Logs {
  log: string[];
}

export interface Statuses {
  map: string;
  ct?: string;
  tr?: string;
  round: string;
  roundScore: string;
  roundTime: object;
}

export interface Rounds {
  logs: object[];
  roundStatuses?: object[];
}

function processRounds(matchStart: string[]) {
  const roundsIndexes = matchStart
    .map((e, i) => {
      if (e.includes(EventLog.roundStart)) return i;
      if (e.includes(EventLog.roundEnd)) return i;
    })
    .filter(item => Number(item));

  let roundStatuses: Statuses[] = [];

  for (const e of matchStart) {
    let matchMap = '';
    let roundsPlayed = '';
    let roundScore = '';

    if (e.includes(EventLog.roundsPlayed)) {
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
        roundTime: {},
      });
  }

  roundStatuses = roundStatuses.filter((_, idx) => idx % 2 === 0);

  const roundsPlayed = roundsIndexes.length / 2;

  const logs: Logs[] = [];

  for (let i = 0; i < roundsPlayed - 1; i++) {
    const sliceFrom = roundsIndexes.shift();
    const sliceTo = roundsIndexes.shift();

    let startTime = '';
    let finishTime = '';

    for (const [idx, e] of matchStart.entries()) {
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
    }

    roundStatuses[i].roundTime = timeDiffCalc(startTime, finishTime);

    logs.push({
      log: matchStart.slice(sliceFrom, sliceTo ? sliceTo + 1 : -1),
    });

    if (roundsIndexes.length === 1) roundsIndexes.pop();
  }

  const roundsResult = processTeams(logs, roundStatuses);

  return roundsResult;
}

export default processRounds;
