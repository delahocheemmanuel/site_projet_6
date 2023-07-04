import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Styles/error.sass'
const Error = () => {
  return (
    <main>
      <Header />
      <section >
        <div className="error">
        <h1 className="error__title">404</h1>
        <p className="error__description--mobile">
          Oups! La page que <br ></br>vous demandez n'existe pas.
        </p>
        <p className="error__description--desktop">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="error__link" to="/">
          Retourner sur la page d'accueil
        </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Error
