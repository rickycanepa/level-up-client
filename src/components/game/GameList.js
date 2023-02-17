import React, { useEffect, useState } from "react"
import { getGames } from "../../managers/GameManager.js"
import { useNavigate } from "react-router-dom"

export const GameList = (props) => {
    const [ games, setGames ] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    return (
        <article className="games">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                navigate({ pathname: "/games/new" })
                }}
                >Register New Game</button>
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.name}</div>
                        <div className="game__players">{game.min_player} players needed</div>
                        <div className="game__skillLevel">Maximum of {game.max_player} players</div>
                    </section>
                })
            }
        </article>
    )
}