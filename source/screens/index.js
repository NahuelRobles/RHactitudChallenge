/* eslint-disable react/display-name */
/** @format */

import React, { memo } from 'react';

import { NetworkStatusWrapper } from './components';
import { RootNavigation } from './navigation';

export const Screens = memo(() => (
  <NetworkStatusWrapper>
    <RootNavigation />
  </NetworkStatusWrapper>
));
