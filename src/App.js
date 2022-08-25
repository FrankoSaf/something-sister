import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from './contexts/UserContext';
// Routes and Components
import Navigation from './routes/navigation/navigation.component.jsx';
import Home from './routes/home/home.component';
import Products from './routes/products/products.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';
import ProductsUser from './routes/products-user/products-user.component.jsx';
function App() {
  const { isUserLoggedIn } = useContext(userContext);
  return (
    <div className='container'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Authentication />} />
        {isUserLoggedIn && (
          <>
            <Route path='/products/user' element={<ProductsUser />} />
            <Route path='/products' element={<Products />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
