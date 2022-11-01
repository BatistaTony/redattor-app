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

    if (res.status === 200) {
      // Some Noficiation
    }
  } catch (error: unknown) {
    const errorResponse = (error as unknown as any).response;

    response.status = errorResponse?.status as number;
    response.isLoading = false;

    if (errorResponse?.status === 403) {
      // return 'Utilizador ou senha incorretos, verifique as credencias';
    }
    if (errorResponse?.status === 400) {
      // return 'Formato do nome do utilizador invalido [ nome.nome+(numero) ]';
    }
    // return 'Ocorreu algum erro, tente novamente';
  }

  return {
    status: response.status,
    isLoading: response.isLoading,
    data: response.data as unknown as T,
  };
};
