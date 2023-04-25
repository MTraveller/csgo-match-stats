function processRounds(matchStart: string[], start: string, end: string) {
  const rounds: object[] = [];

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

    rounds.push({
      [i + 1]: matchStart.slice(sliceFrom, sliceTo ? sliceTo + 1 : -1),
    });

    if (matchesStartIdx.length === 1) matchesStartIdx.pop();
  }

  return rounds;
}

export default processRounds;
