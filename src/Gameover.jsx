import React from 'react'

export default function Gameover({playerwinner,onhandlerestart}) {
  return (
    <div id='game-over'>
        <h2>Game over!</h2>
         {playerwinner && <p>{playerwinner} Won!</p>  }
         {!playerwinner && <p>It's a Draw!</p> }
        <p><button onClick={onhandlerestart}>Rematch</button></p>
    </div>
  )
}
