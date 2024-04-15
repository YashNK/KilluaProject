import { useState, useEffect, useRef } from "react";
import CardMedia from "@mui/material/CardMedia";
import { React } from 'react';
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";

export default function StreamComponent() {
  return (
    <div>
      <TransformWrapper disablePadding>
        <TransformComponent wrapperStyle={{width: '100%', height: '100%'}} contentStyle={{width: '100%', height: '100%'}}>
          <CardMedia
            component="img"
            image="http://127.0.0.1:8000/stream"
            alt="Camera 3" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
