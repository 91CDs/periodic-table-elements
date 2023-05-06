import React, { useEffect, useRef } from 'react'
import title from "../styles/Title.module.css"
import card from "../styles/Home.module.css"
import { getElementColor, typeList } from '@/utils/card'
import ScrollReveal from "scrollreveal"

export const Title = () => {
  
  const titleCard = useRef<HTMLDivElement>(null)
  useEffect(() => {
    ScrollReveal().reveal(titleCard.current as HTMLElement)
  })

  return (
    <div className={`${title.title}`} ref={titleCard}>
      
      <div className={title.intro}>
        <h1>Periodic Table of Elements</h1>
        <p>Click any element to see its properties!</p>
      </div>

      <div className={title.format}>
        <h2>Format:</h2>
        <div className={title.formats}>
          <div 
            className={card.element}
            style={{backgroundColor: "#444444"}}
          >
            <p className={card.atomic_number}> 1 </p>
            <p className={card.symbol}> H </p>
            <p className={card.name}> Hydrogen </p>
            <p className={card.atomic_mass}> 1.001 </p>
          </div>
          <div className={title.formatted}>
            <p className={title.atomic_number}> Atomic Number </p>
            <p className={title.symbol}> Symbol </p>
            <p className={title.name}> Element Name </p>
            <p className={title.atomic_mass}> Atomic Mass </p>
          </div>
        </div>
      </div>

      <div className={title.legend}>
        <h2>Legend:</h2>
        <div className={title.legends} >
          {typeList.map((type, index) => {
            return <p key={index}>
              <span className={title.indicator} style={{backgroundColor: getElementColor(type)}}></span>{type}
            </p>
          })}
        </div>
      </div>

    </div>
  )
}
