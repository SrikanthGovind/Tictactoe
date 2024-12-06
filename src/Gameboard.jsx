

export default function Gameboard({updatedboard,handlesquare}) {
    
  return (
    <ol id='game-board'>
       {updatedboard.map((row,rowindex)=>{
          return <li key={rowindex}>
               <ol>
                {row.map((col,colindex)=>{
                  return  <li key={colindex}><button onClick={()=>handlesquare(rowindex,colindex)} disabled={col!==null} >{col}</button></li>
                })}
               </ol>
           </li>
       })}
    </ol>
  )
}
