import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css';

const Login = ({onLogin}) => {

  return (
      <section className="login">
        <div className="login__container">
          <Logo className={'login__logo'}/>
          <h1 className="login__title">Рады видеть!</h1>

          <AuthForm onLogin={onLogin}
                    authTextsParams={{
                      buttonCaption: 'Войти',
                      question: 'Ещё не зарегистрированы?',
                      linkCaption: 'Регистрация',
                      path: '/signup'
                    }}
          />
        </div>
      </section>
  );
}

export default Login;
