import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../components/landing-page-parts/header/header.component";
import Features from "../components/landing-page-parts/features/features.component";
import QuestionTypes from "../components/landing-page-parts/question-types/question-types.component";

export default function Home() {
  return (
    <div>
      <Header />
      <Features />
      <QuestionTypes />
    </div>
  );
}
