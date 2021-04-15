import React, { useContext, useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import html2canvas from "html2canvas";
import plankton1 from "../../assets/background-images/1.jpg";
import plankton2 from "../../assets/background-images/2.jpg";
import plankton3 from "../../assets/background-images/3.jpg";
import plankton4 from "../../assets/background-images/4.jpg";

const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [image, setImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [counter, setCounter] = useState(0);

  const arrImages = [plankton1, plankton2, plankton3, plankton4];
  const dispatch = useDispatch();
  const stateImages = useSelector((state) => state.annotationReducer);
  console.log(stateImages, "state images");

  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth / 1.5;
    canvas.height = window.innerHeight / 1.5;
    canvas.style.width = `${window.innerWidth / 3}px`;
    canvas.style.height = `${window.innerHeight / 3}px`;
    canvas.style.backgroundColor = "pink"

    const context = canvas.getContext("2d");

    context.scale(2, 2);
    context.strokeStyle = "#98FB98"; //{color}
    context.lineWidth = 5;
    contextRef.current = context;
  };

  const startDrawing = () => {
    contextRef.current.beginPath();
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.arc(offsetX, offsetY, 20, 0, Math.PI * 2);
    contextRef.current.stroke();
    contextRef.current.closePath();
    setIsDrawing(false);
    setCounter((counter) => (counter += 1));
    // console.log(contextRef.current, "context ref");
    // console.log(canvasRef.current, "canvas ref");

    // var fullQuality = canvasRef.current.toDataURL("png", 1.0);
    // console.log(fullQuality);
    // const test = canvasToImage(canvasRef.current, {
    //   name: "myImage",
    //   type: "jpg",
    //   quality: 0.7,
    // });

    // console.log(test, "test");
  };

  const clearCanvas = () => {
    setCounter((counter) => (counter = 0));
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // (image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  };

  const displayImage = () => {
    contextRef.current.drawImage(
      image,
      0,
      0,
      canvasRef.current.width / 2,
      canvasRef.current.height / 2
    );
    // setImageIndex((state) => (state += 1));
    // console.log(imageIndex);
  };

  const saveImage = () => {
    // dale
    window.scrollTo(0, 0);
    html2canvas(canvasRef.current, {
      allowTaint: true,
      useCORS: true,
      foreignObjectRendering: true,
    }).then(function (canvas) {
      console.log(canvas.toDataURL("image/jpeg", 0.9));
    });
  };
  const nextImage = () => {
    console.log(imageIndex);
    // setImageIndex((state) => state + 1);
    console.log(imageIndex);
    setImage(arrImages[imageIndex]);
    createImage();
    displayImage();
    dispatch({ type: "ANNOTATED_IMAGE", payload: counter, id: imageIndex });
    setCounter((counter) => (counter = 0));
  };

  const createImage = () => {
    const catImage = new Image();
    // catImage.crossOrigin = "anonymous";
    // catImage.src = "https://thiscatdoesnotexist.com/";
    catImage.src = arrImages[imageIndex];
    setImage(catImage);
    setImageIndex((state) => state + 1);
  };

  useEffect(() => {
    createImage();
  }, []);

  return (
    <>
      <div id="screenshot__div">
        <CanvasContext.Provider
          value={{
            canvasRef,
            contextRef,
            prepareCanvas,
            startDrawing,
            // finishDrawing,
            displayImage,
            clearCanvas,
            draw,
          }}
        >
          {children}
        </CanvasContext.Provider>
      </div>
      <div>Plankton: {counter}</div>
      <button onClick={nextImage}>Next Image</button>
      <button onClick={saveImage}>Submit</button>
    </>
  );
};

export const useCanvas = () => useContext(CanvasContext);
