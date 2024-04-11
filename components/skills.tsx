"use client";

import Grid from "@mui/material/Grid";

import  * as React from "react";
import Section from "./section";
import SkillChart from "./skill-chart";
import type { SkillChartProps } from "./skill-chart";

import SkillsArticle from "@/articles/skills.mdx";

const Skills = () => {
  const skills =[
    {
      labels:["AWS", ["ネット","ワーク"], "GCP", "Kubernetes", "DB", "Linux"],
      datasets:[{
        label: "IT基盤",
        data: [4, 3, 2, 3, 2, 4],
        borderWidth: 1,
        borderColor: "#2ca58d90",
        backgroundColor: "#2ca58d30",
      }],
    },
    {
      labels:["Infrastructure as Code", ["作業","計画"], ["人員","管理"], "自動テスト", ["財務"], "CI/CD"],
      datasets:[{
        label: "プロジェクト管理,DevOps",
        data: [4, 3, 2, 2, 1, 3],
        borderWidth: 1,
        borderColor: "#00699290",
        backgroundColor: "#00699230",
        // borderColor: "#FA7921",
        // backgroundColor: "#FA792199",
        // borderColor: "#FF8E72",
        // backgroundColor: "#FF8E7299",
        // borderColor: "#F9CFF2",
        // backgroundColor: "#F9CFF299",
      }],
    },
    {
      labels:["Bash", "Python", "Flask", "JavaScript/TS,Next.js", ["HTML","/CSS"], "Jinja2"],
      datasets:[{
        label: "プログラミング",
        data: [3, 3, 2, 1, 1, 2],
        borderWidth: 1,
        borderColor: "#82708190",
        backgroundColor: "#82708130",
      }],
    },
  ]

  const skillCharts: SkillChartProps[] = skills.map(
    (skill, index) => {
      return {
        id: `skill${index}`,
        width: 400,
        height: 400,
        chartConfig: {
          type: "radar",
          options: {
            responsive: true,
            scales: {
              r: {
                beginAtZero: true,
                max: 4,
                ticks: {stepSize: 1},
              },
            },
          },
          data: {labels: skill.labels, datasets: skill.datasets}}
      }
    }
  );

  return (
    <Section id="skills">
      <h3 >Skills</h3>
      <SkillsArticle />
      <Grid container  p="3" mt={3} mb={3} sx={{borderRadius: "10px", backgroundColor: "primary.light"}}>
        {
           skillCharts.map((skillChart, index) => {
            return <Grid item key={index} xs={12} sm={6} md={4} ><SkillChart {...skillChart} ></SkillChart></Grid>
           }) 
        }
      </Grid>
      <div>いずれも実務で使用した経験のある技術・要素です。<br/>
        数値の基準は、「1: 基礎的な業務経験あり」「2: 基本的な設計開発能力あり」「3: 応用的な設計開発能力あり」「4: 得意な分野」を表しています。
      </div>
    </Section>
  );
};

export default Skills;
