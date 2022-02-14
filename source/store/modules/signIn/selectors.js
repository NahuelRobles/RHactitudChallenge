/** @format */

import { createSelector } from 'reselect';

export const signInSelector = createSelector(
  (state) => state.signIn,
  (signIn) => signIn,
);
