import React from 'react'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import CardList from '../Components/CardList'
import bannerImage from '../../assets/images/banner/home__banner.jpg'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <main>
      <Header /> {/* Affiche le composant Header */}
      <section>
        <Banner
          imgSrc={bannerImage}
          imgText="Chez vous, partout et ailleurs"
          imgAlt="Rochers au bord de la mer"
        /> {/* Affiche le composant Banner avec l'image spécifiée, le texte et le texte alternatif */}
        <CardList /> {/* Affiche le composant CardList */}
      </section>
      <Footer /> {/* Affiche le composant Footer */}
    </main>
  )
}

export default Home

