import styled from 'styled-components';
import { Main, Background } from "../../globalstyles/globalStyle";
import bg from "../../assets/background-images/valdiviella-insignis.jpg"

export const QuoteWrapper = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-end;
    font-style: italic;
    color: #FFFFFF;
    margin-top: 5rem;
    margin-left: 3rem;
    `;

export const MainHome = styled(Main)`
    justify-content: start;
    align-items: flex-start;
`;

export const Buttonholder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const HomeBackground = styled(Background)`
    background-image: url(${bg});
    `;