import React from "react";
import CanvasJSReact from "../assets/canvasjs.react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Graph(data) {
	
  let dataSet = Object.values(data)[0];
  
  const options = {
    animationEnabled: true,
    title: {
      text: "Valuation",
    },
    axisX: {
      title: "Exit Valuation (in USD)",
      prefix: "$",
      suffix: "M",
    },
    axisY: {
      title: "Price per share (in USD)",
      prefix: "$",
    },
	data: dataSet
  };
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default Graph;
