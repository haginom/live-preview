import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import HeroSection from "../components/HeroSections";
import CallToAction from "../components/Cta";
import Header from "../components/Header";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <main>
        <h1 className="space-y-6 py-8 text-base leading-7 text-gray-600">
          Congratulations
          <br />
          <span>— you just made a Gatsby site! 🎉🎉🎉</span>
        </h1>
        <p>
          <h1>Hello, {process.env.GATSBY_MY_ENVIRONMENT}</h1>
        </p>
      </main>
      <CallToAction />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
