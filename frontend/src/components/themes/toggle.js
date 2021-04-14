import React from 'react'


const Toggle = ({theme, toggleTheme}) => {

    return (
      <button theme={theme} onClick={toggleTheme}>
          Toggle Dark / Light Mode
      </button>
    );
  };
  
export default Toggle;