import styled from 'styled-components'
import { TransparentButton } from "../../globalstyles/globalStyle"


export const Header = styled.div`
    height: 120px;
    background-color:grey;
`

export const ToolsContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
    margin-left: 500px;
`

export const Tool = styled(TransparentButton)`
    // color: ${props => props.theme.transbuttoncolor };
    color: black;
`

export const StyledCanvas = styled.canvas`
    /* border: 2px solid red; */
    overflow: hidden;
`

export const References = styled.div`
    flex-direction: column;
    width: 200px;
    height: 600px;
    overflow-x: hidden;
    overflow-y: scroll;
`

export const CanvasContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const SampleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 50%;
    width: 20%;
    margin-top: 4rem;
`