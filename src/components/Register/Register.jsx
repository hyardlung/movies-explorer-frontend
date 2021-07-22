import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';
import './Register.css';

const Register = ({onRegister}) => {

  return (
      <section className="register">
        <div className="register__container">
          <Logo className={'register__logo'}/>
          <h1 className="register__title">Добро пожаловать!</h1>

          <AuthForm onRegister={onRegister}
                    authTextsParams={{
                      buttonCaption: 'Зарегистрироваться',
                      question: 'Уже зарегистрированы?',
                      linkCaption: 'Войти',
                      path: '/signin'
                    }}
          >
          </AuthForm>
        </div>
      </section>
  );
}

export default Register;
