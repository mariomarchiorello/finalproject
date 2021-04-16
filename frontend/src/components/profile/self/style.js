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
        color:${props => props.theme.labelcolor };
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
        color:${props => props.theme.labelcolor };
        display:flex;
        flex-direction:column;        
    }
  p{
    color:${props => props.theme.labelcolor };
    margin-top: 3%;
    margin-right: 3%;
    margin-left: -3%;
    
  }
`;

export const ModeSelect = styled.select`
  font-size: 18px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 12rem;
  height: 2.5rem;
  outline: transparent;
`;

export const EditPasswordButton = styled(TransparentButton)`
border-radius: 3px;
color: ${props => props.theme.labelcolor };
width: auto;
height: 1.5rem;
cursor:pointer;
padding: 0 20px 0 20px;
  margin: 3%;
  
:active{
  outline:transparent;
}
`;