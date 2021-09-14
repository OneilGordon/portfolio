import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Oneil Gordon" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading='{ about : " ' />
        <InterestsSection sectionId="details" heading='{ skills: " ' />
        <ProjectsSection sectionId="features" heading='{ projects: " ' />
        <ContactSection sectionId="github" heading='{ contact: " ' />
      </Page>
    </>
  );
}
