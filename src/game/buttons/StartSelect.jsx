import React from 'react'

function StartSelect({handleSelectPokemon}) {
  return (
        <div style={{ paddingTop: '30%'}}>
        <div className = "container-ss">
            <button className = "button-ss" onClick={() => handleSelectPokemon()}></button>
            <button className = "button-ss"></button>
        </div>
        <div className = "container-text-ss">
            <div className = "text-ss">SELECT</div>
            <div className = "text-ss">START</div>
        </div>
        </div>
  )
}

export default StartSelect