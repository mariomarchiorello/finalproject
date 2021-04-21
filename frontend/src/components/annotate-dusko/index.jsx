import React, { useState, useEffect } from "react";
import {
  ToolsContainer,
  Tool,
  References,
  CanvasContainer,
  SampleContainer,
  SampleImg,
} from "./style";
import Header from "../header";
import { Background } from "../../globalstyles/globalStyle";
import CanvasTwo from "./canvas-dusko/";
import { useDispatch, useSelector } from "react-redux";
import { getUserSampleAction } from "../../store/actions/getUserSampleSetAction";
import zoo1 from "../../assets/background-images/1.jpg";
import zoo2 from "../../assets/background-images/2.jpg";
import zoo3 from "../../assets/background-images/3.jpg";
import zoo4 from "../../assets/background-images/4.jpg";
import phyto1 from "../../assets/background-images/5.jpg";
import phyto2 from "../../assets/background-images/6.jpg";
import phyto3 from "../../assets/background-images/7.jpg";
import phyto4 from "../../assets/background-images/8.jpg";
import { GlobalStyle } from "../../globalstyles/globalStyle";
import { useHistory } from "react-router-dom";
import Cursor from "react-cursor-follow";
import { SpinnerContainer } from "../spinner/style";

function AnnotateTwo() {
  const dispatch = useDispatch();
  const [color, setColor] = useState("rgba(0, 230, 64, 0.5)");
  const [reference, setReference] = useState("null");
  const [sample, setSample] = useState("null");
  const [sampleId, setSampleId] = useState("null");
  const [size, setSize] = useState(30);
  const [zooCount, setZooCount] = useState(0);
  const [phytoCount, setPhytoCount] = useState(0);
  const [onCanvas, setOnCanvas] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const annotatedData = useSelector((state) => state.annotationReducer);
  const { images } = annotatedData.currentSample;
  const [submitEnabled, setSubmitEnabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    dispatch(getUserSampleAction());
    setIsLoading(false);
    if (images) {
      let count = 0;
      images.map((img) => {
        img.annotated_image ? (count += 1) : (count = 0);
      });
      count === images.length
        ? setSubmitEnabled(true)
        : setSubmitEnabled(false);
    }
  }, [annotatedData.annotatedImages]);

  const updateCount = (index) => {
    setZooCount(images[index].zooplankton ? images[index].zooplankton : 0);
    setPhytoCount(
      images[index].phytoplankton ? images[index].phytoplankton : 0
    );
  };

  return (
    <Background>
      <Header />
      {onCanvas ? (
        <Cursor color={color} duration={0.8} size={size * 2} />
      ) : null}
      <SampleContainer>
        {images
          ? images.map((img, index) => {
              return isLoading ? (
                <SpinnerContainer></SpinnerContainer>
              ) : (
                <SampleImg
                  onClick={(e) => {
                    setSampleId(e.target.id);
                    setSample(e.target.src);
                    updateCount(index);
                  }}
                  src={
                    img.annotated_image
                      ? img.annotated_image
                      : img.original_image
                  }
                  key={img.id}
                  id={img.id}
                  alt="shh"
                />
              );
            })
          : null}
      </SampleContainer>
      <ToolsContainer>
        {/* <Tool>undo</Tool> */}
        <i
          class="fas fa-circle"
          style={{
            color,
            fontSize: "1.2em",
            marginRight: "3px",
            marginTop: "3.5px",
          }}
        ></i>
        <Tool
          onClick={() => setSize((currentSize) => currentSize + 20)}
          disabled={size > 100 ? true : false}
        >
          +{/* <i class="far fa-circle" style={{ fontSize: "1.2em" }}></i> */}
        </Tool>
        <i
          class="fas fa-circle"
          style={{
            color,
            fontSize: "0.6em",
            marginRight: "3px",
            marginTop: "10px",
            marginLeft: "10px",
          }}
        ></i>
        <Tool
          onClick={() => setSize((currentSize) => currentSize - 20)}
          disabled={size < 11 ? true : false}
        >
          -{/* <i class="far fa-circle" style={{ fontSize: "0.6em" }}></i> */}
        </Tool>
      </ToolsContainer>
      <CanvasContainer>
        <References
          onClick={() => {
            setColor("rgba(0, 230, 64, 0.5)");
            setReference(true);
          }}
          style={{
            border: `4px solid ${
              color == "rgba(0, 230, 64, 0.5)" && reference
                ? color
                : "transparent"
            }`,
          }}
        >
          <img src={zoo1} height="100px" width="100px" alt="shh" />
          <img src={zoo2} height="100px" width="100px" alt="shh" />
          <img src={zoo3} height="100px" width="100px" alt="shh" />
          <img src={zoo4} height="100px" width="100px" alt="shh" />
        </References>
        <CanvasTwo
          color={color}
          sample={sample}
          size={size}
          sampleId={sampleId}
          setSample={setSample}
          zooCount={zooCount}
          phytoCount={phytoCount}
          setZooCount={setZooCount}
          setPhytoCount={setPhytoCount}
          setOnCanvas={setOnCanvas}
          setIsLoading={setIsLoading}
        />
        <References
          onClick={() => {
            setColor("rgba(244, 208, 63, 0.5)");
            setReference(false);
          }}
          style={{
            border: `4px solid ${
              color == "rgba(244, 208, 63, 0.5)" && !reference
                ? color
                : "transparent"
            }`,
          }}
        >
          <img src={phyto1} height="100px" width="100px" alt="shh" />
          <img src={phyto2} height="100px" width="100px" alt="shh" />
          <img src={phyto3} height="100px" width="100px" alt="shh" />
          <img src={phyto4} height="100px" width="100px" alt="shh" />
        </References>
      </CanvasContainer>
      <button
        style={{ color: "white" }}
        onClick={() => history.push("/summary")}
        disabled={submitEnabled}
      >
        submit
      </button>
    </Background>
  );
}

export default AnnotateTwo;
