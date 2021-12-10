import './App.css';
import { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Counter from './components/counter/Counter';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector(state => state.auth.isAuth)
  return (
    <Fragment>
      <Navbar />
      { !isAuth && <Login />}
      { isAuth && <Counter /> }
    </Fragment>
  );
}

export default App;
