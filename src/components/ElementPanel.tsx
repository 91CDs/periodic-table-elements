import React from 'react'
import panel from '../styles/Panel.module.css'
import Image from 'next/image'


export const ElementPanel = ({element}: {element: ChemicalElement}) => {
  return (
    <div className={panel.panel}>
      <Image 
        src={element.bohr_model_image as string} 
        alt={element.source} 
        width={100} 
        height={100} 
      />
      <h1>{element.name}</h1>
      <p>Group {element.group} | Period {element.period} | {element.block} block</p>
      <p>{element.summary} <a href={element.source}>^1</a></p>

      <h2>Element Properties: </h2>
      <p> 
        <span className={panel.property}>Electron Affinity: </span> 
        <span>{element.electron_affinity}</span> 
      </p>
      <p> 
        <span className={panel.property}>Electron Configuration: </span> 
        <span>{element.electron_configuration_semantic}</span> 
      </p>
      <p> 
        <span className={panel.property}>Electronegativity: </span> 
        <span>{element.electronegativity_pauling}</span> 
      </p>
      <p> 
        <span className={panel.property}>Density: </span> 
        <span>{element.density}</span> 
      </p>
      <p> 
        <span className={panel.property}>Boiling Point: </span> 
        <span>{element.boil}</span> 
      </p>
      <p> 
        <span className={panel.property}>Melting Point: </span> 
        <span>{element.melt}</span> 
      </p>
      <p> 
        <span className={panel.property}>Molar Heat: </span> 
        <span>{element.molar_heat}</span> 
      </p>
    </div>
  )
}
