/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import Login from '../Login';
import SignUp from '../SignUp';
// import './styles.css';

export const App = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <SignUp />
    </div>
  );
};
export default App;
