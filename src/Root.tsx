import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import App from './App';

const theme = createMuiTheme();

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Rubik;   
  }
`

const Root = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <App />
        </MuiThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default Root;