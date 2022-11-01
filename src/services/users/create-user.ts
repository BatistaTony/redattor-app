import axios from 'axios';
import { parseCookies } from 'nookies';

interface CreateUserProps {
  fullname: string;
  password: string;
  email: string;
  phone: string;
  userType: string;
}

export const createUser = async (user: CreateUserProps) => {
  const { AUTH_TOKEN } = parseCookies();

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}users`,
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
  } catch (error: any) {
    const msg = error.response?.data?.message;

    if (msg === 'User already exists') {
      return error.response?.status;
    }
    return 'failed';
  }
};
