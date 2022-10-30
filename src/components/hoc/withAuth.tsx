/* eslint-disable import/no-unresolved */
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { getCookies, removeCookie } from '@utils/cookies';

const WithAuth = <T extends object>(Component: FC<T>) => {
  const AuthComponent: FC<T> = (props: T) => {
    const route = useRouter();
    const [loading, setLoading] = useState(false);
    const [verified, setVerified] = useState(false);

    const verifying = () => {
      setLoading(true);
      const authToken = getCookies(['AUTH_TOKEN'])[0];

      if (!authToken) {
        route.replace('/sign-in');
      } else {
        // in case of verifying the token making api call
        const data = authToken;

        if (data) {
          setVerified(true);
        } else {
          removeCookie('AUTH_TOKEN');
          route.replace('/sign-in');
        }
      }

      setLoading(false);
    };

    useEffect(() => {
      verifying();
    }, []);

    if (loading) return <h1>Laoding...</h1>;

    return <Component {...props} />;
  };

  return AuthComponent;
};

export default WithAuth;
