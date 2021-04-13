import styled from 'styled-components'


export const TitleWrapper = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.labelcolor };
    font-size: 24px;
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
  padding: 10px;
  height: 125px;
`

export const CheckboxFieldsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60vw;
`

export const StandardText = styled.div`
  color: white;
  font-size: 18px;
`

export const SmallText = styled.div`
  color: white;
  font-size: 14px;
`

export const InputField = styled.input`
    padding: 0.7em 1em;
    width: 20em;
    margin-top: 1em;
    margin-bottom: 1.5em;
    font-size: 1rem;
    font-weight: normal;
    border: 1.5px solid #e5e5e5;
    border-radius: 5px;
`
