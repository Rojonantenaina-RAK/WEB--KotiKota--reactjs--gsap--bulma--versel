import React from 'react'

// CSS
import './TemoignageBox.css'

// Images
import iconStar from './../../../Assets/Icons/Star.png'

export default function TemoignageBox(props) {

  let count = parseInt(props.note, 10)
  if (isNaN(count) || count <= 0) return null;

  return (
    <div className='box'>
      <h5>{props.resumee}</h5>
      <p className="stars">
        {Array.from({ length: count }).map((_, index) => (
          <img key={index} src={iconStar} alt="Icone star" />
        ))}
      </p>
      <p className="main">{props.contenu}</p>
      <p className="name">{props.nom}</p>
    </div>
  )
}
