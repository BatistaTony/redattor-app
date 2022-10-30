export type RedatorAdapterResponse = Record<string, unknown>;

export type RedatorHttpClientMethod = (
  endpoint: string,
  config?: Record<string, any>,
) => Promise<RedatorAdapterResponse>;

export type RedatorHttpClientMethodWithData = (
  endpoint: string,
  data: Record<string, any>,
  config?: Record<string, any>,
) => Promise<RedatorAdapterResponse>;

export interface RedatorHttpClient {
  get: RedatorHttpClientMethod;
  post: RedatorHttpClientMethodWithData;
  put: RedatorHttpClientMethodWithData;
  delete: RedatorHttpClientMethod;
  patch: RedatorHttpClientMethodWithData;
}
