import React from 'react'

// CSS
import './Footer.css'

// Images
import iconLocation from './../../Assets/Icons/Location-pin.png';

// Hooks
import { useTranslation } from './../../Context/hookUseTranslation';

export default function Footer(props) {

  const t = useTranslation();

  return (
    <footer>
      <div className="footer-content">

        <div className="link link1">
          <a onClick={()=>props.scrollToSection('Services')}>Services</a>
          <a onClick={()=>props.scrollToSection('Partenaires')}>{t('footerPartenaires')}</a>
          <a onClick={()=>props.scrollToSection('Contacts')}>Contacts</a>
        </div>

        <div className="figure">
          <div className="line line1"></div>
          <div className="image-container"><img src={iconLocation} alt="Icon localisation" /></div>
          <div className="line line2"></div>
        </div>

        <div className="link link2">
          <a href="">Blog</a>
          <a href="">Designers</a>
          <a href="https://bento.me/rojo-nanteh">{t('footerDeveloppeur')}</a>
        </div>
      </div>
      
    </footer>
  )
}
