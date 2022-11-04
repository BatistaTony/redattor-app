import { http } from '@adapters/index';
import { GetUserInfoResponse } from './types';

export const getUserInfo = async <T>(): Promise<GetUserInfoResponse> => {
  const response: GetUserInfoResponse = {
    status: 0,
    isLoading: true,
    data: {} as T,
  };

  try {
    const res = await http.get('users/me');

    response.status = res?.status as number;
    response.isLoading = false;
    response.data = res?.data as T;
  } catch (error: unknown) {
    const errorResponse = (error as unknown as any).response;

    response.status = errorResponse?.status as number;
    response.isLoading = false;
  }

  return {
    status: response.status,
    isLoading: response.isLoading,
    data: response.data as unknown as T,
  };
};
