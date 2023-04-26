import { EventLog } from './processEvents';
import { Statuses } from './processRounds';

interface Logs {
  log?: string[];
}

function processTeams(logs: Logs[], statuses: Statuses[]) {
  const newStatus = { ...statuses };

  logs.forEach((round, idx) => {
    round.log?.forEach(e => {
      if (e.includes(EventLog.ct))
        newStatus[idx].ct = e.match(/":\s(.*)/)?.at(1);
      if (e.includes(EventLog.tr))
        newStatus[idx].tr = e.match(/":\s(.*)/)?.at(1);
    });
  });

  return { logs, statuses: newStatus };
}

export default processTeams;
