import React, { useContext, useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import html2canvas from "html2canvas";
import { getUserSampleAction } from "../../store/actions/getUserSampleSetAction";

const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [counter, setCounter] = useState(0);

  const dispatch = useDispatch();
  const annotatedData = useSelector((state) => state.annotationReducer);
  console.log(annotatedData, "state images");

  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth / 1.5;
    canvas.height = window.innerHeight / 1.5;
    canvas.style.width = `${window.innerWidth / 3}px`;
    canvas.style.height = `${window.innerHeight / 3}px`;
    canvas.style.backgroundColor = "pink";

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
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.arc(offsetX, offsetY, 20, 0, Math.PI * 2);
    contextRef.current.stroke();
    contextRef.current.closePath();
    setIsDrawing(false);
    setCounter((counter) => (counter += 1));
  };

  const clearCanvas = () => {
    setCounter((counter) => (counter = 0));
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const displayImage = () => {
    const newImage = new Image();
    // newImage.crossorigin = "anonymous";
    // newImage.crossOrigin = "anonymous";
    newImage.src =
      annotatedData.currentSample.images[imageIndex].original_image;
    console.log("image before drawww", newImage);
    contextRef.current.drawImage(
      newImage,
      0,
      0,
      canvasRef.current.width / 2,
      canvasRef.current.height / 2
    );
  };

  const saveImage = () => {
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
    createImage();
    displayImage();
    dispatch({ type: "ANNOTATED_IMAGE", payload: counter, id: imageIndex });
    setCounter((counter) => (counter = 0));
  };

  const createImage = async () => {
    const newImage = new Image();
    // newImage.crossorigin = "anonymous";
    // newImage.crossOrigin = "anonymous";
    setImageIndex((state) => state + 1);
  };

  useEffect(() => {
    function fetchSample() {
      dispatch(getUserSampleAction());
    }
    fetchSample();
  }, []);

  return (
    <>
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
          counter,
        }}
      >
        {children}
      </CanvasContext.Provider>
      {/*<div>Plankton: {counter}</div>*/}

      <button onClick={nextImage}>Next Image</button>
      {/*<button onClick={saveImage}>Submit</button>*/}
    </>
  );
};

export const useCanvas = () => useContext(CanvasContext);
