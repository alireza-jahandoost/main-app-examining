import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../components/landing-page-parts/header/header.component";
import Features from "../components/landing-page-parts/features/features.component";
import QuestionTypes from "../components/landing-page-parts/question-types/question-types.component";
import FeatureIdea from "../components/landing-page-parts/feature-idea/feature-idea.component";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Exams Galaxy</title>
        <meta name="description" content="description" key="desc" />
        <meta property="og:title" content="Exams Galaxy" />
        <meta property="og:description" content="description" />
        <meta
          property="og:image"
          content="https://examsgalaxy.com/favicon.ico"
        />
      </Head>
      <Header />
      <Features />
      <QuestionTypes />
      <FeatureIdea />
    </div>
  );
}
