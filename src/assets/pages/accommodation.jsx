import React from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/accommodation.sass'
import '../Styles/cardrating.sass'
import { data } from '../Data/Datas'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Collapse from '../Components/Collapse'
import CardPictures from '../Components/CardPictures'
import CardRating from '../Components/CardRating'

function Accommodation() {
  const { cardId } = useParams() // Obtient l'ID de la carte à partir des paramètres de l'URL
  const card = data.find((card) => card.id === cardId) // Recherche la carte correspondante dans les données

  return (
    <main>
      <Header /> {/* Affiche le composant Header */}
      <section>
        <CardPictures
          imgSrc={card.pictures}
          imgAlt={`Photo de ${card.title} ${card.location}`}
        /> {/* Affiche le composant CardPictures avec les images de la carte et le texte alternatif */}
        <div className="card__about">
          <div className="card__informations">
            <div className="card__informations-rating-host">
              <div className="card__title">
                <h2 className="card__title--title">{card.title}</h2> {/* Affiche le titre de la carte */}
                <p className="card__title--location">{card.location}</p> {/* Affiche l'emplacement de la carte */}
              </div>
              <div className="card__tags">
                <ul>
                  {/* Affiche les tags de la carte */}
                  {card.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card__rating-host">
              <CardRating rating={card.rating} /> {/* Affiche le composant CardRating avec la note de la carte */}
              <div className="card__host">
                <p className="card__host--name">{card.host.name}</p> {/* Affiche le nom de l'hôte de la carte */}
                <img
                  className="card__host--image"
                  src={card.host.picture}
                  alt="Host"
                /> {/* Affiche l'image de l'hôte de la carte */}
              </div>
            </div>
          </div>
          <div className="card__desc-equip">
            <div className="card__description">
              <Collapse
                categoryName="Description" // Catégorie de la collapse
                categoryDetails={card.description} // Détails de la catégorie
              />
            </div>
            <div className="card__equipements">
              <Collapse
                categoryName="Equipements" // Catégorie de la collapse
                categoryDetails={
                  <ul>
                    {/* Affiche les équipements de la carte */}
                    {card.equipments.map((equipment) => (
                      <li key={equipment}>{equipment}</li>
                    ))}
                  </ul>
                } // Détails de la catégorie
              />
            </div>
          </div>
        </div>
      </section>

      <Footer /> {/* Affiche le composant Footer */}
    </main>
  )
}

export default Accommodation
