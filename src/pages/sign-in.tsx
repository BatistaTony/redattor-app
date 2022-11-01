import WithAuth from '@components/hoc/withAuth';
import SignInView from '@views/Sign-in-view/sign-in-view';

const SignInPage = () => <SignInView />;

export default WithAuth(SignInPage);
