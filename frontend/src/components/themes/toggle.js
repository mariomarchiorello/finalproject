import React, { useState }  from 'react'
import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
`;

const Toggle = () => {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
          }
        }
    
    return (
      <ToggleContainer onClick={toggleTheme}>
          Toggle Dark / Light Mode
      </ToggleContainer>
    );
  };
  
export default Toggle;