import React, { useEffect, useState } from "react";
import GameBoard from "./Components/GameBoard";
import GameOver from "./Components/GameOver";
import game from './game/game'
export default function MemoryGame(){

    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] =  useState([])

    useEffect(()=>{
        setCards(game.createCardsFromTechs())
    },[])

    function restart(){
        setGameOver(false)
    }

    return(
        <div>
            <GameBoard cards={cards}></GameBoard>
            <GameOver show={gameOver} handleRestart={restart}></GameOver>
        </div>
    )
}