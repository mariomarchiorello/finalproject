import styled from 'styled-components'
import { CenterContainer } from '../../../globalstyles/globalStyle';





export const ProfileCenterContainer = styled(CenterContainer)`
background-color: green;
height:auto;
display:flex;
flex-direction:column;

`;

export const Info = styled.div`
    display: flex;
    flex-direction:row;
    section{
        width:20vw;
        color:#ffffff;
        div{
            margin:0%;
        }
        .type{
            font-size:16px;
            margin-bottom:-4%;
        }
        .value{
            font-size:18px;
        }
    }
`;

export const Edit = styled.div`
    /* background-color:red; */
    display: flex;
    flex-direction:row;
    section{
        width:20vw;
        color:#ffffff;
        display:flex;
        flex-direction:column;
        
    }
    

`;