/** @format */

import { ACTION } from '~/constants';

export function loadSignIn() {
  return { type: ACTION.SIGNIN.LOAD.REQUEST };
}
