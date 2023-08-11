import { useOnDraw } from "./Hooks";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GiArtilleryShell } from "react-icons/gi";
import "./navbar.css";
import {BiEraser} from "react-icons/bi"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {penStyles} from "./canvasPens"
import axios from "axios";

const Canvas = (width, height) => {

  const [canvasWidth, setCanvasWidth] = useState(800);
  const [canvasHeight, setCanvasHeight] = useState(600);

  const printCanvas = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(
      <html>
                const canvas = document.querySelector(".my-canvas");
                </html>
  );

    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 1000);
};



  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const [drawingMode, setDrawingMode] = useState("pen");
  const [penSize, setPenSize] = useState(5);
  const [eraserSize, setEraserSize] = useState(10);
  const { onMouseDown, setCanvasRef } = useOnDraw(onDraw, drawingMode);
  const [canvasData, setCanvasData] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [penColor, setPenColor] = useState("#000000"); // Default color is black

  function onDraw(ctx, point, prevPoint) {
    if (drawingMode === "pen") {
      drawLine(prevPoint, point, ctx, penColor, penSize);
    } else if (drawingMode === "eraser") {
      erasePoint(point, ctx, eraserSize);
    } else if (drawingMode === "clear"){
      erasePoint1(ctx, 6000);
    }
  }

  const captureRef = useRef(null);

  const handleCapture = () => {
    if (captureRef.current) {
      html2canvas(captureRef.current)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
          pdf.save('screen_capture.pdf');
        })
        .catch((error) => {
          console.error('Error capturing screen:', error);
        });
    }
  };

  


  function drawLine(start, end, ctx, color, width) {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  function erasePoint(point, ctx, radius) {
    ctx.clearRect(point.x - radius / 2, point.y - radius / 2, radius, radius);
  }

  function erasePoint1(ctx, radius) {
    ctx.clearRect(0, 0, radius, radius);
  }

  function handlePenClick() {
    setDrawingMode("pen");
  }

  function handleEraserClick() {
    setDrawingMode("eraser");
  }

  function handleClearClick() {
    setDrawingMode("clear");
  }

  function handlePenSizeIncrement() {
    setPenSize((prevSize) => prevSize + 1);
  }

  function handlePenSizeDecrement() {
    setPenSize((prevSize) => Math.max(prevSize - 1, 1));
  }

  function handleEraserSizeIncrement() {
    setEraserSize((prevSize) => prevSize + 1);
  }

  function handleEraserSizeDecrement() {
    setEraserSize((prevSize) => Math.max(prevSize - 1, 1));
  }

  function handleMouseMove(e) {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  return (
    <>
      <div className="tools">
        <button onClick={handleGoBack} className="button123 tool-button">
          Back
        </button>
        <button className="tool-button" onClick={handleCapture} >Save</button>
        <input
          type="color"
          value={penColor}
          onChange={(e) => setPenColor(e.target.value)}
          className="tool-button color-picker"
        />

        <button
          onClick={handlePenClick}
          className={`tool-button ${drawingMode === "pen" ? "active" : ""}`}
          style={{ color: penColor }}
        >
          <span role="img" aria-label="Pen">
            <GiArtilleryShell/>
          </span>


        </button>
        <button onClick={handleEraserClick} className="tool-button">
          <span role="img" aria-label="Eraser">
            <BiEraser/>
          </span>
        </button>

        <button onClick={handleClearClick} className="tool-button">
          <span role="img" aria-label="Clear">
            Clear
          </span>
        </button>

        <div className="size-buttons">
          <span className="size-indicator">Pen Size: {penSize} </span>
          <button onClick={handlePenSizeIncrement} className="tool-button">
            <span role="img" aria-label="Increase Pen Size">
              ➕
            </span>
          </button>
          <button onClick={handlePenSizeDecrement} className="tool-button">
            <span role="img" aria-label="Decrease Pen Size">
              ➖
            </span>
          </button>
          {/* <br/> */}
          <span className="size-indicator">Eraser Size: {eraserSize} </span>
          <button onClick={handleEraserSizeIncrement} className="tool-button">
            <span role="img" aria-label="Increase Eraser Size">
              ➕
            </span>
          </button>
          <button onClick={handleEraserSizeDecrement} className="tool-button">
            <span role="img" aria-label="Decrease Eraser Size">
              ➖
            </span>
          </button>
        </div>

        <div
          className="mouse-pointer"
          style={{
            left: mousePosition.x - 5,
            top: mousePosition.y - 5,
            display: drawingMode === "pen" ? "block" : "none",
            backgroundColor: penColor,
          }}
        />
      </div>
      <div className="tools1" ref={captureRef}>
      <div data-aos="flip-up">
        <canvas
          className="my-canvas"
          align-items="right"
          id="myCanvas"
          width="1000"
          height="522"
          ref={setCanvasRef}
          onMouseDown={onMouseDown}
          onMouseMove={handleMouseMove}
          style={canvasStyle}
        />
        </div>
      </div>
    </>
  );
};
export default Canvas;

const canvasStyle = {
  border: "5px solid #012A4A",
  // margin: "200px"
};
