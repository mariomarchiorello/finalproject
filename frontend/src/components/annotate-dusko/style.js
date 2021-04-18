import styled from 'styled-components'


export const Header = styled.div`
    height: 120px;
    background-color:grey;
`

export const ToolsContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-evenly;
    width: 500px;
    margin-left: 500px;
`

export const Tool = styled.button`
    width: 50px;
    height: 25px;
    color: white;
    background-color: blue;
    :disabled{
        background-color: grey;
    }
`

export const StyledCanvas = styled.canvas`
    border: 2px solid blue;
    display: block;
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
    height: 100px;
    width: 450px;
`