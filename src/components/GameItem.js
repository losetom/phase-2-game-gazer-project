import React from 'react'

function GameItem( {game} ) {
  return (
    <div>
        <ul id='games'>
            <li>{game.name}</li>
            <li>{game.image}</li>
            <li>{game.type}</li>
        </ul>
    </div>
  )
}

export default GameItem