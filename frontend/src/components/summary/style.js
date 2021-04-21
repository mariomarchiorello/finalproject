import styled from 'styled-components'
import {GlobalLabel, CenterContainer, Main} from '../../globalstyles/globalStyle'
export const MainSummary = styled(Main)`
display: flex;
height: auto;
justify-items: center;
justify-items: center;  
`;


export const SummaryContainer = styled(CenterContainer)`
  height: 70vh;
  margin-top: 1%;
  
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  .top{
    display: flex;
  }
  .bottom{
    display: flex;
  }
`;

export const SummariesSectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:30vw;
  margin-bottom: 1rem;
  
`

export const InfoLabelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px;
  justify-content: flex-start;
  margin:0.5%;
  width: 50%;
`

export const LocalLabel = styled(GlobalLabel)`
  padding: 3px;
`;

export const ImagesElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  //padding: 20px;
  margin-top: 10px;
`

export const OuterImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin-bottom: 1%;
`;

export const PreviewImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  div{
    display: flex;
    flex-direction: column;
  }
  
`

export const PlanktonCountContainer = styled.div`
  display: flex;
flex-direction: column;
  //justify-content: center;
  //height: 5rem;
  width: 8rem;
`

export const ConfirmElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

`
