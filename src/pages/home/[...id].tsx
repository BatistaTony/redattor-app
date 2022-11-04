import { useRequestSWR } from '@adapters/http/swr.adpater';
import WithoutAuth from '@components/hoc/withoutAuth';
import Home from '@views/Home';
import { IUser } from 'typescript/user.type';

const HomePage = () => {
  useRequestSWR<IUser>('/users/me');

  return <Home />;
};

export default WithoutAuth(HomePage);
