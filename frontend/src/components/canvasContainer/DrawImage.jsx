import React from "react";
import { useCanvas } from "./CanvasContext";

export const DrawImageButton = () => {
  const { displayImage } = useCanvas();

  return <button onClick={displayImage}>Image</button>;
};
