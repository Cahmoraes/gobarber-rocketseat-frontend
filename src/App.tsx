import React from 'react';

import GlobalStyle from './styles/global'
import Signin from './pages/SignIn'
// import SignUp from './pages/SignUp'

import { AuthProvider } from './hooks/AuthContext'
import ToastContainer from './components/ToastContainer';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Signin />
      </AuthProvider>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
