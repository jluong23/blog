import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes";
import { GlobalStyles } from "./GlobalStyles";

const SiteTheme = ({theme, setTheme, children}) => {
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setTheme(theme);
    }, []);

    return ( 
        <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
            <GlobalStyles/>
            {children}
        </ThemeProvider>
    )
}

export default SiteTheme;