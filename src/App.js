import logo from './logo.svg';
import './App.css';
import AppRoutes from './AppRoutes';
import useAuth from "./UseAuth";
import { useContext } from 'react';
function App() {
  const { loading } = useContext(useAuth);
  if(loading)
  {
    return (
      <>Loading...  </>
    )
  }
  else
  {
    return (
      <AppRoutes/>
    )
  }
}

export default App;
