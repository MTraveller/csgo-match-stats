import React from 'react';

export interface TopPlayersType {
  topPlayers: (string | number)[][];
}

const TopPlayersContext = React.createContext<TopPlayersType>(
  {} as TopPlayersType
);

export default TopPlayersContext;
