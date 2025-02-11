import { useEffect, useState } from 'react';
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
import GeneralAuthenticationBarForm from '../GeneralAuthenticationBarForm/GeneralAuthenticationBarForm';
import {
  signInElements,
  logInElements,
  logOutElements,
} from '../../constants/auth';
import { PrivateRoute } from '../GeneralPrivateRoute/GeneralPrivateRoute';

import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../redux/teachers/operations';

function App() {
  // Modal window ------
  const [isOpen, setIsOpen] = useState(false);
  const [btn, setBtn] = useState('');

  const onOpen = currentbtn => {
    setIsOpen(true);
    setBtn(currentbtn);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const getForm = btn => {
    if (btn === 'Registration') {
      return signInElements;
    }
    if (btn === 'LogIn') {
      return logInElements;
    }
    if (btn === 'LogOut') {
      return logOutElements;
    }
  };
  const logBtn = getForm(btn);


  return (
    <>
      <header>
        <GeneralNavigation />
 
        <GeneralAuthenticationBar onOpen={onOpen} isOpen={isOpen} />
      </header>

      <main>
        <Suspense fallback={<CommonBarLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route
              path="/Favourites"
              element={
                <PrivateRoute component={<FavouritesPage />} redirectTo="/" />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <footer></footer>

      <CommonModalWindow isOpen={isOpen}  onClose={onClose}>
        <GeneralAuthenticationBarForm
          elements={logBtn}
          onClose={() => {
            onClose();
          }}
        />
      </CommonModalWindow>
    </>
  );
}

export default App;
