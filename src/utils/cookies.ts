import { parseCookies, setCookie, destroyCookie } from 'nookies';

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
  destroyCookie(null, key);
};

function setCookiesFunction(
  key: string,
  value: string,
  expireDays: any,
  expireHours: any,
  expireMinutes: any,
  expireSeconds: any,
) {
  const expireDate = new Date();
  if (expireDays) {
    expireDate.setDate(expireDate.getDate() + expireDays);
  }
  if (expireHours) {
    expireDate.setHours(expireDate.getHours() + expireHours);
  }
  if (expireMinutes) {
    expireDate.setMinutes(expireDate.getMinutes() + expireMinutes);
  }
  if (expireSeconds) {
    expireDate.setSeconds(expireDate.getSeconds() + expireSeconds);
  }
  document.cookie =
    `${key}=${escape(value)};domain=${window.location.hostname};path=/` +
    `;expires=${expireDate.toUTCString()}`;
}

export const deleteCookie = (name: string) => {
  setCookiesFunction(name, '', null, null, null, 0.1);
};
