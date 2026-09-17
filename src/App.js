import React from "react";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <Main />
      </>
    </ThemeProvider>
  );
}

export default App;
