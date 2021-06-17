import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

const Login = () => {
  return (
      <section className="login">
        <div className="login__container">
          <AuthForm />
        </div>
      </section>
  );
}

export default Login;
