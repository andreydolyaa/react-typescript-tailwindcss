import { ApexOptions } from "apexcharts";
import { hexToRgba } from "../utils/utils";

interface ChartOptions {
  type: string;
  labels: string[];
  lineColors: string[];
  lineWidth: number;
  pointsWidth: number;
  pointShape: string;
  curve: string;
  xaxisShowLabels: boolean;
  yaxisShowLabels: boolean;
}

export const useChartOptions = ({
  type,
  labels,
  lineColors,
  lineWidth,
  pointsWidth,
  curve,
  pointShape,
  xaxisShowLabels,
  yaxisShowLabels,
}: ChartOptions): ApexOptions => {
  const rgba = hexToRgba(lineColors[0]);

  const options: ApexOptions = {
    chart: {
      type: <ApexChart["type"]>type,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    labels: labels,
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: xaxisShowLabels, style: { colors: "#9BA3AF", fontSize: "10px" } },
    },
    yaxis: {
      labels: { show: yaxisShowLabels, style: { colors: "#9BA3AF", fontSize: "10px" } },
    },
    grid: {
      borderColor: `rgba(${rgba.r},${rgba.g},${rgba.b},0.1)`,
      yaxis: { lines: { show: false } },
      xaxis: { lines: { show: true } },
      position: "back",
      column: {
        colors: undefined,
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: <ApexStroke["curve"]>curve,
      lineCap: "butt",
      colors: <ApexStroke["colors"]>lineColors,
      width: <ApexStroke["width"]>lineWidth,
      dashArray: 0,
    },
    legend: { show: false },
    tooltip: {
      enabled: true,
      followCursor: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return `<div class="bg-cardColor py-1 px-4 text-[10px]">$${series[seriesIndex][dataPointIndex]}</div>`;
      },
    },
    markers: {
      size: pointsWidth,
      strokeWidth: 0,
      shape: <ApexMarkerShape>pointShape,
      colors: <ApexMarkers["colors"]>lineColors,
    },
    // fill: {
    //   type: 'gradient',
    //   gradient: {
    //     shadeIntensity: 1,
    //     opacityFrom: 0.7,
    //     opacityTo: 0.9,
    //     stops: [0, 100]
    //   }
    // },
  };
  return options;
};
