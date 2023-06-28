import React from "react";
import Banner from "../Components/Banner";
import styles from "../Styles/home.module.scss";


const Home = () => { 
    return (
      <main className={styles.home}>
        <Banner
          text="Chez vous, partout et ailleurs"
          bannerType="homeBanner"
        />
      </main>
    );
  };
  
  export default Home;