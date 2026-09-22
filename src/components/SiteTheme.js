import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes";
import { GlobalStyles } from "./GlobalStyles";

const SiteTheme = ({theme, children}) => {
    return (
        <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
            <GlobalStyles/>
            {children}
        </ThemeProvider>
    )
}

export default SiteTheme;