import { useContext,createContext } from "react";

export const ThemeContext = createContext({
    ThemeMode:"light",
    LightTheme:()=>{},
    DarkTheme:()=>{}
})

export const ThemeProvider = ThemeContext.Provider;

export const useTheme =()=>{
    return useContext(ThemeContext)
}