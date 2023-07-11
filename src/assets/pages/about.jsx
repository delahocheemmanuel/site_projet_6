import Banner from '../Components/Banner'
import bannerImage from '../images/banner/about__banner.jpg'
import Collapse from '../Components/Collapse'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function About() {
  return (
    <main>
      <Header /> {/* Affiche le composant Header */}

      <section>
        <Banner imgSrc={bannerImage} imgAlt="Paysage de montagnes" /> {/* Affiche le composant Banner avec l'image spécifiée et le texte alternatif */}
        <div className="collapse__wrapper-about">
          <Collapse
            categoryName="Fiabilité" // Catégorie de la collapse
            categoryDetails="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." // Détails de la catégorie
          />
          <Collapse
            categoryName="Respect" // Catégorie de la collapse
            categoryDetails="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." // Détails de la catégorie
          />
          <Collapse
            categoryName="Service" // Catégorie de la collapse
            categoryDetails="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." // Détails de la catégorie
          />
          <Collapse
            categoryName="Sécurité" // Catégorie de la collapse
            categoryDetails="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." // Détails de la catégorie
          />
        </div>
      </section>
      <Footer /> {/* Affiche le composant Footer */}
    </main>
  )
}

export default About
