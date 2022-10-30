import originalAxios, { AxiosInstance } from 'axios';
import { RedatorHttpClient, RedatorAdapterResponse } from './http.type';

const BASE_URL = process.env.NEXT_PUBLIC_UTENTE_BASE_URL;

class AxiosAdapter implements RedatorHttpClient {
  constructor(private axiosDep: AxiosInstance) {}

  get(endpoint: string, config: RedatorAdapterResponse = {}) {
    return this.axiosDep.get(
      endpoint,
      config,
    ) as Promise<RedatorAdapterResponse>;
  }

  post(
    endpoint: string,
    data: Record<string, unknown>,
    config: RedatorAdapterResponse = {},
  ) {
    return this.axiosDep.post(
      endpoint,
      data,
      config,
    ) as Promise<RedatorAdapterResponse>;
  }

  put(
    endpoint: string,
    data: Record<string, unknown>,
    config: RedatorAdapterResponse = {},
  ) {
    return this.axiosDep.put(
      endpoint,
      data,
      config,
    ) as Promise<RedatorAdapterResponse>;
  }

  delete(endpoint: string, config: RedatorAdapterResponse = {}) {
    return this.axiosDep.delete(
      endpoint,
      config,
    ) as Promise<RedatorAdapterResponse>;
  }

  patch(
    endpoint: string,
    data: Record<string, unknown>,
    config: RedatorAdapterResponse = {},
  ) {
    return this.axiosDep.patch(
      endpoint,
      data,
      config,
    ) as Promise<RedatorAdapterResponse>;
  }
}

const axios = new AxiosAdapter(
  originalAxios.create({
    baseURL: BASE_URL,
  }),
);

export default axios;
