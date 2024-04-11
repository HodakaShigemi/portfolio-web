"use client";

import { useEffect } from "react";
import Chart from "chart.js/auto";
import { type ChartConfiguration } from "chart.js";

import Box from "@mui/material/Box";

import Canvas from "@/components/canvas";

export type SkillChartProps = {
  id: string;
  width: number;
  height: number;
  chartConfig: ChartConfiguration;
};

const SkillChart = (props: SkillChartProps) => {
  const { id, width, height, chartConfig } = props;

  const drawChart = () => {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    //const ctx = canvas.getContext("2d");
    const chart = new Chart(canvas, chartConfig);
    return () => chart.destroy();
  };

  useEffect(drawChart);

  return (
    <Box sx={{width: "100%", height: "110%"}}>
      <Canvas id={id} width={width} height={height} />
    </Box>
  );

};

export default SkillChart;
