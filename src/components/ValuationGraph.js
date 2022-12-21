import { useState, useEffect } from "react";
import jsonData from "./../data.json";
import Graph from "./Graph";

function ValuationGraph() {
  const [graphData, setGraphData] = useState([]);

  const setValue = (data) => {
    // eslint-disable-next-line
    let commonObject = {},seriesAObject = {},seriesA1Object = {},newRoundObject = {};

    const common =
      data.valuations &&
      data.valuations.length &&
      data.valuations
        .filter((currentValue) => currentValue.class === "Common")
        .map((currentValue) => {
          return (commonObject = {
            x: currentValue.valuationPrice,
            y: currentValue.pricePerShare,
          });
        });

    const seriesA =
      data.valuations &&
      data.valuations.length &&
      data.valuations
        .filter((currentValue) => currentValue.class === "Series A Preferred")
        .map((currentValue) => {
          return (seriesAObject = {
            x: currentValue.valuationPrice,
            y: currentValue.pricePerShare,
          });
        });

    const seriesA1 =
      data.valuations &&
      data.valuations.length &&
      data.valuations
        .filter((currentValue) => currentValue.class === "Series A1 Preferred")
        .map((currentValue) => {
          return (seriesA1Object = {
            x: currentValue.valuationPrice,
            y: currentValue.pricePerShare,
          });
        });

    const newRound =
      data.valuations &&
      data.valuations.length &&
      data.valuations
        .filter((currentValue) => currentValue.class === "New Round")
        .map((currentValue) => {
          return (newRoundObject = {
            x: currentValue.valuationPrice,
            y: currentValue.pricePerShare,
          });
        });

    let dataSet = [
      {
        yValueFormatString: "$#,###",
        xValueFormatString: "$#,###",
        type: "line",
        name: "Common",
        showInLegend: true,
        markerSize: 0,
        dataPoints: common,
      },
      {
        yValueFormatString: "$#,###",
        xValueFormatString: "$#,###",
        type: "line",
        name: "Series A",
        showInLegend: true,
        markerSize: 0,
        dataPoints: seriesA,
      },
      {
        yValueFormatString: "$#,###",
        xValueFormatString: "$#,###",
        type: "line",
        name: "Series A1",
        showInLegend: true,
        markerSize: 0,
        dataPoints: seriesA1,
      },
      {
        yValueFormatString: "$#,###",
        xValueFormatString: "$#,###",
        type: "line",
        name: "New Round",
        showInLegend: true,
        markerSize: 0,
        dataPoints: newRound,
      },
    ];

    setGraphData(dataSet);
  };

  useEffect(() => {
    setValue(jsonData);
  }, []);

  return (
    <div className="w-75">
      <Graph data={graphData} />
    </div>
  );
}

export default ValuationGraph;
