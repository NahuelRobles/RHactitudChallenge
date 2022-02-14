/** @format */

import axios from 'axios';
import Config from 'react-native-config';

import { storeSync } from '~/utils';
import { TOKEN } from '~/constants';

export const triggerAxiosInterceptors = () => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response?.status !== 400) {
        return Promise.reject(error);
      }
      try {
        const data = {
          sub : "ToolboxMobileTest"
        };
        const response = await axios({
          url: `v1/mobile/auth`,
          method: 'post',
          baseURL: Config.BASE_URL,
          data: data
        });

        storeSync(TOKEN, response?.data?.token);

      } catch (err) {
        console.log({ err });
      }
    },
  );
};
