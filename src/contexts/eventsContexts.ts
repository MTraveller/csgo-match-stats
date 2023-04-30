import React from 'react';

export interface Statuses {
  map: string;
  round: string;
  roundScore: string;
  roundTime?: { minutes?: number; seconds?: number };
  ct?: string;
  tr?: string;
}

export interface RoundsPlayersStats {
  [round: number]: {
    [team: string]: {
      [player: string]: {
        damage: number;
        kills: number;
      };
    };
  };
}

interface EventsContextsType {
  statuses: Statuses[];
  roundsPlayersStats: RoundsPlayersStats;
}

const EventsContext = React.createContext<EventsContextsType>(
  {} as EventsContextsType
);

export default EventsContext;
