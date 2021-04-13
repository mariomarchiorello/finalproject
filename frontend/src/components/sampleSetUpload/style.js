import styled from 'styled-components'
import { CenterContainer } from '../../globalstyles/globalStyle'



export const NewSampleSetContainer = styled.form`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-weight: bold;
`

export const NewCenterContainer = styled(CenterContainer)`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-weight: bold;
`

export const OuterInputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:60vw;
`

export const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  //padding-left: 15px;
  //padding-right: 15px;
`

export const AddImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  //align-content: flex-start;
  //align-items: flex-start;
  //justify-content: flex-start;
  width:60vw;
`

export const ImagesContainer = styled.div`
  display: flex;
`

export const ImagePreview = styled.img`
  height: 125px;
`