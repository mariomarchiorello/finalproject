import { useEffect, useState }  from 'react'


export const useDarkMode = () => {

    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        if (theme === 'dark') {
            window.localStorage.setItem('theme', 'light')
            setTheme('light');
        } else {
            window.localStorage.setItem('theme', 'dark')
            setTheme('dark');
          }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme);
    }, []);

    
    return [theme, toggleTheme]
  };