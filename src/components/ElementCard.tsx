import React from 'react'
import { getElementColor, roundNearest } from "../utils/card"
import card from "../styles/Home.module.css"
import { useElementID } from '@/hooks/elementID'

export const ElementCard = ({element, index}: {element: ChemicalElement, index: number}) => {
  const setID = useElementID()[1];

  function handleClickElement() {
    setID(index);
    console.log("clicked element", index);
  } 

  return (
    <div 
      className={card.element} 
      style={{ backgroundColor: getElementColor(element.category)}} 
      onClick={handleClickElement}
    >
      <p className={card.atomic_number}> {index + 1} </p>
      <p className={card.symbol}> {element.symbol} </p>
      <p className={card.name}> {element.name} </p>
      <p className={card.atomic_mass}> 
        {roundNearest(element.atomic_mass, 4)} 
      </p>
    </div>
  )
}
