import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/styles';

import App from './App';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

const Root = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <App />
        </MuiThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default Root;
