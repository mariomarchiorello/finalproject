import React, { useState, useEffect } from "react";
import {
  ToolsContainer,
  Tool,
  CanvasContainer,
  SampleContainer,
  SampleImg,
  ToolsAndImages,
  TopContainer,
  SubmitButton,
  SubmitWrapper,
} from "./style";
import Header from "../header";
import { Background } from "../../globalstyles/globalStyle";
import CanvasTwo from "./canvas-dusko/";
import { useDispatch, useSelector } from "react-redux";
import { getUserSampleAction } from "../../store/actions/getUserSampleSetAction";
import { GlobalStyle } from "../../globalstyles/globalStyle";
import { useHistory } from "react-router-dom";
import Cursor from "react-cursor-follow";
import { SpinnerContainer } from "../spinner/style";

function AnnotateTwo() {
  const dispatch = useDispatch();
  const [color, setColor] = useState("transparent");
  const [reference, setReference] = useState("null");
  const [sample, setSample] = useState("null");
  const [sampleId, setSampleId] = useState("null");
  const [size, setSize] = useState(30);
  const [zooCount, setZooCount] = useState(0);
  const [phytoCount, setPhytoCount] = useState(0);
  const [onCanvas, setOnCanvas] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(0)
  const [style, setStyle] = useState('0.5')
  const [idx, setIdx] = useState(null)

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
        <Cursor color={color} duration={0.5} size={size * 2}/>
      ) : null}
      <TopContainer>
        <ToolsAndImages>
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
                        setIsVisible(1)
                        setIdx(index)
                      }}
                      src={
                        img.annotated_image
                          ? img.annotated_image
                          : img.original_image
                      }
                      key={img.id}
                      id={img.id}
                      alt="shh"
                      style={idx === index ? {opacity: '1'} : {opacity: '0.5'}}
                    />
                  );
                })
              : null}
          </SampleContainer>
          <ToolsContainer style={{opacity: isVisible}}>
            {/* <Tool>undo</Tool> */}
            {/* <i
          class="fas fa-circle"
          style={{
            color,
            fontSize: "1.2em",
            marginRight: "3px",
            marginTop: "3.5px",
          }}
        ></i> */}
            <Tool
              onClick={() => setSize((currentSize) => currentSize + 20)}
              disabled={size > 100 ? true : false}
            >
              +
              {/* <i class="far fa-circle" style={{ fontSize: "1.2em" }}></i> */}
            </Tool>
            {/* <i
          class="fas fa-circle"
          style={{
            color,
            fontSize: "0.6em",
            marginRight: "3px",
            marginTop: "10px",
            marginLeft: "10px",
          }}
        ></i> */}
            <Tool
              onClick={() => setSize((currentSize) => currentSize - 20)}
              disabled={size < 11 ? true : false}
            >
              -
              {/* <i class="far fa-circle" style={{ fontSize: "0.6em" }}></i> */}
            </Tool>
          </ToolsContainer>
        </ToolsAndImages>
      </TopContainer>
      <CanvasContainer>
        <CanvasTwo
          color={color}
          setColor={setColor}
          reference={reference}
          setReference={setReference}
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
          isVisible={isVisible}
        />
      </CanvasContainer>
      <SubmitWrapper>
        <SubmitButton
          style={{ color: "white", opacity: isVisible }}
          onClick={() => history.push("/summary")}
          disabled={submitEnabled ? "disabled" : null}
        >
          Submit
        </SubmitButton>
      </SubmitWrapper>
    </Background>
  );
}

export default AnnotateTwo;
