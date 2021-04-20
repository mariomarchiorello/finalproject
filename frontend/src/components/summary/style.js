import styled from 'styled-components'
import {GlobalLabel, CenterContainer } from '../../globalstyles/globalStyle'


export const SummaryContainer = styled(CenterContainer)`
  height: 80vh;
`

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 0;
`

export const SummariesSectionsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width:60vw;
  margin-top: 7px;
`

export const InfoLabelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px;
`

export const LocalLabel = styled(GlobalLabel)`
  padding: 3px;
`

export const ImagesElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 45%;
  padding: 20px;
  margin-top: 10px;
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
  flex-wrap: wrap;
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
