import styled from 'styled-components'
import { CenterContainer } from '../../../globalstyles/globalStyle';





export const ProfileCenterContainer = styled(CenterContainer)`
background-color: green;
`;

export const Info = styled.div`
    display: flex;
    flex-direction:row;



    section{
        width:20vw;
        color:#ffffff;
        div{
            margin:6%;
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