import React from 'react';
import { TopPlayersType } from '../exports';

const TopPlayersContext = React.createContext<TopPlayersType>(
  {} as TopPlayersType
);

export default TopPlayersContext;
