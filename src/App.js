import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import saba from "./sounds/saba.mp3";
import agam from "./sounds/agam.mp3";
import nahawand from "./sounds/nahawand.mp3";
import bayaty from "./sounds/bayaty.mp3";
import sika from "./sounds/sika.mp3";
import hogaz from "./sounds/hogaz.mp3";
import rast from "./sounds/rast.mp3";
import kurd from "./sounds/kurd.mp3";

const mq = [
  "agam",
  "saba",
  "nahawand",
  "bayaty",
  "sika",
  "hogaz",
  "rast",
  "kurd",
];

function App() {
  const [show, setshow] = useState(false);
  const [currentAudio, setcurrentAudio] = useState(0);
  const [index, setindex] = useState(0);
  let currentlyPlayingAudio = null;

  useEffect(() => {
    // setcurrentindex(index)
  }, [index]);

  const getSound = (i) => {
    if (i === 0) return agam;
    if (i === 1) return saba;
    if (i === 2) return nahawand;
    if (i === 3) return bayaty;
    if (i === 4) return sika;
    if (i === 5) return hogaz;
    if (i === 6) return rast;
    if (i === 7) return kurd;
  };

  const playFile = () => {
    const random = Math.floor(Math.random() * mq.length);
    setindex(random);

    let audioPath;
    audioPath = `../public/sounds/${mq[index]}.mp3`;
    console.log("path", audioPath);

    stopFile();

    const audio = new Audio(getSound(index));
    setcurrentAudio(audio);
    console.log("play", currentAudio);
    audio.play();
  };

  const stopFile = () => {
    console.log("stop", currentlyPlayingAudio);
    if (currentAudio) {
      currentAudio.pause();
    }
  };
  // console.log("index", index);
  return (
    <div className="App">
      <button onClick={playFile}>paly</button>
      <button onClick={stopFile}>stop</button>
      <button onClick={() => setshow(!show)}>reveal</button>
      {show && <p>maqam: {mq[index]}</p>}
    </div>
  );
}

export default App;
