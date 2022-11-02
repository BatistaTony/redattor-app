import { http } from '@adapters/index';
import { UpdateUserInfoResponse } from './types';

export const updatePassword = async (data: {
  currentPassword: string;
  newPassword: string;
}): Promise<UpdateUserInfoResponse> => {
  const response: UpdateUserInfoResponse = {
    status: 0,
    isLoading: true,
  };

  try {
    const res = await http.post(`users/change-admin-password`, data as any);

    response.status = res.status as number;
    response.isLoading = false;
  } catch (error: unknown) {
    const errorResponse = (error as unknown as any).response;

    response.status = errorResponse.status as number;
    response.isLoading = false;
  }

  return response;
};
