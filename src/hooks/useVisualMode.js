import { useState } from "react";

export default function useVisualMode(initial) {
  
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    //console.log("===Transition mode from useVisualMode ", mode);
    //console.log("===replace from useVisualMode=== ", replace);
    if (replace) {
      //console.log("From if history", history);
      setHistory(prev => [...prev.slice(0, prev.length - 1), mode]);
      //console.log("From if - mode", mode);
    } else {
      //console.log("From else history", history);
      setHistory(prev => [...prev, mode]);
      //console.log("From else - mode", mode);
    }
    setMode(mode);
  }

  function back() {
    if (history.length > 1) {
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
      setMode(history[history.length - 2]);
    }
  }
  //console.log("mode from return", mode);
  return { mode, transition, back };
}