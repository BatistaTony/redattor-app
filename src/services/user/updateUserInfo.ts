import { http } from '@adapters/index';
import { UpdateUserInfoProps, UpdateUserInfoResponse } from './types';

export const updateUserInfo = async (
  data: UpdateUserInfoProps,
): Promise<UpdateUserInfoResponse> => {
  const response: UpdateUserInfoResponse = {
    status: 0,
    isLoading: true,
  };

  try {
    const res = await http.post('auth/signin', data as any);

    response.status = res.status as number;
    response.isLoading = false;

    if (res.status === 200) {
      // Some Noficiation
    }
  } catch (error: unknown) {
    const errorResponse = (error as unknown as any).response;

    response.status = errorResponse.status as number;
    response.isLoading = false;

    if (errorResponse.status === 403) {
      // return 'Utilizador ou senha incorretos, verifique as credencias';
    }
    if (errorResponse.status === 400) {
      // return 'Formato do nome do utilizador invalido [ nome.nome+(numero) ]';
    }
    // return 'Ocorreu algum erro, tente novamente';
  }

  return response;
};
