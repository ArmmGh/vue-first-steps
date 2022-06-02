import { setLoading } from '@/store/mutations/mutation-types';
import axios from 'axios';
import store from '@/store';

export const interceptRequest = () => {
  axios.interceptors.request.use(
    (config) => {
      store.commit(setLoading, true);
      return config;
    },
    (err) => {
      store.commit(setLoading, false);
      return Promise.reject(err);
    }
  );
};

export const interceptResponse = () => {
  axios.interceptors.response.use(
    (response) => {
      store.commit(setLoading, false);
      return response;
    },
    (err) => {
      store.commit(setLoading, false);
      return Promise.reject(err);
    }
  );
};
