import React from "react";
import Banner from "../Components/Banner";
import Header from "../Components/Hearder";
import CardList from "../Components/CardList";
import bannerImage from "../../assets/images/banner/home__banner.png";
import "../Styles/home.module.scss";
import Footer from "../Components/Footer";



const Home = () => { 

    return (
      
      <main>
        <Header />
        <Banner 
          imgSrc={bannerImage}
          imgText="Chez vous, partout et ailleurs"
          imgAlt="Rochers au bord de la mer"
        />
        <CardList />
        <Footer />
      </main>
    );
  };
  
  export default Home;