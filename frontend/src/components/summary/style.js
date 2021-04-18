import styled from 'styled-components'
import {GlobalLabel} from '../../globalstyles/globalStyle'


export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 0;
`

export const SummariesSectionsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width:60vw;
`

export const InfoLabelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`

export const LocalLabel = styled(GlobalLabel)`
  padding: 5px;
`

export const ImagesElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 45%;
  padding: 20px;
  margin-top: 20px;
`

export const OuterImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  //align-content: flex-start;
  //align-items: flex-start;
  //justify-content: flex-start;
  width: 60vw;
`

export const PreviewImagesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 15px;
`

export const PlanktonCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 200px
`

export const ConfirmElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 20px;
`
