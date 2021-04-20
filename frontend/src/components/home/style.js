import styled from 'styled-components';
import { Main, Background } from "../../globalstyles/globalStyle";
import backgroundimg from "../../assets/background-images/2.jpg"

export const QuoteWrapper = styled.div`
    width: 27%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-end;
    font-style: italic;
    color: ${props => props.theme.labelcolor};
    margin-top: 5rem;
    margin-left: 3rem;
    font-size: 2rem;
    `;

export const MainHome = styled(Main)`
    justify-content: start;
    align-items: flex-start;
`;

export const Buttonholder = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 80%;
    height: 100%;
`;

export const HomeBackground = styled(Background)`
    background-image: url(${backgroundimg});
    // background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
`;