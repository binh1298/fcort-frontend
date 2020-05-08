import React, {useContext} from 'react';
import ThemeContext from '../../contexts/ThemeContext';

export const App = () => {
  const theme = useContext(ThemeContext);
  const styles = {
    color: theme.palette.primary.main,
  };
  return <h1 style={styles}>Hello FCort</h1>;
};

export default App;
