import React from "react";
import GameItem from "./GameItem";

function GamesList ({ games }) {
    const gamesList = games.map((game) => (
        <GameItem
            key={game.id}
            game={game}
        />
    ));
    return (
    
        <div>{gamesList}</div>
        
    )
}

export default GamesList;