import { http } from '@adapters/index';

export const logout = async (): Promise<{
  status: number;
  isLoading: boolean;
}> => {
  const response: { status: number; isLoading: boolean } = {
    status: 0,
    isLoading: true,
  };

  try {
    const res = await http.post('auth/logout', {});

    // if (res.status === 200) {
    //   document.cookie =
    //     'REFRESH_TOKEN= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    //   document.cookie = 'AUTH_TOKEN= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';

    //   removeCookie('REFRESH_TOKEN');
    //   removeCookie('AUTH_TOKEN');
    // }

    response.status = res?.status as number;
    response.isLoading = false;
  } catch (error: unknown) {
    const errorResponse = (error as unknown as any).response;

    response.status = errorResponse?.status as number;
    response.isLoading = false;
  }

  return response;
};
