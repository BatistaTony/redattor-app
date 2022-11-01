import { postRequest } from '@services/http/setup';
import axios from 'axios';
import { parseCookies } from 'nookies';

interface CreateUserProps {
  id: string;
  fullname: string;
  password: string;
  email: string;
  phone: string;
  userType: string;
}

export const updateUser = async (user: CreateUserProps) => {
  const { AUTH_TOKEN } = parseCookies();

  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}users/${user.id}`,
      {
        ...user,
      },
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      },
    );

    if (response.status === 200 || response.status === 201) {
      return response;
    }
    return response.status;
  } catch (error: any) {
    return 'failed';
  }
};
