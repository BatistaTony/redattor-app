import WithoutAuth from '@components/hoc/withoutAuth';
import Home from '@views/Home';

const HomePage = () => <Home />;

export default WithoutAuth(HomePage);
