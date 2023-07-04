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
  const { cardId } = useParams()
  const card = data.find((card) => card.id === cardId)

  return (
    <main>
      <Header />
      <section>
        <CardPictures
          imgSrc={card.pictures}
          imgAlt={`Photo de ${card.title} ${card.location}`}
        />
        <div className="card__about">
          <div className="card__informations">
            <div className="card__informations-rating-host">
              <div className="card__title">
                <h2 className="card__title--title">{card.title}</h2>
                <p className="card__title--location">{card.location}</p>
              </div>
              <div className="card__tags">
                <ul>
                  {card.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card__rating-host">
              <CardRating rating={card.rating} />
              <div className="card__host">
                <p className="card__host--name">{card.host.name}</p>
                <img
                  className="card__host--image"
                  src={card.host.picture}
                  alt="Host"
                />
              </div>
            </div>
          </div>
          <div className="card__desc-equip">
            <div className="card__description">
              <Collapse
                categoryName="Description"
                categoryDetails={card.description}
              />
            </div>
            <div className="card__equipements">
              <Collapse
                categoryName="Equipements"
                categoryDetails={
                  <ul>
                    {card.equipments.map((equipment) => (
                      <li key={equipment}>{equipment}</li>
                    ))}
                  </ul>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Accommodation
