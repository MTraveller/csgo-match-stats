function timeDiffCalc(startTime: string, finishTime: string): object {
  const start = startTime.split(':');
  const finish = finishTime.split(':');

  const minFinish = Number(finish[1]);
  const secFinish = Number(finish[2]);

  const calcMin =
    Math.abs(Number(start[1]) - (minFinish === 0 ? 60 : minFinish)) - 1;

  const startSec = Number(start[2]) - 60;
  const minuteReminder = startSec < 0 ? Math.abs(startSec) : startSec;

  const secStartPlusFinish = minuteReminder + secFinish;

  const secGreaterThanSixty = secStartPlusFinish > 60;
  const secEqualToSixty = secStartPlusFinish === 60;

  const seconds = secGreaterThanSixty
    ? minuteReminder + secFinish - 60
    : secEqualToSixty
    ? 0
    : secStartPlusFinish;

  const minutes =
    calcMin === -1
      ? 0
      : secEqualToSixty || secGreaterThanSixty
      ? calcMin + 1
      : calcMin;

  return { minutes, seconds };
}

export default timeDiffCalc;
