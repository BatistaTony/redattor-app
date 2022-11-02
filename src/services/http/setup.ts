import {
  RedatorHttpClientMethod,
  RedatorHttpClientMethodWithData,
} from '@adapters/http/http.type';

import { http } from '@adapters/index';

interface MakeRequestPayload {
  endpoint: string;
  data?: Record<string, any>;
  config?: Record<string, any>;
}

interface HttpClientResponse {
  data: any;
  status: number;
}

const getTokenFromCookie = async (token: string) => token;

export const makeRequest =
  (fetcher: RedatorHttpClientMethod | RedatorHttpClientMethodWithData) =>
  async ({ endpoint, data, config }: MakeRequestPayload) => {
    const token = getTokenFromCookie('AUTH_TOKEN');
    const realConfig = {
      ...config,
      ...(token && { authorization: `Bearer ${token}` }),
    };

    const result = data
      ? ((await fetcher(
          endpoint,
          data,
          realConfig,
        )) as unknown as HttpClientResponse)
      : ((await fetcher(
          endpoint,
          realConfig,
        )) as unknown as HttpClientResponse);

    return {
      data: result.data,
      status: result.status,
      isError: result.status <= 199 && result.status >= 299,
    };
  };

export const getRequest = makeRequest(http.get);
export const postRequest = makeRequest(http.post);
export const putRequest = makeRequest(http.put);
export const deleteRequest = makeRequest(http.delete);
export const patchRequest = makeRequest(http.patch);
