import React, {useState, useEffect, useRef} from 'react'
// import './styles.css'
import "./Clock.css"
const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
}

export default function CountdownApp() {
  const [secondsRemaining, setSecondsRemaining] = useState(getRandomNum())
  const [status, setStatus] = useState(STATUS.STOPPED)

  const handleStart = () => {
    setStatus(STATUS.STARTED)
  }
  const handleStop = () => {
    setStatus(STATUS.STOPPED)
  }
  const handleRandom = () => {
    setStatus(STATUS.STOPPED)
    setSecondsRemaining(getRandomNum())
  }
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1)
      } else {
        setStatus(STATUS.STOPPED)
      }
    },
    status === STATUS.STARTED ? 1000 : null,
    // passing null stops the interval
  )
  return (
    <div className="Clock">
      <h1>React Countdown Demo</h1>
      <button onClick={handleStart} type="button">
        Start
      </button>
      <button onClick={handleStop} type="button">
        Stop
      </button>
      <button onClick={handleRandom} type="button">
        Random
      </button>
      <div style={{padding: 20}}>{secondsRemaining}</div>
      <div>Status: {status}</div>
    </div>
  )
}

function getRandomNum() {
  return Math.floor(Math.random() * 20)
}


function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}