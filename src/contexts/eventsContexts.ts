import React from 'react';
import { RoundsPlayersStats } from '../utils/processScores';

export interface Statuses {
  map: string;
  round: string;
  roundScore: string;
  roundTime?: { minutes?: number; seconds?: number };
  ct?: string;
  tr?: string;
}

interface EventsContextsType {
  statuses: Statuses[];
  roundsPlayersStats: RoundsPlayersStats;
}

const EventsContext = React.createContext<EventsContextsType>(
  {} as EventsContextsType
);

export default EventsContext;
