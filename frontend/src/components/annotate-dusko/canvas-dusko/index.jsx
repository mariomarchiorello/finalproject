import React, { useRef, useEffect, useState } from "react";
import { StyledCanvas } from "../style";
import html2canvas from "html2canvas";
import { useDispatch } from "react-redux";
import { patchImageAction } from "../../../store/actions/patchImage";

const CanvasTwo = (props) => {
  const dispatch = useDispatch();
  const {
    color,
    sample,
    sampleId,
    size,
    setSample,
    zooCount,
    phytoCount,
    setZooCount,
    setPhytoCount,
    setOnCanvas,
    setIsLoading,
  } = props;

  const [imageData, setImageData] = useState(null);
  const [flag, setFlag] = useState(false);
  let [history, setHistory] = useState([]);

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 0.75;
    canvas.style.width = `${window.innerWidth / 2}px`;
    canvas.style.height = `${window.innerHeight / 1.5}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    contextRef.current = context;
    if (sample) {
      const image = new Image();
      image.src = sample;
      image.onload = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width / 2, canvas.height / 1.5);
      };
    }
    if (imageData && flag) {
      dispatch(patchImageAction(zooCount, phytoCount, imageData, sampleId));
      setSample(imageData);
      setFlag(false);
    }
  }, [sample, imageData]);

  const annotate = ({ nativeEvent }) => {
    if (color !== "transparent") {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.strokeStyle = `${color}`;
      contextRef.current.fillStyle = `${color}`;
      contextRef.current.beginPath();
      contextRef.current.arc(offsetX, offsetY, size, 0, Math.PI * 2);
      contextRef.current.stroke();
      contextRef.current.closePath();
      contextRef.current.fill();
      color === "rgba(0, 230, 64, 0.5)"
        ? setZooCount((zoo) => (zoo += 1))
        : setPhytoCount((phyto) => (phyto += 1));
      let annotation = {
        offsetX,
        offsetY,
        color,
        size,
      };
      setHistory((currentState) => [...currentState, annotation]);
    }
  };

  const undo = () => {
    history.pop();
    console.log("from undo", history);
    if (sample) {
      // contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      const image = new Image();
      image.onload = () => {
        contextRef.current.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        contextRef.current.drawImage(
          image,
          0,
          0,
          canvasRef.current.width / 2,
          canvasRef.current.height / 1.5
        );
      };
      image.src = sample;
    }
    history.map((item) => {
      contextRef.current.strokeStyle = `${item.color}`;
      contextRef.current.fillStyle = `${item.color}`;
      contextRef.current.beginPath();
      contextRef.current.arc(
        item.offsetX,
        item.offsetY,
        item.size,
        0,
        Math.PI * 2
      );
      contextRef.current.stroke();
      contextRef.current.closePath();
      contextRef.current.fill();
    });
  };

  const save = () => {
    html2canvas(canvasRef.current, {
      allowTaint: true,
      useCORS: true,
      scale: 2,
      // foreignObjectRendering: true,
    }).then((canvas) => {
      setFlag(true);
      setIsLoading(true);
      setImageData(() => canvas.toDataURL("image/jpeg", 1));
    });
  };

  const circleHandlerLeave = () => {
    setOnCanvas(false);
  };

  const circleHandlerIn = () => {
    setOnCanvas(true);
  };

  return (
    <>
      <h1 style={{ color: "white" }}>{zooCount}</h1>
      <button onClick={() => undo()}>undo</button>
      <div>
        <StyledCanvas
          ref={canvasRef}
          onClick={annotate}
          onMouseMove={circleHandlerIn}
          onMouseLeave={circleHandlerLeave}
        />
      </div>
      <button onClick={() => save()} width="10px">
        save
      </button>
      <h1 style={{ color: "white" }}>{phytoCount}</h1>
      {/* <img ref={imgRef} height='60px' width='60px'/> */}
    </>
  );
};

export default CanvasTwo;
