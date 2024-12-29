import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const TeachersPage = lazy(() =>
  import('../../pages/TeachersPage/TeachersPage')
);
const FavouritesPage = lazy(() =>
  import('../../pages/FavouritesPage/FavouritesPage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);
import CommonBarLoader from '../CommonBarLoader/CommonBarLoader';
import GeneralNavigation from '../GeneralNavigaton/GeneralNavigaton';
import GeneralAuthenticationBar from '../GeneralAuthenticationBar/GeneralAuthenticationBar';
import CommonModalWindow from '../CommonModalWindow/CommonModalWindow';
import GeneralAuthenticationBarLogInForm from '../GeneralAuthenticationBarLogInForm/GeneralAuthenticationBarLogInForm';
import GeneralAuthenticationBarSignInForm from '../GeneralAuthenticationBarSignInForm/GeneralAuthenticationBarSignInForm';
import GeneralAuthenticationBarForm from '../GeneralAuthenticationBarForm/GeneralAuthenticationBarForm';
import { signInElements, logInElements, logOutElements } from '../../constants/auth';
// import reactLogo from './assets/react.svg'
// import './App.css'

function App() {
  // Modal window ------
  const [isOpen, setIsOpen] = useState({
    logIn: false,
    signIn: false,
    logOut: false,
  });
  const onOpen = (isOpen, key) => {
    setIsOpen({ ...isOpen, [key]: true });
  };
  const onClose = (isOpen, key) => {
    setIsOpen({ ...isOpen, [key]: false });
  };

  return (
    <>
      <header>
        <GeneralNavigation />
        {/* <GeneralAuthenticationBar /> */}
        <GeneralAuthenticationBar onOpen={onOpen} isOpen={isOpen} />
      </header>

      <main>
        <Suspense fallback={<CommonBarLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/Favourites" element={<FavouritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <footer></footer>

      <CommonModalWindow
        isOpen={isOpen.logIn}
        onClose={() => {
          onClose(isOpen, 'logIn');
        }}
      >
        <GeneralAuthenticationBarForm elements={logInElements} />
      </CommonModalWindow>

      <CommonModalWindow
        isOpen={isOpen.signIn}
        onClose={() => {
          onClose(isOpen, 'signIn');
        }}
      >
        <GeneralAuthenticationBarForm elements={signInElements} />
      </CommonModalWindow>

      <CommonModalWindow
        isOpen={isOpen.logOut}
        onClose={() => {
          onClose(isOpen, 'logOut');
        }}
      >
        <GeneralAuthenticationBarForm elements={logOutElements} />
      </CommonModalWindow>
    </>
  );
}

export default App;
