/* eslint-disable @typescript-eslint/no-shadow */
import { parseCookies } from 'nookies';
import useSWR from 'swr';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || '';

export const useRequestSWR = <T>(url: string) => {
  const { AUTH_TOKEN } = parseCookies();

  const { data, error, mutate } = useSWR(
    `${baseURL + url}`,

    async url => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      });

      const data = await response.json();

      return data;
    },
    {
      shouldRetryOnError: true,
      errorRetryCount: 3,
      errorRetryInterval: 1000,
      revalidateOnMount: true,
      revalidateOnFocus: true,
      refreshInterval: 1000,
      revalidateOnReconnect: true,
    },
  );

  const loading = !data && !error;

  return { data: data as T, error, mutate, loading };
};
