import styled from 'styled-components'
import {CenterContainer, TransparentButton} from '../../../globalstyles/globalStyle';





export const ProfileCenterContainer = styled(CenterContainer)`
height:auto;
display:flex;
flex-direction:column;
  flex-grow: 2;

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
    display: flex;
    flex-direction:row;
  z-index: 5;
    section{
        width:20vw;
        color:#ffffff;
        display:flex;
        flex-direction:column;        
    }
  p{
    color:white;
    margin-top: 3%;
    margin-right: 3%;
    margin-left: -3%;
    
  }
`;

export const RadioButton = styled.div`
    div{
      margin-top: 5%;
      label{
        font-size: 14px;
        margin-right: 3%;
      }
    }    
`;

export const EditPasswordButton = styled(TransparentButton)`
border-radius: 3px;
color: #FFFFFF;
width: auto;
height: 1.5rem;
cursor:pointer;
padding: 0 20px 0 20px;
  margin: 3%;
  
:active{
  outline:transparent;
}
`;