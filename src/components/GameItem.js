import React from 'react'

function GameItem( {game} ) {
  return (
    <div>
        <ul id='games'>
            <li>{game.name}</li>
            <li>{game.type}</li>
                {game.image}
        </ul>
    </div>
  )
}

export default GameItem;