import React, { useEffect, useRef } from 'react'
import title from "../styles/Title.module.css"
import card from "../styles/Home.module.css"
import { getElementColor, typeList } from '@/utils/card'

export const Title = () => {
  const slideDown = { distance: "-150%", origin: "bottom", easing: "ease-in-out", cleanup: true };
  const slideUp = { distance: "-150%", origin: "top", easing: "ease-in-out", cleanup: true };

  const titleCard = useRef<HTMLDivElement>(null);
  const formatCard = useRef<HTMLDivElement>(null);
  const legendCard = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default
      if (titleCard.current) {
        sr().reveal(titleCard.current, slideDown)
      }
      if (formatCard.current) {
        sr().reveal(formatCard.current, {...slideUp, delay: 100})
      }
      if (legendCard.current) {
        sr().reveal(legendCard.current, {...slideUp, delay: 200})
      }
    }
    animate()
  },[])

  return (
    <div className={`${title.title}`}>
      
      <div className={title.intro} ref={titleCard}>
        <h1>Periodic Table of Elements</h1>
        <p>Click any element to see its properties!</p>
      </div>

      <div className={title.format} ref={formatCard}>
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

      <div className={title.legend} ref={legendCard}>
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
