import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import { getCookies } from '@utils/cookies';

const WithoutAuth = <T extends object>(Component: FC<T>) => {
  const AuthComponent: FC<T> = props => {
    const route = useRouter();
    const [loading, setLoading] = useState(true);
    // const AUTH_TOKEN = getCookies(['AUTH_TOKEN'])[0];
    const AUTH_TOKEN = 'skjdbksjdbksjbd';

    useEffect(() => {
      if (!AUTH_TOKEN) {
        route.push('/sign-in');
      } else setLoading(false);
    }, [AUTH_TOKEN]);

    if (loading) return <div>ooo</div>;
    return <Component {...props} />;
  };

  return AuthComponent;
};

export default WithoutAuth;
