import React from 'react'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import CardList from '../Components/CardList'
import bannerImage from '../../assets/images/banner/home__banner.png'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <main>
      <Header />
      <section>
        <Banner
          imgSrc={bannerImage}
          imgText="Chez vous, partout et ailleurs"
          imgAlt="Rochers au bord de la mer"
        />
        <CardList />
      </section>
      <Footer />
    </main>
  )
}

export default Home
