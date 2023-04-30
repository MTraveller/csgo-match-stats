import React from 'react';
import { RoundsPlayersStats, Statuses } from '../exports';

interface EventsContextsType {
  statuses: Statuses[];
  roundsPlayersStats: RoundsPlayersStats;
}

const EventsContext = React.createContext<EventsContextsType>(
  {} as EventsContextsType
);

export default EventsContext;
