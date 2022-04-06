import React from 'react'

function Coins({icon, name , price , symbol}) {
  return (
    <div>
        <img src={icon} alt="logo" />
        <p>{name}</p>
        <p>{price}</p>
        <p>{symbol}</p>
    </div>
  )
}

export default Coins