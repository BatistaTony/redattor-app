import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import { getCookies } from '@utils/cookies';

const WithoutAuth = <T extends object>(Component: FC<T>) => {
  const AuthComponent: FC<T> = props => {
    const route = useRouter();
    const [loading, setLoading] = useState(true);
    const AUTH_TOKEN = getCookies(['AUTH_TOKEN'])[0];

    useEffect(() => {
      if (!AUTH_TOKEN) {
        route.push('/sign-in');
      } else setLoading(false);
    }, [AUTH_TOKEN]);

    if (loading)
      return (
        <div
          style={{ width: '100%', height: '100vh', backgroundColor: '#fff' }}
        />
      );
    return <Component {...props} />;
  };

  return AuthComponent;
};

export default WithoutAuth;
