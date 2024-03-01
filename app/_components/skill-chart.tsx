// components/SkillChart.js
"use client";

import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

type SkillChartProps = {
  name: string;
  level: number;
  comment: string;
};

const data = {
  labels: ["AWS", "Docker", "Python", "Linux", "SQL"], // スキル名
  datasets: [
    {
      label: "スキルレベル",
      data: [8, 9, 7, 8, 9], // 各スキルのレベル（例：10点満点）
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
    },
  ],
};


const SkillChart = () => {
useEffect(() => {
    const chartCanvas = document.getElementById("mySkillChart")! as HTMLCanvasElement;
  const ctx = chartCanvas.getContext("2d")! as CanvasRenderingContext2D;
  const myChart = new Chart(ctx, {
    type: "bar",
    options: {
      indexAxis: "y", // Y軸にスキル名を表示
      responsive: true,
      scales: {
        x: {
          beginAtZero: true, // Y軸のスケールが0から始まるように設定
          max: 10, // スキルレベルの最大値
        },
      },
    },
    data: data,
  });

  return () => myChart.destroy();
}, []);
return(
    <canvas id="mySkillChart" width="400" height="400"></canvas>
)
};

export default SkillChart;
