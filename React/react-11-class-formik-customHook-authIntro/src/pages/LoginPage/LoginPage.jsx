import { useHistory } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';

function LoginPage() {
  const history = useHistory();
  function handleSuccessLogin() {
    //TODO: redirect to about
    history.replace('/about');
  }

  return (
    <div>
      <h1>Login here</h1>
      <LoginForm onSuccessLogin={handleSuccessLogin} />
    </div>
  );
}

export default LoginPage;
