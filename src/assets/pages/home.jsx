import React from "react";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import CardList from "../Components/CardList";
import bannerImage from "../../assets/images/banner/home__banner.png";
import "../Styles/home.scss";
import Footer from "../Components/Footer";



const Home = () => { 

    return (
      <body>
<Header />
      <main>
        
        <Banner 
          imgSrc={bannerImage}
          imgText="Chez vous, partout et ailleurs"
          imgAlt="Rochers au bord de la mer"
        />
        <CardList />
        
      </main>
      <Footer />
      </body>
    );
  };
  
  export default Home;