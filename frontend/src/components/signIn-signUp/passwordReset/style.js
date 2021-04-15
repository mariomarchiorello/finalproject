import styled from 'styled-components';
import { BlueButton, GlobalLabel } from "../../../globalstyles/globalStyle"

export const VerificationMsg = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    color: ${props => props.theme.labelcolor };
    font-size: 24px;

    p {
        font-size: 18px; 
    }
`;
export const VerInputContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
`;

export const VerLabel = styled(GlobalLabel)`
    margin-top: 0.7rem;
`;

export const VerButton = styled(BlueButton)`
    margin-top: 2rem;
    outline:transparent;

`;