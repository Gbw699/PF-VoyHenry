import React, { useEffect } from "react";
import HomePlansCardList from "../../components/Home/HomePlansCardList";
import HomePlansSections from "../../components/Home/HomePlansSection";
import ProfileInfo from "../../components/Home/ProfileInfo";
import Footer from "../../components/Footer/Footer";
import BlogReview from "../../components/Home/BlogReview";
import { useDispatch } from "react-redux";
import { getTopPlans, getSelectionPlans } from "../../redux/slices/planSlice/thunk";
import { getUser } from "../../redux/slices/userSlice/thunks";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getTopPlans());
    dispatch(getSelectionPlans());
    dispatch(getUser());
  },[]);
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
