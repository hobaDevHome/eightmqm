// @ts-nocheck
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
  let audioPath;
  let random;

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
    setshow(false);
    random = Math.floor(Math.random() * mq.length);
    setindex(random);
    stopFile();
    const audio = new Audio(getSound(random));
    setcurrentAudio(audio);
    audio.play();
  };

  const replayFile = () => {
    setshow(false);
    stopFile();
    const audio = new Audio(getSound(index));
    setcurrentAudio(audio);
    audio.play();
  };

  const stopFile = () => {
    console.log("stop", currentlyPlayingAudio);
    if (currentAudio) {
      setshow(false);
      currentAudio.pause();
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: "gray",
        maxWidth: 1200,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={playFile}
        style={{
          width: "20%",
          height: 50,
          cursor: "pointer",
          color: "blueviolet",
          fontWeight: "bold",
          fontSize: 20,
          margin: 20,
        }}
      >
        paly
      </button>
      <button
        onClick={replayFile}
        style={{
          width: "20%",
          height: 50,
          cursor: "pointer",
          color: "blueviolet",
          fontWeight: "bold",
          fontSize: 20,
          margin: 20,
        }}
      >
        Re-paly
      </button>
      <button
        style={{
          width: "20%",
          height: 50,
          cursor: "pointer",
          color: "blueviolet",
          fontWeight: "bold",
          fontSize: 20,
          margin: 20,
        }}
        onClick={stopFile}
      >
        stop
      </button>
      <button
        style={{
          width: "20%",
          height: 50,
          cursor: "pointer",
          color: "blueviolet",
          fontWeight: "bold",
          fontSize: 20,
          margin: 20,
        }}
        onClick={() => setshow(!show)}
      >
        reveal
      </button>
      {show && (
        <p
          style={{
            width: "20%",
            height: 50,
            cursor: "pointer",
            color: "white",
            fontWeight: "bold",
            fontSize: 30,
            margin: 20,
          }}
        >
          maqam: {mq[index]}
        </p>
      )}
    </div>
  );
}

export default App;
