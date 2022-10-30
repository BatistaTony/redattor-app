import { http } from '@adapters/index';
import { setCookies } from '@utils/cookies';
import { SignInDataType } from './auth.type';

export const signIn = async (data: SignInDataType): Promise<string> => {
  try {
    const result = await http.post('auth/signin', {
      username: data.userName,
      password: data.password,
    });

    if (result.status) {
      const resultData = result.data as unknown as any;

      setCookies('AUTH_TOKEN', resultData.access_token);
      setCookies('REFRESH_TOKEN', resultData.refresh_token);

      return 'success';
    }

    return 'failed';
  } catch (error: unknown) {
    const errorResponse = (error as unknown as any).response;

    if (errorResponse.status === 403) {
      return 'Utilizador não encontrado, verifique as credencias';
    }
    if (errorResponse.status === 400) {
      return 'Formato do nome do utilizador invalido [ nome.nome+(numero) ]';
    }
    return 'Ocorreu algum erro, tente novamente';
  }
};
