import { Statuses } from '../contexts/eventsContexts';

function calcAverageTime({ statuses }: { statuses: Statuses[] }) {
  const rounds = Object.values(statuses);

  let minutes = 0;
  let seconds = 0;

  for (const { roundTime } of rounds) {
    if (roundTime?.minutes) minutes += roundTime.minutes;
    if (roundTime?.seconds) seconds += roundTime.seconds;
  }

  minutes += Math.floor(seconds / 60);

  const remainingSecs = seconds % 60;
  const totalSeconds = minutes * 60 + remainingSecs;

  const avgTotalTime = totalSeconds / rounds.length;
  const avgMin = Math.floor(avgTotalTime / 60);
  const avgSec = Math.round(avgTotalTime % 60);

  return { mins: avgMin, secs: avgSec };
}

export default calcAverageTime;
