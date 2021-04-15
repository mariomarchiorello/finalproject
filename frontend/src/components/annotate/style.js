import styled from 'styled-components'
import imageOne from '../../assets/background-images/1.jpg'
import imageTwo from '../../assets/background-images/2.jpg'
import imageThree from '../../assets/background-images/3.jpg'
import imageFour from '../../assets/background-images/4.jpg'
import imageFive from '../../assets/background-images/5.jpg'
import imageSix from '../../assets/background-images/6.jpg'


export const ZooChoices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 320px;
    width: 110px;
`

export const PhytoChoices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 320px;
    width: 110px;
`;

export const DefaultChoice = styled.div`
    height: 100px;
    width: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    border: solid 3px transparent;
`;

export const ZooChoiceOne = styled(DefaultChoice)`
background-image: url(${imageOne});
`;

export const ZooChoiceTwo = styled(DefaultChoice)`
background-image: url(${imageTwo});
`;

export const ZooChoiceThree = styled(DefaultChoice)`
background-image: url(${imageThree});
`;

export const PhytoChoiceOne = styled(DefaultChoice)`
background-image: url(${imageFour});
`;

export const PhytoChoiceTwo = styled(DefaultChoice)`
background-image: url(${imageFive});
`;

export const PhytoChoiceThree = styled(DefaultChoice)`
background-image: url(${imageSix});
`;