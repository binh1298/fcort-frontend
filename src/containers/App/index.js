/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import Login from '../Login';
import './styles.css';

export const App = () => {
	const theme = useContext(ThemeContext);
	const styles = {
		color: theme.palette.background.light,
	};
	return (
		<div> 
			{/* <h1 className="example-header" style={styles}>
        Hello FCort
      </h1> */}
			< Login color = {
				theme.palette.background.dark
			}
			/>
		</div>
	);
};

export default App;
