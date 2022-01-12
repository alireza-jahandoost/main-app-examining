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
        <title>Design & Take the exam in the best way possible</title>
        <meta
          name="description"
          content="Variety in question design, A safe environment to test and to be tested, ExamsGalaxy changes your view of the examination"
          key="desc"
        />
        <meta
          property="og:title"
          content="Design & Take the exam in the best way possible - Exams Galaxy"
        />
        <meta
          property="og:description"
          content="Variety in question design, A safe environment to test and to be tested, ExamsGalaxy changes your view of the examination"
        />
        <meta
          property="og:image"
          content="https://examsgalaxy.com/og-image.png"
        />
      </Head>
      <Header />
      <Features />
      <QuestionTypes />
      <FeatureIdea />
    </div>
  );
}
