import React from "react";
import HomePlansCardList from "../../components/Home/HomePlansCardList";
import HomePlansSections from "../../components/Home/HomePlansSection";
import ProfileInfo from "../../components/Home/ProfileInfo";
import Footer from "../../components/Footer/Footer";
import BlogReview from "../../components/Home/BlogReview";

export default function Home() {
  return (
    <>
      <ProfileInfo />
      <HomePlansCardList />
      <HomePlansSections />
      <BlogReview />
      <Footer />
    </>
  );
}
