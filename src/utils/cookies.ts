import { parseCookies, setCookie } from 'nookies';

export const setCookies = (key: string, value: string) => {
  setCookie(null, key, value, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  });
};

export const getCookies = (values: string[]) =>
  values.map((item: string) => {
    const cookies = parseCookies();

    return cookies[item];
  });

export const removeCookie = (key: string) => {
  setCookie(null, key, '');
};
