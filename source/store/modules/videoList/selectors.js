/** @format */

import { createSelector } from 'reselect';

export const videoSelector = createSelector(
  (state) => state.video,
  (video) => video,
);
