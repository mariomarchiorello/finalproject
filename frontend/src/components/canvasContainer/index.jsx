import React from "react";
import { Canvas } from "./Canvas";
import { ClearCanvasButton } from "./ClearCanvasButton";
import { DrawImageButton } from "./DrawImage";

function CanvasContainer() {
  return (
    <>
      <Canvas />
      <DrawImageButton />
      <ClearCanvasButton />
    </>
  );
}

export default CanvasContainer;
