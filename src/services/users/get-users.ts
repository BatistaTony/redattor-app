// import { getRequest } from '@services/http/setup';

import { parseCookies } from 'nookies';

interface getUsersProps {
  name?: string;
  status?: string;
  userType?: string;
  page?: number;
}

export const getUsers = async ({
  name,
  page,
  status,
  userType,
}: getUsersProps) => {
  const { AUTH_TOKEN } = parseCookies();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users?limit=10${
      page ? `&page=${page + 1}` : ''
    }
    ${userType ? `&userType=${userType}` : ''}
        ${status ? `&status=${status}` : ''}

    ${name ? `&name=${name}` : ''}
    `,
    {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    },
  );

  return response;
};
