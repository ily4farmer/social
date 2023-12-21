import axios, {
  AxiosRequestTransformer,
  AxiosResponseTransformer,
  CreateAxiosDefaults,
} from 'axios';
import camelcaseKeys from 'camelcase-keys';

import { removeEmptyFields } from '~utils';

const removeEmptyFieldsRequest: AxiosRequestTransformer = (data) => {
  if (data) {
    const transformData = removeEmptyFields(data);
    return transformData;
  }

  return data;
};

const requestToString: AxiosRequestTransformer = (data) => JSON.stringify(data);

const responseToCamelCase: AxiosRequestTransformer = (data, headers) => {
  if (data && headers['content-type']?.includes('application/json')) {
    data = camelcaseKeys(JSON.parse(data), { deep: true });
  }
  return data;
};

export const commonRequestTransformers: AxiosRequestTransformer[] = [
  removeEmptyFieldsRequest,
  requestToString,
];
export const commonResponseTransformers: AxiosResponseTransformer[] = [responseToCamelCase];

const commonApiConfig: CreateAxiosDefaults = {
  transformRequest: commonRequestTransformers,
  transformResponse: commonResponseTransformers,
};

export const api = axios.create({
  ...commonApiConfig,
  baseURL: 'http://localhost:5700/api',
  withCredentials: true,
});
