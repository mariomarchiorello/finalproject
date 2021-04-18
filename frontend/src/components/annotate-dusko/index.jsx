import React, {useState, useEffect} from 'react'
import {ToolsContainer, Tool, References, CanvasContainer, Header, SampleContainer} from './style'
import CanvasTwo from './canvas-dusko/'
import {useDispatch, useSelector} from 'react-redux'
import { getUserSampleAction } from "../../store/actions/getUserSampleSetAction";
import zoo1 from '../../assets/background-images/1.jpg';
import zoo2 from '../../assets/background-images/2.jpg';
import zoo3 from '../../assets/background-images/3.jpg';
import zoo4 from '../../assets/background-images/4.jpg';
import phyto1 from '../../assets/background-images/5.jpg';
import phyto2 from '../../assets/background-images/6.jpg';
import phyto3 from '../../assets/background-images/7.jpg';
import phyto4 from '../../assets/background-images/8.jpg';


function AnnotateTwo() {
    const dispatch = useDispatch()
    const [color, setColor] = useState('transparent')
    const [reference, setReference] = useState('null')
    const [sample, setSample] = useState('null')
    const [size, setSize] = useState(30)
    const annotatedData = useSelector(state => state.annotationReducer)
    const {images} = annotatedData.currentSample

    useEffect(() => {
          dispatch(getUserSampleAction());
          console.log(annotatedData)
    }, []);

    return (
        <>
        <Header><h1>HEADER</h1></Header>
        <SampleContainer>
            {images ? images.map((img, index) => {
               return <img height='100px' 
                           width='100px' 
                           onClick={e => setSample(e.target.src)}
                           src={img.original_image}
                           key={index}/> 
            }) : null}
        </SampleContainer>
        <ToolsContainer>
            <Tool>undo</Tool>
            <Tool onClick={() => setSize(currentSize => currentSize + 20)} disabled={(size > 100) ? true : false}>+</Tool>
            <Tool onClick={() => setSize(currentSize => currentSize - 20)} disabled={(size < 11) ? true : false}>-</Tool>
            <Tool />
        </ToolsContainer>
        <CanvasContainer>
            <References onClick={() => {setColor('rgba(0, 230, 64, 0.5)')
                                        setReference(true)}}
                        style={{border: `7px solid ${(color == 'rgba(0, 230, 64, 0.5)' && reference) ? color : 'transparent'}` }}>
                <img src={zoo1} height='200px' width='200px'/>
                <img src={zoo2} height='200px' width='200px'/>
                <img src={zoo3} height='200px' width='200px'/>
                <img src={zoo4} height='200px' width='200px'/>
            </References>
            <CanvasTwo color={color} sample={sample} size={size}/>
            <References onClick={() => {setColor('rgba(244, 208, 63, 0.5)')
                                        setReference(false)}}
                        style={{border: `7px solid ${(color == 'rgba(244, 208, 63, 0.5)' && !reference) ? color : 'transparent'}` }}>
                <img src={phyto1} height='200px' width='200px'/>
                <img src={phyto2} height='200px' width='200px'/>
                <img src={phyto3} height='200px' width='200px'/>
                <img src={phyto4} height='200px' width='200px'/>
            </References>
        </CanvasContainer>
        </>
    )
}

export default AnnotateTwo