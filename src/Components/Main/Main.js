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

// Hooks
import { useTranslation } from './../../Context/hookUseTranslation';


export default function Main(props) {

  const t = useTranslation();

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
          <p className='bienvenue'>{t('accueilBienvenue')} <span id="logoKoti"></span><span id="logoKota"></span></p>
          <p className="presentation">{t('accueilPartenaire')}</p>
          <p className="description">
            {t('block_intro')} <span className="orange-bold">{t('block_service_client')}</span>{' '}
            {t('block_middle_1')} <span className="orange-bold">{t('block_assistance_virtuelle')}</span>{' '}
            {t('block_middle_2')} <span className="orange-bold">{t('block_sav')}</span> {t('block_outro')}

          </p>
          <div className="buttons">
            <a onClick={()=>props.scrollToSection('Services')} className='button service'>{t('accueilEnSavoirPlus')} <img src={arrow} alt="->" /></a>
            <a onClick={()=>props.scrollToSection('Contact')} className="button contact">{t('accueilNousContacter')}</a>
          </div>
        </section>

        {/* section 2 : services */}
        <section id="services">
          <h2 id='Services'>{t('servicesTitle')}</h2>

          <section className="section-a section-a1 section-reversed">
            <section className="section-aa">
              <h3>{t('servicesAssistanceVirtuelle')}</h3>
              <p>
                {t('serviceAVintro')}
                <br />
                <span className="services-details"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔  {t('AV1')}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔  {t('AV2')} (</strong>{t('AV2a')} <strong>)</strong></span>
                <br />
                <i>“{t('AVcitation')}”.</i>
              </p>
              <a onClick={()=>props.scrollToSection('Contact')} className="button is-rounded">{t('servicesContactezNous')}</a>
            </section>
            <section className="section-ab"><img src={Photo1} alt="Assistance Virtuelle" /></section>
          </section>

          
            <section className="section-a section-a2 section-non-reversed">
            <section className="section-aa">
                <h3>{t('servicesSCE')}</h3>
                <p>
                  {t('SCEintro')}
                  <br/>
                  <span className="services-details"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔  {t('SCE1')} (</strong>{t('SCE1a')}<strong>)</strong><br/><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔  {t('SCE2')}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔  {t('SCE3')}</strong></span>
                  <br/>
                  <i>“{t('SCEcitation')}”.</i>
                </p>
                <a onClick={()=>props.scrollToSection('Contact')} className="button is-rounded">{t('servicesContactezNous')}</a>
              </section>
              <section className="section-ab"><img src={Photo2} alt="Service Client Externalisé" /></section>
            </section>

          <section className="section-a section-a3 section-reversed">
          <section className="section-aa">
              <h3></h3>
              <p>
                {t('SAVintro')}
                <br/>
                <span className="services-details"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔  {t('SAV1')}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔  {t('SAV2')}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔  {t('SAV3')}</strong></span>
                <br/>
                <i>“{t('SAVcitation')}”.</i>
              </p>
              <a onClick={()=>props.scrollToSection('Contact')} className="button is-rounded">{t('servicesContactezNous')}</a>
            </section>
            <section className="section-ab"><img src={Photo3} alt="Gestion de SAV Externalisé" /></section>
          </section>
        </section>


        {/* section 3 : partenaires */}
        <section id="partenaires">
          <h2 id='Partenaires'>{t('partenairesTitle')}</h2>
          <p className='il-nous-font-confiance'>{t('confiance')}</p>
          <div className="fixed-grid has-3-cols">
            <div className="grid">
              <div className="cell"><img src={logoRojoNantenaina} alt="Logo Rojo Nantenaina" /></div>
              <div className="cell"><span className="img"></span></div>
              <div className="cell"><span className="img"></span></div>

            </div>
          </div>
          <p className='nous-gerons-votre-support'>“{t('nousGerons')}”</p>
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
                    <h4>{t('expertise1')}</h4>
                    <p>{t('expertise1detail')}</p>
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
                    <h4>{t('expertise2')}</h4>
                    <p>{t('expertise2detail')}</p>
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
                    <h4>{t('expertise3')}</h4>
                    <p>{t('expertise3detail')}</p>
                  </div>
                </div>
              </article>
            </div>

            <div className="box" style={{display: 'none'}}></div>
          </div>

        </section>


        {/* section 4 : contact */}
        <section id="contact">
          <h2 id='Contact'>{t('contactTitle')}</h2>
          <p className="appelez-nous">{t('appellez-nous')} 📞<br />{t('laisser-email')} 📩</p>
          <div className="info-contact num"><img src={iconTelephone} alt="Icone telephone" /><span>+261 34 36 193 36</span><img src={logoWhatsApp} alt="Logo WhatsApp" /></div>
          <div className="info-contact email"><img src={logoGmail} alt="Logo Gmail" /><span>contact@kotikotasolution.com</span><span style={{visibility: 'hidden'}}></span></div>
          <form>
            <div className="field is-horizontal">
              <div className="field-body">

                <div className="field name">
                  <div className="control is-expanded"><input name='name' type="text" className="input is-info content-form" placeholder='Name ...' required /></div>
                </div>

                <div className="field">
                  <div className="control is-expanded"><input name='email' type="email" className="input is-info content-form" placeholder='Email ...' required /></div>
                </div>

              </div>
            </div>

            <div className="field title-email">
              <div className="control"><input name='objet' type="text" className="input is-info content-form" placeholder='Object ...' required /></div>
            </div>

            <div className="field">
              <div className="control"><textarea name="message" id="" className="textarea is-info content-form" placeholder='Message ...' required></textarea></div>
            </div>

            <div id='email-buttons'>
              <button type='reset' className='button'>{t('buttonEffacer')}</button>
              <button type='button' className='button'>{t('buttonEnvoyer')}</button>
            </div>

          </form>
        </section>

        {/* section 5 : temoignages */}
        <section id="Temoignages">
          <p className="decouvrez-temoignages">{t('decouvrezTemoignages')}</p>
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
