import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../themes/index";
import { lightTheme } from "../themes/index";


const ThemeSwitchProvider = ({children}) => {
    const ThemeEnabled = useSelector((state) => state.UserReducer.ThemeEnabled);

    return  (
        <ThemeProvider theme={ThemeEnabled ? darkTheme : lightTheme}>
            {children}
        </ThemeProvider>
    );
};

export default ThemeSwitchProvider;