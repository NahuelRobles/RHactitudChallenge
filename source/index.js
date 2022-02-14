/* eslint-disable react/display-name */
/** @format */

import React, { memo } from 'react';
import { StoreContext } from 'redux-react-hook';

import { store } from '~/store';
import { Screens } from '~/screens';

export const App = memo(() => {
  return (
    <StoreContext.Provider value={store}>
      <Screens />
    </StoreContext.Provider>
  );
});
