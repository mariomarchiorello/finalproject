import React, { useEffect } from "react";
import {
  Background,
  CenterContainer,
  Main,
} from "../../globalstyles/globalStyle";
import { useHistory } from "react-router-dom";
import { getUserMeAction } from "../../store/actions/getUserMeAction";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header";
import Footer from "../footer";
import { CanvasProvider } from "../canvasContainer/CanvasContext";
import CanvasContainer from "../canvasContainer";
import {
  getUserSample,
  getUserSampleAction,
} from "../../store/actions/getUserSampleSetAction";
import {
  CanvasTopSection,
  CenterContainerCanvas,
  ExampleContainer,
} from "./style";
import { ClearCanvasButton } from "../canvasContainer/ClearCanvasButton";
import { DrawImageButton } from "../canvasContainer/DrawImage";

const CanvasPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserMeAction(history));
  }, []);

  const userSelf = useSelector((state) => state.UserReducer.userMe);

  return (
    <>
      <Background>
        <Header />
        <Main>
          <CenterContainerCanvas>
            <CanvasTopSection>
              <ExampleContainer>hallo </ExampleContainer>
              <CanvasProvider>
                <CanvasContainer />
                <ClearCanvasButton />
                <DrawImageButton />
              </CanvasProvider>
            </CanvasTopSection>
            <ExampleContainer>welt </ExampleContainer>

            {/*<CanvasProvider>*/}
            {/*   */}
            {/*</CanvasProvider>*/}
          </CenterContainerCanvas>
        </Main>
        <Footer />
      </Background>
    </>
  );
};

export default CanvasPage;
