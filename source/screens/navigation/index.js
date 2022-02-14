/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/** @format */

import React, { memo, useEffect } from 'react';

import { useDispatch, useMappedState } from 'redux-react-hook';
import { isEmpty } from 'lodash';

import { Spinner } from '~/components/Spinner/Spinner';
import { signInSelector, loadSignIn } from '~/store/modules';

import { Home } from '../pages';

import { triggerAxiosInterceptors } from './triggerAxiosInterceptors';

export const RootNavigation = memo(() => {
  const settings = useMappedState(signInSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSignIn())
  }, [dispatch]);

  useEffect(() => {
    if (!settings.isLoading && !isEmpty(settings.data)) {
      triggerAxiosInterceptors();
    }
  }, [ settings, triggerAxiosInterceptors ]);

  if (settings.isLoading) { 
    return <Spinner />
  }

  return <Home />;
});
