import './App.css';
import { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Counter from './components/counter/Counter';

function App() {
  return (
   <Fragment>
     <Navbar/>
     <Login/>
     <Counter/>
   </Fragment>
  );
}

export default App;
