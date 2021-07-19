import { useState } from "react";

export default function useVisualMode(initial) {
  
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

// transition through forms
  function transition(mode, replace = false) {
    if (replace) {
      setHistory(prev => [...prev.slice(0, prev.length - 1), mode]);
    } else {
      setHistory(prev => [...prev, mode]);
    }
    setMode(mode);
  }
// function back - to go back in forms
  function back() {
    if (history.length > 1) {
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
      setMode(history[history.length - 2]);
    }
  }

  return { mode, transition, back };
}