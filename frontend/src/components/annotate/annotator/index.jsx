import React, { useRef } from 'react';
import * as markerjs2 from 'markerjs2';
import choiceImage from '../../../assets/background-images/plankton.jpg'

const Annotator = ({selected}) => {
    let imgRef = useRef();

    const showMarkerArea = (selection=selected) => {
        if (imgRef.current !== null) {
          // create a marker.js MarkerArea
          const markerArea = new markerjs2.MarkerArea(imgRef.current);
          // attach an event handler to assign annotated image back to our image element
          markerArea.addRenderEventListener((dataUrl, state) => {
            if (imgRef.current) {
              imgRef.current.src = dataUrl;
              // console.log(dataUrl) // this is actually base64 encoded annotated image
            }
            let markerState = state
            console.log(markerState)
          });
          // launch marker.js
          if (selection > 0 & selection < 4) {
            markerArea.availableMarkerTypes = ['FrameMarker'];
            markerArea.settings.defaultColor = 'green';
          }else if(selection < 3 & selection < 7) {
            markerArea.availableMarkerTypes = ['FrameMarker'];
            markerArea.settings.defaultColor = 'red'
          }
          markerArea.show()
        }
      }

    if(selected > 0 & selected < 7) {showMarkerArea()}

    return (
       <img ref={imgRef} 
            src={choiceImage} 
            alt="sample" 
            style={{ maxWidth: '60%' }} 
            // onClick={() => showMarkerArea()} // have to bind this to choices somehow
      />
    )
    
    }


export default Annotator

