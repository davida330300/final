import React, { useState, useEffect, useRef } from "react"
import Focus from "../component/Focus"
import Break from "../component/Break"
import soundfile from "../image/alarm.mp3"
import './Clock.css'
export default function Clock() {

    const [focusLength, setFocusLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [timerLabel, setTimerLabel] = useState('Session');
    const [secondsLeft, setSecondsLeft] = useState(25 * 60);
    const [timerRunning, setTimerRunning] = useState(false);
    const myAudio = useRef();
    const context = new AudioContext();

    const increamentFocus = () => {
      if (!timerRunning && focusLength < 60) {
        setFocusLength(focusLength + 1)
        setSecondsLeft((focusLength + 1) * 60);
      }
    }
    const decrementFocus = () => {
      if (!timerRunning && focusLength > 1) {
        setFocusLength(focusLength - 1)
        setSecondsLeft((focusLength - 1) * 60);
      }
    }
    const increamentBreak = () => {
      if (!timerRunning && breakLength < 60) {
        setBreakLength(breakLength + 1)
      }
    }
    const decrementBreak = () => {
      if (!timerRunning && breakLength > 1) {
        setBreakLength(breakLength - 1)
      }
    }

    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;

    useEffect(() => {
      const handleSwitch = () => {
        if (timerLabel === 'Focus') {
          setTimerLabel('Break');
          setSecondsLeft(breakLength * 60);
        } else if (timerLabel === 'Break') {
          setTimerLabel('Session');
          setSecondsLeft(focusLength * 60);
        }
      }

      let countdown = null;
      if (timerRunning && secondsLeft > 0) {
        countdown = setInterval(() => {
          setSecondsLeft(secondsLeft - 1);
        }, 1000);
      } else if (timerRunning && secondsLeft === 0) {
        countdown = setInterval(() => {
          setSecondsLeft(secondsLeft - 1);
        }, 1000);
        myAudio.current.play();
        handleSwitch();
      } else {
        clearInterval(countdown);
      }
      return () => clearInterval(countdown);
    },
      [timerRunning, secondsLeft, timerLabel, breakLength, focusLength, myAudio]);

    const handleStart = () => {
      context.resume();
      setTimerRunning(true);
    }

    const handleStop = () => {
      setTimerRunning(false);
    }

    const handleReset = () => {
      setFocusLength(25);
      setBreakLength(5);
      setSecondsLeft(25 * 60);
      setTimerLabel('Session');
      setTimerRunning(false);
      myAudio.current.pause();
      myAudio.current.currentTime = 0;
    }

    return (
      <div className="Clock" id="Clock">
        <h1>Tomato Clock</h1>
        <div className="label-container">
          <Focus focusLength={focusLength} increamentFocus={increamentFocus} decrementFocus={decrementFocus}></Focus>
          <Break breakLength={breakLength} increamentBreak={increamentBreak} decrementBreak={decrementBreak}></Break>
        </div>
        <div className='timer-container'>
          <h2 id='timer-label'>{timerLabel}</h2>
          <h3 id='time-left'>
            {minutes < 10 ? ("0" + minutes).slice(-2) : minutes}:{seconds < 10 ? ("0" + seconds).slice(-2) : seconds}
          </h3>

          <button
            id='start_stop'
            onClick={timerRunning ? handleStop : handleStart}
          >
            Start/Stop
                </button>
          <button
            onClick={handleReset}
            id='reset'
          >
            Reset
                </button>
        </div>
        <audio
          id='beep'
          ref={myAudio}
          src={soundfile}
          type='audio'
        ></audio>

      </div>
    )
  
}