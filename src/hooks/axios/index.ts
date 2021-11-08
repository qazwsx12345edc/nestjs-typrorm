import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '',
  headers: {
    ContentType: 'application/json;charset=UTF-8;',
  },
});

const axiosResponse = ({ method, path, data, config }) => {
  method = method.toLowerCase(); //统一为小写
  if (method == 'post') {
    return axiosInstance.post(path, data, { ...config });
  } else if (method == 'get') {
    return axiosInstance.get(path, {
      params: data,
      ...config,
    });
  } else {
    console.error('unknown method' + method);
    return false;
  }
};

export const get = ({ path, data = null }) => {
  return axiosResponse({
    path: path,
    method: 'get',
    data,
    config: {
      headers: {},
      timeout: 5000,
    },
  });
};

export const post = ({ path, data = null }) => {
  return axiosResponse({
    path: path,
    method: 'post',
    data,
    config: {
      headers: {
        ContentType: 'application/json;charset=UTF-8;',
      },
      timeout: 5000,
    },
  });
};
