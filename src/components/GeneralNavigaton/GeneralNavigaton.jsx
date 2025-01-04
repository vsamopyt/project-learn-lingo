import { NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './GeneralNavigation.module.css';

const Navigation = () => {
  const classLink = ({ isActive }) => {
    return clsx(
      css.generalNavigationLink,
      isActive && css.generalNavigationLinkActive
    );
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <nav>
        <Link to="/" aria-label="logo">
          LearnLingo
        </Link>
        <NavLink to="/" className={classLink}>
          Home
        </NavLink>
        <NavLink to="/teachers" className={classLink}>
          Teachers
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/favourites" className={classLink}>
            Favourites
          </NavLink>
        )}
      </nav>
    </>
  );
};
export default Navigation;
