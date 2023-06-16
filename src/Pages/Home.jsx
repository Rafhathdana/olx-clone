import React from "react";

import Header from "../Components/Header";
import Banner from "../Components/Banner";

import Posts from "../Components/Posts";
import Footer from "../Components/Footer";

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
