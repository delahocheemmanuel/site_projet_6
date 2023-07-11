import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Styles/error.sass'

const Error = () => {
  return (
    <main>
      <Header /> {/* Affiche le composant Header */}
      <section>
        <div className="error">
          <h1 className="error__title">404</h1> {/* Affiche le titre de l'erreur */}
          <p className="error__description--mobile">
            Oups! La page que <br />vous demandez n'existe pas.
          </p> {/* Affiche la description de l'erreur pour mobile */}
          <p className="error__description--desktop">
            Oups! La page que vous demandez n'existe pas.
          </p> {/* Affiche la description de l'erreur pour desktop */}
          <Link className="error__link" to="/">
            Retourner sur la page d'accueil
          </Link> {/* Affiche un lien pour retourner à la page d'accueil */}
        </div>
      </section>
      <Footer /> {/* Affiche le composant Footer */}
    </main>
  )
}

export default Error
