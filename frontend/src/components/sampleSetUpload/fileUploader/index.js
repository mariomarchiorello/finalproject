import React from 'react';
import styled from 'styled-components';
import { TransparentButton } from "../../../globalstyles"

const FileUploader = () => {

    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();

    };
    return (
      <>
        <TransparentButton onClick={handleClick}>
          Upload a file
        </TransparentButton>
        <input 
            type="file" 
            style={{display:'none'}} 
            ref={hiddenFileInput}
            onChange={(e)=>setImages(e.target.files)}
            /> 
      </>
    );
  };
  export default FileUploader;
  