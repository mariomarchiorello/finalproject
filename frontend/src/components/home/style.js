import styled from 'styled-components';
import { Main } from "../../globalstyles/globalStyle";

export const QuoteWrapper = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-end;
    font-style: italic;
    color: ${props => props.theme.labelcolor};
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