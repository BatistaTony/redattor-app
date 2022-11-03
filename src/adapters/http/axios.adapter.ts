import { getCookies } from '@utils/cookies';
import originalAxios, { AxiosInstance } from 'axios';
import { RedatorAdapterResponse, RedatorHttpClient } from './http.type';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

class AxiosAdapter implements RedatorHttpClient {
  constructor(private axiosDep: AxiosInstance) {}

  // AUTH_TOKEN = getCookies(['AUTH_TOKEN'])[0];

  get(endpoint: string, config: RedatorAdapterResponse = {}) {
    const AUTH_TOKEN = getCookies(['AUTH_TOKEN'])[0];
    return this.axiosDep.get(endpoint, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      ...config,
    }) as Promise<RedatorAdapterResponse>;
  }

  post(
    endpoint: string,
    data: Record<string, unknown>,
    config: RedatorAdapterResponse = {},
  ) {
    const AUTH_TOKEN = getCookies(['AUTH_TOKEN'])[0];
    return this.axiosDep.post(endpoint, data, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      ...config,
    }) as Promise<RedatorAdapterResponse>;
  }

  put(
    endpoint: string,
    data: Record<string, unknown>,
    config: RedatorAdapterResponse = {},
  ) {
    const AUTH_TOKEN = getCookies(['AUTH_TOKEN'])[0];
    return this.axiosDep.put(endpoint, data, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      ...config,
    }) as Promise<RedatorAdapterResponse>;
  }

  delete(endpoint: string, config: RedatorAdapterResponse = {}) {
    const AUTH_TOKEN = getCookies(['AUTH_TOKEN'])[0];
    return this.axiosDep.delete(endpoint, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      ...config,
    }) as Promise<RedatorAdapterResponse>;
  }

  patch(
    endpoint: string,
    data: Record<string, unknown>,
    config: RedatorAdapterResponse = {},
  ) {
    const AUTH_TOKEN = getCookies(['AUTH_TOKEN'])[0];
    return this.axiosDep.patch(endpoint, data, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      ...config,
    }) as Promise<RedatorAdapterResponse>;
  }
}

const axios = new AxiosAdapter(
  originalAxios.create({
    baseURL: BASE_URL,
  }),
);

export default axios;
