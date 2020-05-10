import React, {useContext} from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import './styles.scss';

export const App = () => {
  const theme = useContext(ThemeContext);
  const styles = {
    color: theme.palette.primary.main,
  };
  return (
    <div>
      <i class="fa fa-check fa-lg"></i>
      <h1 className="example-header" style={styles}>
        Hello FCort
      </h1>
      <i class="fa fa-check fa-lg"></i>
    </div>
  );
};

export default App;
