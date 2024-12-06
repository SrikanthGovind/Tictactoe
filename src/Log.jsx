import React from 'react'

export default function Log({activelog}) {
  return (
        <ol id='log'>

        {activelog.map((ele)=>{
           return <li key={`${ele.square.row}${ele.square.col}`}>{ele.currplayer} Selected {ele.square.row},{ele.square.col} </li>
               })}

        </ol>
  )
}
