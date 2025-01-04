import { useSelector } from 'react-redux';
import CommonButton from '../CommonButton/CommonButton';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
// import css from "./GeneralAuthenticationBar.module.css";

const GeneralAuthenticationBar = ({ onOpen }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const handleBtn = event => {
    const btn = event.target.textContent;
    onOpen(btn);
  };

  return (
    <div>
      {isLoggedIn && <CommonButton onHandle={handleBtn}>LogOut</CommonButton>}

      {!isLoggedIn && <CommonButton onHandle={handleBtn}>LogIn</CommonButton>}

      {!isLoggedIn && (
        <CommonButton onHandle={handleBtn}>Registration</CommonButton>
      )}
    </div>
  );
};
export default GeneralAuthenticationBar;
