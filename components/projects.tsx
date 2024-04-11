'use client'

import Image from "next/image";
import Section from "@/components/section";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import fs from "fs";
import YAML from "yaml";

import ProjectsArticle from "@/articles/projects.mdx"
import { Stack, Grid, Slide } from "@mui/material";


type projectCardProps = {
  name: string;
  description: string;
  imageUrl: string;
  url: string;
  keyWords: string[];
};


const ProjectCard = (props: projectCardProps) => {
  return (
    <Card sx={{ boxShadow: 0, backgroundColor: "primary.light"}}>
      <CardContent>
      <Image
        src={props.imageUrl} alt={props.name} width={300} height={300}
      />
      {/* <article><MDXContent/></article> */}
      <article>
        <h4>{props.name}</h4>
        {props.description}
        <br/>
        {props.keyWords.map((word, index) => (
          <Chip key={index} label={word} variant="outlined" color="secondary" size="small" sx={{margin: 0.2,}}/>
        ))}
      </article>
      </CardContent>
    </Card>
  );
}

const projectsYaml = `
- name: 音声認識翻訳システム
  imageUrl: /caption-project.svg
  url: /project
  description: |
    リアルタイムでの音声認識・翻訳をするWebシステム。
    インフラと一部のWeb APIの設計構築・保守に対応しました。
  keyWords:
    - PM
    - 設計主任
    - AWS
    - GCP
    - Kubernetes
    - Flask
#- name: AWS導入ガイドライン
#  imageUrl: /sample-project.svg
#  url: /project
#  description: |
#    企業グループへのAWS導入にあたっての、ガイドラインや共通基盤を作成するプロジェクト。
#    AWSに精通したコンサルタントとして、案の作成や議論の推進に努めました。
#  keyWords:
#    - コンサルタント
#    - AWS
#    - 共通基盤
#    - セキュリティ
#    - コンプライアンス
- name: 自治体Webサイト基盤
  imageUrl: /kts-project.svg
  url: /project
  description: |
    地方自治体で所管するWebサイトの基盤を設計構築保守するプロジェクト。
     ITコンサルタントとしてインフラの設計構築と保守に対応しました。
  keyWords:
    - コンサルタント
    - AWS
    - Apache
    - WordPress
    - Direct Connect
- name: 業務システムAWS移行
  imageUrl: /migration-project.svg
  url: /project
  description: |
    自動車製造業のスタッフ部門で使用されているWebシステムのAWS移行プロジェクト。
    コンサルタントとして、プロジェクト管理と要件定義、移行計画作成などを行いました。
  keyWords:
    - PM
    - コンサルタント
    - AWS
    - システム移行
`

const Projects = () => {
  const projects = YAML.parse(projectsYaml)

  return (
    <Section id="projects">
      <h3>Projects</h3>
      <ProjectsArticle />
      <Grid container spacing={2} marginTop={3}>
        {
          projects.map((project: projectCardProps, index: number) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ProjectCard key={index} {...project} />
            </Grid>
          ))
        }
      </Grid>
    </Section>
  );
}

export default Projects;