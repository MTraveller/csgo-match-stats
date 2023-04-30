import { Statuses } from '../contexts/eventsContexts';
import { EventLog } from './processEvents';

interface Logs {
  log: string[];
}

function processTeams(logs: Logs[], statuses: Statuses[]) {
  const newStatus = { ...statuses };

  for (const [idx, round] of logs.entries()) {
    for (const e of round.log) {
      if (e.includes(EventLog.ct))
        newStatus[idx].ct = e.match(/":\s(.*)/)?.at(1);
      if (e.includes(EventLog.tr))
        newStatus[idx].tr = e.match(/":\s(.*)/)?.at(1);
    }
  }

  return { logs, statuses: newStatus };
}

export default processTeams;
