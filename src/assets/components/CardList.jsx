import React from 'react'
import { data } from '../Data/Datas' // Importation du tableau de données depuis un fichier
import { Link } from 'react-router-dom' // Importation du composant de lien de react-router-dom
import '../Styles/cardlist.sass'

function CardList() {
  return (
    <div className="card__list-container">
      {/* Conteneur parent avec possibilité de défilement */}
      <div className="card__list">
        {/* Boucle sur chaque élément du tableau de données */}
        {data.map((card) => {
          return (
            <div key={card.id} className="card__list--item">
              {/* Crée un lien vers une page spécifique en utilisant l'identifiant de la carte */}
              <Link to={`/Accommodation/${card.id}`}>
                <div className="card__list--content">
                  {/* Affiche l'image de la carte avec le titre et l'emplacement comme texte alternatif */}
                  <img
                    src={card.cover}
                    alt={`${card.title} - ${card.location}`}
                  />
                  <p className="card__list--title">{card.title}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardList
