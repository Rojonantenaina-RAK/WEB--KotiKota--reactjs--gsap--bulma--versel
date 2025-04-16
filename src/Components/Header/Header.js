import React, {useEffect, useRef, useState} from 'react'

// CSS
import './Header.css'

// Images
import iconLanguage from './../../Assets/Icons/Language.png'


export default function Header(props) {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    let [stateIsActive, setStateIsActive] = useState(false);
    function toggleMenu() {
        setStateIsActive( (prev) => !prev )
    }

    const menuRef = useRef(null); // pour détecter les clics en dehors
    const burgerRef = useRef(null);

    useEffect(() => {
        // Fermer le menu au scroll
        const handleScroll = () => {
          if (stateIsActive) {
            setStateIsActive(false);
          }
        };
    
        // Fermer le menu si clic en dehors du menu ou du burger
        const handleClickOutside = (event) => {
          if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            burgerRef.current &&
            !burgerRef.current.contains(event.target)
          ) {
            setStateIsActive(false);
          }
        };
    
        if (stateIsActive) {
          window.addEventListener('scroll', handleScroll);
          document.addEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [stateIsActive]);

  return (
    <nav className='navbar is-fixed-top' role='navigation' aria-label='main navigation'>
        <div className="navbar-brand">
            <a id='logo' className="navbar-item" onClick={scrollToTop}></a>
            <a onClick={toggleMenu} ref={burgerRef} className={`navbar-burger ${stateIsActive ? 'is-active' : ''}`} role="button" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
                <span className='smallWhiteLine' aria-hidden="true"></span>
                <span className='smallWhiteLine' aria-hidden="true"></span>
                <span className='smallWhiteLine' aria-hidden="true"></span>
                <span className='smallWhiteLine' aria-hidden="true"></span>
            </a>
        </div>

        <div ref={menuRef} className={`navbar-menu ${stateIsActive ? 'is-active' : ''}`}>
            <div className="navbar-end">
                <a onClick={()=>props.scrollToSection('Services')} className='custom-navbar-item'>Nos services</a>
                <a onClick={()=>props.scrollToSection('Partenaires')} className='custom-navbar-item'>Partenaires</a>
                <div className="is-flex">
                    <a id='linkToContact' onClick={()=>props.scrollToSection('Contact')} className='button'>Nous contacter</a>
                    <div className="control has-icons-left">
                        <span className="icon is-left"><img src={iconLanguage} alt="Langue" /></span>
                        <div className="select is-dark">
                            <select name="language" id="language">
                                <option value="french">Fr</option>
                                <option value="english">En</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}
