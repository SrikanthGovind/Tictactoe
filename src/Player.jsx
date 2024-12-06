import React from "react";
import { useState } from "react";
export default function Player({
  player,
  symbol,
  isactive,
  onhandleplayername,
}) {
  const [edit, setedit] = useState(false);
  const [change, setchange] = useState(player);

  function handlechange(event) {
    setchange(event.target.value);
  }

  function handleclick() {
    setedit((prev) => !prev);
    onhandleplayername(symbol, change);
  }

  let editedplayer = <span className="player-name">{change}</span>;
  let btn = "Edit";

  if (edit) {
    editedplayer = (
      <input
        type="text"
        value={change}
        onChange={handlechange}
        className="player-name"
      />
    );
    btn = "Save";
  }
  return (
    <>
      <li className={isactive ? "active" : undefined}>
        <span className="player">
          {editedplayer}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleclick}>{btn}</button>
      </li>
    </>
  );
}
