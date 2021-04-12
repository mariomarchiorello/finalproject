import styled from 'styled-components'



export const SelectionContainer = styled.div`
    height:7vh;
    width:70vw;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;


    .underscored{
        /* max-width:8vw; */
        color:white;
        text-decoration:none;
        border-bottom: transparent;
    }

    @media (max-width: 1620px) {
    width:50vw;
    padding:2%;
    }
`;

