"use client";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import WorkAsManager from "@/articles/work-as-manager.mdx";
import WorkAsLeader from "@/articles/work-as-leader.mdx";
import WorkAsEngineer from "@/articles/work-as-engineer.mdx";

import YAML from "yaml";

import Section from "./section";
import Work from "./work";

type WorkDocProps = {
  desc: string;
  works: { icon: string; desc: string }[];
};

const managerWorks: WorkDocProps = {
  desc: "プロジェクト管理者として",
  works: [
    { icon: "gov", desc: "地方自治体の基幹システムAWS化" },
    { icon: "db", desc: "投信事業会社のOracleデータベース移行" },
    { icon: "car", desc: "自動車製造業の業務システムAWS化" },
  ],
};
const leaderWorks: WorkDocProps = {
  desc: "設計主任・リーダーとして",
  works: [
    { icon: "guide", desc: "小売業グループのAWS利用ガイドライン策定" },
    { icon: "city", desc: "公共機関のWebサイト基盤設計構築運用" },
    { icon: "store", desc: "小売業の基幹システムAWS化" },
  ],
};
const engineerWorks: WorkDocProps = {
  desc: "ITエンジニアとして",
  works: [
    { icon: "car", desc: "自動車製造業のWebシステム運用改善" },
    { icon: "fr", desc: "製造小売業のWebシステム構築保守" },
    { icon: "flight", desc: "航空会社のWebシステム設計構築" },
  ],
};

const Career = () => {
  const WorkDoc = (props: WorkDocProps) => {
    return (
      <div>
        <h4>{props.desc}</h4>
        <ul className="list-career-works">
          {props.works.map((work, index) => {
            return (
              <li key={index} className={work.icon}>
                {work.desc}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const works = [
    {
      as: "manager",
      document: <WorkDoc {...managerWorks} />,
    },
    {
      as: "leader",
      document: <WorkDoc {...leaderWorks} />,
    },
    {
      as: "engineer",
      document: <WorkDoc {...engineerWorks} />,
    },
  ];

  // const CareerArticle = () => {
  //   const
  // };

  return (
    <Section id="career">
      <h3>Career</h3>
      {/* <CareerArticle /> */}
      <Grid container spacing={6} marginTop={3}>
        {works.map((work, index) => {
          return (
            <Grid item xs={12} md={4} key={index}>
              <Work
                imageSrc={`/career-icon-${work.as}.svg`}
                imageAlt={`work as ${work.as}`}
                key={index}
              >
                {work.document}
              </Work>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
};

export default Career;
