import React from "react";
import CanvasJSReact from "../assets/canvasjs.react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Graph(data) {
	console.log(Object.values(data)[0]);
	Object.keys(data)
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
    //   interval: 10,
    },
    axisY: {
      title: "Price per share (in USD)",
      prefix: "$",
    },
	data: dataSet
	// data:  [
	// 	{
	// 	  yValueFormatString: "$#,###",
	// 	  xValueFormatString: "$#,###",
	// 	  type: "line",
	// 	  name: "Common",
	// 	  showInLegend: true,
	// 	  markerSize: 0,
	// 	  dataPoints: [{x: 3000000, y: 14.29695}],
	// 	},
	// 	{
	// 	  yValueFormatString: "$#,###",
	// 	  xValueFormatString: "$#,###",
	// 	  type: "line",
	// 	  name: "Series A",
	// 	  showInLegend: true,
	// 	  markerSize: 0,
	// 	  dataPoints: [
	// 		{x: 37000000, y: 11.29695},
	// 	    {x: 4000000, y: 11.29695}
	// 	]
	// 	},
	// 	{
	// 	  yValueFormatString: "$#,###",
	// 	  xValueFormatString: "$#,###",
	// 	  type: "line",
	// 	  name: "Series A1",
	// 	  showInLegend: true,
	// 	  markerSize: 0,
	// 	  dataPoints:  [
	// 		{x: 37000000, y: 11.29695},
	// 	    {x: 4000000, y: 11.29695}
	// 	],
	// 	},
	// 	{
	// 	  yValueFormatString: "$#,###",
	// 	  xValueFormatString: "$#,###",
	// 	  type: "line",
	// 	  name: "New Round",
	// 	  showInLegend: true,
	// 	  markerSize: 0,
	// 	  dataPoints:  [
	// 		{x: 37000000, y: 11.29695},
	// 	    {x: 4000000, y: 11.29695}
	// 	],
	// 	},
	//   ]
  };
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default Graph;
