import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Match = () => {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);

  return (
    <>
      <button onClick={() => setMatch((prev) => !prev)}>Match</button>
      <div>{match ? sign.match : ""}</div>
    </>
  );
};

export default Match;
