import React , { useState } from 'react'

// CSS
import './Footer.css'

// Images
import iconLocation from './../../Assets/Icons/Location-pin.png';

// Hooks
import { useTranslation } from './../../Context/hookUseTranslation';

export default function Footer(props) {

  const t = useTranslation();

  const [isDesignerDropdownActive, setIsDesignerDropdownActive] = useState(false);

  const toggleDesignerDropdown = () => {
    setIsDesignerDropdownActive(prev => !prev);
  };


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
          <a href="https://bento.me/rojo-nanteh">{t('footerDeveloppeur')}</a>
          <div id='drop' className={`dropdown is-hoverable ${isDesignerDropdownActive ? 'is-active' : ''}`}>
            <div className="dropdown-trigger">
              <a onClick={toggleDesignerDropdown}>Designer</a>
            </div>
            <div id="dropdown-menu" className="dropdown-menu">
              <div className="dropdown-content">
                <a href="https://web.facebook.com/people/Micha%C3%ABl-Judit/100089924790657/">Logo & Charte graphique</a>
                <hr className="dropdown-divider" />
                <a href="https://bento.me/rojo-nanteh">Web Design</a>
              </div>
            </div>

          </div>

        </div>
      </div>
      
    </footer>
  )
}
