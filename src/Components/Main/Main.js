import React from 'react';

// Images
import arrow from './../../Assets/Icons/Right-up.png';

// CSS
import './Accueil.css'

export default function Main() {
  return (
    <div>
        {/* section 1 : accueil */}
        <section id="Accueil" style={{backgroundColor: '#16243D'}}>
          <p className='bienvenue'>Bienvenue chez <span id="logoKoti"></span><span id="logoKota"></span></p>
          <p className="presentation">Votre Partenaire en Assistance et Support Client</p>
          <p className="description">Chez nous, nous aidons les entreprises à offrir un <span className="orange-bold">service client</span> exceptionnel, une <span className="orange-bold">assistance virtuelle</span> efficace et une <span className="orange-bold">gestion de SAV externalisée</span> fiable.
          Nous accompagnons les e-commerçants, boutiques en ligne, marques et entrepreneurs en prenant en charge la relation client et le support technique, afin qu’ils puissent se concentrer sur leur croissance.</p>
          <div className="buttons">
            <a href="#Services" className='button'>En savoir plus <img src={arrow} alt="->" /></a>
            <a href="#Contact" className="button">Nous contacter</a>
          </div>
        </section>

        {/* section 2 : services */}
        <section id="Services" style={{height: '100vh', backgroundColor: 'black'}}></section>
    </div>
  )
}
