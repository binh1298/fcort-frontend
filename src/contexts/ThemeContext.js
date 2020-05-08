import React from 'react';
import theme from '../utils/theme';

const ThemeContext = React.createContext(theme);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
