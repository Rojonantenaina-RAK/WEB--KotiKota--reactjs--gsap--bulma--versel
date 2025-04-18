import React, { useRef, useState, useEffect } from 'react';

// Images
import arrow from './../../Assets/Icons/Right-up.png';
import Photo1 from './../../Assets/Photos/Photo 1.png';
import Photo2 from './../../Assets/Photos/Photo 2.png';
import Photo3 from './../../Assets/Photos/Photo 3.png';
import logoRojoNantenaina from './../../Assets/Logos/RN (Rojo Nantenaina).png';
import iconExperts from './../../Assets/Icons/customer-success.png';
import iconPiggyBank from './../../Assets/Icons/Piggy-bank.png';
import iconSolution from './../../Assets/Icons/Hand.png';
import iconTelephone from './../../Assets/Icons/Telephone.png';
import logoWhatsApp from './../../Assets/Logos/WhatsApp.png';
import logoGmail from './../../Assets/Logos/Gmail.png';

// CSS
import './Accueil.css';
import './Services.css';
import './Partenaires.css';
import './Contact.css';
import './Temoignages.css';

// Components
import Box from './Temoignage/TemoignageBox';

export default function Main(props) {

  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const [nBox, setNBox] = useState(0); // n = number of <Box /> in Temoignages section

  const wBox = 300; // width of Box
  const m2 = 30*2; // Margin left ou right *2 du Box
  const scrollAmount = wBox + m2;

  useEffect(() => {
    // Compte automatique du nombre de .box
    if (containerRef.current) {
      const count = containerRef.current.querySelectorAll(".box").length;
      setNBox(count);
    }
  }, []);

  const handleNext = () => {
    if (index > -(nBox - 1)) {
      setIndex((prev) => prev - 1);
    }
  };

  const handlePrev = () => {
    if (index < 0) {
      setIndex((prev) => prev + 1);
    }
  };


  return (
    <div>
        {/* section 1 : accueil */}
        <section id="Accueil" style={{backgroundColor: '#16243D'}}>
          <p className='bienvenue'>Bienvenue chez <span id="logoKoti"></span><span id="logoKota"></span></p>
          <p className="presentation">Votre Partenaire en Assistance et Support Client</p>
          <p className="description">Chez nous, nous aidons les entreprises à offrir un <span className="orange-bold">service client</span> exceptionnel, une <span className="orange-bold">assistance virtuelle</span> efficace et une <span className="orange-bold">gestion de SAV externalisée</span> fiable.
          Nous accompagnons les e-commerçants, boutiques en ligne, marques et entrepreneurs en prenant en charge la relation client et le support technique, afin qu’ils puissent se concentrer sur leur croissance.</p>
          <div className="buttons">
            <a onClick={()=>props.scrollToSection('Services')} className='button service'>En savoir plus <img src={arrow} alt="->" /></a>
            <a onClick={()=>props.scrollToSection('Contact')} className="button contact">Nous contacter</a>
          </div>
        </section>

        {/* section 2 : services */}
        <section id="services">
          <h2 id='Services'>Nos services</h2>

          <section className="section-a section-a1 section-reversed">
            <section className="section-aa">
              <h3>Assistance Virtuelle</h3>
              <p>Besoin d’un assistant personnel pour gérer vos tâches quotidiennes ? Nos experts vous aident avec :
                <br />
                <span className="services-details"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔  La gestion de vos emails et agendas<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔  Le support client en ligne (</strong>chat, email, réseaux sociaux <strong>)</strong></span>
                <br />
                <i>“Restez concentré uniquement sur ce qui vous est essentiel”.</i>
              </p>
              <a onClick={()=>props.scrollToSection('Contact')} className="button is-rounded">Contactez-nous</a>
            </section>
            <section className="section-ab"><img src={Photo1} alt="Assistance Virtuelle" /></section>
          </section>

          
            <section className="section-a section-a2 section-non-reversed">
            <section className="section-aa">
                <h3>Service Client Externalisé</h3>
                <p>Nous prenons en charge votre relation client à 100% :
                  <br/>
                  <span className="services-details"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔  Support client 24/7 (</strong>chat, téléphone, email<strong>)</strong><br/><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔  Réponses aux questions et gestion des réclamations<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔  Fidélisation et satisfaction client</strong></span>
                  <br/>
                  <i>“Améliorez votre relation client avec notre service d’excellence”.</i>
                </p>
                <a onClick={()=>props.scrollToSection('Contact')} className="button is-rounded">Contactez-nous</a>
              </section>
              <section className="section-ab"><img src={Photo2} alt="Service Client Externalisé" /></section>
            </section>

          <section className="section-a section-a3 section-reversed">
          <section className="section-aa">
              <h3>Gestion de SAV Externalisé</h3>
              <p>Simplifiez la gestion des retours et des réclamations grâce à nos solutions :
                <br/>
                <span className="services-details"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔  Suivi des retours et échanges de produits<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔  Assistance technique et logistique<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔  Réparations et remboursements simplifiés</strong></span>
                <br/>
                <i>“Un après-vente sans stress”.</i>
              </p>
              <a onClick={()=>props.scrollToSection('Contact')} className="button is-rounded">Contactez-nous</a>
            </section>
            <section className="section-ab"><img src={Photo3} alt="Gestion de SAV Externalisé" /></section>
          </section>
        </section>


        {/* section 3 : partenaires */}
        <section id="partenaires">
          <h2 id='Partenaires'>Nos partenaires</h2>
          <p className='il-nous-font-confiance'>Ils nous font confiance !</p>
          <div className="fixed-grid has-3-cols">
            <div className="grid">
              <div className="cell"><img src={logoRojoNantenaina} alt="Logo Rojo Nantenaina" /></div>
              <div className="cell"><span className="img"></span></div>
              <div className="cell"><span className="img"></span></div>

            </div>
          </div>
          <p className='nous-gerons-votre-support'>“Nous gérons votre support, vous gérez votre business !”</p>
          <div className='flex-container'>
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className='image' style={{backgroundColor: '#16243D'}}>
                    <img src={iconExperts} alt="Icon Experts" />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <h4>Expertise éprouvée</h4>
                    <p>Des professionnels formés pour gérer votre relation client</p>
                  </div>
                </div>
              </article>
            </div>

            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className='image' style={{backgroundColor: '#EE7061'}}>
                    <img src={iconPiggyBank} alt="Icon Experts" />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <h4>Réduction des coûts</h4>
                    <p>Externalisation flexible sans charge salariale</p>
                  </div>
                </div>
              </article>
            </div>

            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className='image' style={{backgroundColor: '#16243D'}}>
                    <img src={iconSolution} alt="Icon Experts" />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <h4>Solution sur-mesure</h4>
                    <p>Un service adapté à votre activité</p>
                  </div>
                </div>
              </article>
            </div>

            <div className="box" style={{display: 'none'}}></div>
          </div>

        </section>


        {/* section 4 : contact */}
        <section id="contact">
          <h2 id='Contact'>Nous contacter</h2>
          <p className="appelez-nous">Appelez-nous 📞<br />ou laissez-nous vos messages, avis, temoignages en nous envoyant un Email 📩</p>
          <div className="info-contact num"><img src={iconTelephone} alt="Icone telephone" /><span>+261 34 36 193 36</span><img src={logoWhatsApp} alt="Logo WhatsApp" /></div>
          <div className="info-contact email"><img src={logoGmail} alt="Logo Gmail" /><span>contact@kotikotasolution.com</span><span style={{visibility: 'hidden'}}></span></div>
          <form>
            <div className="field is-horizontal">
              <div className="field-body">

                <div className="field name">
                  <div className="control is-expanded"><input name='name' type="text" className="input is-info content-form" placeholder='Nom ...' required /></div>
                </div>

                <div className="field">
                  <div className="control is-expanded"><input name='email' type="email" className="input is-info content-form" placeholder='Votre adresse email ...' required /></div>
                </div>

              </div>
            </div>

            <div className="field title-email">
              <div className="control"><input name='objet' type="text" className="input is-info content-form" placeholder='Objet de votre Email ...' required /></div>
            </div>

            <div className="field">
              <div className="control"><textarea name="message" id="" className="textarea is-info content-form" placeholder='Votre message ...' required></textarea></div>
            </div>

            <div id='email-buttons'>
              <input type="reset" value='Effacer' className='button' />
              <input type="button" value='Envoyer' className='button' />
            </div>

          </form>
        </section>

        {/* section 5 : temoignages */}
        <section id="Temoignages">
          <p className="decouvrez-temoignages">Découvrez ce que nos collaborateurs et clients ont à dire sur nous !</p>
          <div className="temoignages-wrapper">
            <div className="temoignages-container" ref={containerRef} style={{
                                                                              marginLeft: `${index * scrollAmount}px`,
                                                                              width: `${nBox * scrollAmount}px`,
                                                                              transition: "margin-left 0.5s ease",
                                                                            }}>
              {Array.from({ length: 7 }).map((_, i) => (
                <Box key={i} resumee="Extrêmement satisfait !"  note='5' nom='Anonyme' contenu="Je suis extrêmement satisfait du service offert par Koti Kota. La communication avec l’équipe a été fluide. Grâce à eux, mon service client est bien géré et mes clients sont ravis. Je recommande sans hésitation!" />
              ))}

            </div>
          </div>
          <div className="buttons">
            <button className="button" onClick={handlePrev}>&lt;</button>
            <button className="button" onClick={handleNext}>&gt;</button>
          </div>
        </section>
    </div>
  )
}
