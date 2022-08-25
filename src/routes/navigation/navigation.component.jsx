import { Fragment, useContext } from 'react';
import { userContext } from '../../contexts/UserContext';
// Import svg logo image
import { ReactComponent as Logo } from '../../assets/logo.svg';
// Import styled components
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  const { logOutHandler, isUserLoggedIn } = useContext(userContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink to='/products'>All Products</NavLink>
          {isUserLoggedIn && (
            <NavLink to='/products/user'>Your Product Dashboard</NavLink>
          )}
          {/* TODO: currentUser present > display SIGN OUT, else SIGN IN... click on SIGN OUT sign out user */}
          {isUserLoggedIn && (
            <NavLink to='/' onClick={logOutHandler}>
              SIGN OUT
            </NavLink>
          )}
          <NavLink to='/auth'>SIGN IN</NavLink>
        </NavLinks>
      </NavigationContainer>
    </Fragment>
  );
};

export default Navigation;
