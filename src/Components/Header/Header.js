import React, {useState} from 'react'

// CSS
import './Header.css'

// Images
import iconLanguage from './../../Assets/Icons/Language.png'


export default function Header() {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    let [stateIsActive, setStateIsActive] = useState(false);
    function toggleMenu() {
        setStateIsActive(!stateIsActive)
    }

  return (
    <nav className='navbar is-fixed-top' role='navigation' aria-label='main navigation'>
        <div className="navbar-brand">
            <a id='logo' className="navbar-item" onClick={scrollToTop}></a>
            <a onClick={toggleMenu} className={`navbar-burger ${stateIsActive ? 'is-active' : ''}`} role="button" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
                <span className='smallWhiteLine' aria-hidden="true"></span>
                <span className='smallWhiteLine' aria-hidden="true"></span>
                <span className='smallWhiteLine' aria-hidden="true"></span>
                <span className='smallWhiteLine' aria-hidden="true"></span>
            </a>
        </div>

        <div className={`navbar-menu ${stateIsActive ? 'is-active' : ''}`}>
            <div className="navbar-end">
                <a href="#Services" className='custom-navbar-item'>Nos services</a>
                <a href="#Partenaires" className='custom-navbar-item'>Partenaires</a>
                <div className="is-flex">
                    <a href='#Contact' className='button'>Nous contacter</a>
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
