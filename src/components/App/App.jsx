import React from 'react';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { footerLinks } from '../../config/links';


const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer links={footerLinks}/>
    </div>
  );
}

export default App;
