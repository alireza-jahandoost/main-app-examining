import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/landing-page-parts/header.component";
import Features from "../components/landing-page-parts/features.component";

export default function Home() {
  return (
    <div>
      <Header />
      <Features />
    </div>
  );
}
