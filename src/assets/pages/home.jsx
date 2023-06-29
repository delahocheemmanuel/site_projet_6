import React from "react";
import Banner from "../Components/Banner";
import CardList from "../Components/CardList";
import bannerImage from "../../assets/images/banner/home__banner.png";
import "../Styles/home.module.scss";



const Home = () => { 

    return (
      <main>
        <Banner 
          imgSrc={bannerImage}
          imgText="Chez vous, partout et ailleurs"
          imgAlt="Rochers au bord de la mer"
        />
        <CardList />
      </main>
    );
  };
  
  export default Home;