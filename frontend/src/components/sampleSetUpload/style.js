import styled from 'styled-components'
import { BlueButton, CenterContainer } from "../../globalstyles/globalStyle"


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
  height: 100px;
`

export const CheckboxFieldsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60vw;
`

export const StandardText = styled.div`
  color: ${props => props.theme.labelcolor };
  font-size: 18px;
`

export const SmallText = styled.div`
  color: ${props => props.theme.labelcolor };
  font-size: 14px;
`

export const FileUpload = styled(BlueButton)`
  width: 8rem;
  height: 1.8rem;
  color: ${props => props.theme.transbuttoncolor };
  font-size: 14px;
  margin-bottom: 3px;
  padding: 0px;
  `;

export const UploadContainer = styled(CenterContainer)`
  width: auto;
  padding: 3% 3% 3%;
`;