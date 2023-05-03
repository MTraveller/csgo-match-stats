import { Statuses } from '../contexts/eventsContexts';
import { EventLog } from './processEvents';
import processTeams from './processTeams';
import timeDiffCalc from './timeDiffCalc';

interface Logs {
  log: string[];
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
      });
  }

  roundStatuses = roundStatuses.filter((_, idx) => idx % 2 === 0);

  const roundsPlayed = roundsIndexes.length / 2;

  const logs: Logs[] = [];

  const newRoundStatuses: Statuses[] = [...roundStatuses];

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

    newRoundStatuses[i].roundTime = timeDiffCalc(startTime, finishTime);

    logs.push({
      log: matchStart.slice(sliceFrom, sliceTo ? sliceTo + 1 : -1),
    });

    if (roundsIndexes.length === 1) roundsIndexes.pop();
  }

  return processTeams(logs, newRoundStatuses);
}

export default processRounds;
