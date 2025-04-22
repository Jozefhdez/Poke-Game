import React from 'react'

function Actions({handleAttack}) {
  return (
        <div className = "container-ab">
        <div style={{ paddingTop: '30%'}}>
            <button className = "button-ab"></button>
        </div>
        <div style={{ paddingBottom: '30%'}}>
            <button className = "button-ab" onClick={handleAttack}></button>
        </div>
        </div>
  )
}

export default Actions