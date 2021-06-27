import React, { useState, useEffect, useRef } from "react"
import Focus from "../component/Focus"
import Break from "../component/Break"
import soundfile from "../image/alarm.mp3"
import { Button } from '@material-ui/core';
import './Clock.css'
export default function Clock() {

    const [focusLength, setFocusLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [timerLabel, setTimerLabel] = useState('Focus');
    const [secondsLeft, setSecondsLeft] = useState(25 * 60);
    const [timerRunning, setTimerRunning] = useState(false);
    const [cycles, setCycles] = useState(0);
    const myAudio = useRef();
    const context = new AudioContext();

    const increamentFocus = () => {
      if (!timerRunning && focusLength < 60) {
        console.log(focusLength)
        setFocusLength(focusLength + 1)
        setSecondsLeft((focusLength + 1) * 60);
      }
    }
    const decreamentFocus = () => {
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
    const decreamentBreak = () => {
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
          setTimerLabel('Focus');
          setSecondsLeft(focusLength * 60);
          setCycles(cycles+1);
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
      setTimerLabel('Focus');
      setTimerRunning(false);
      myAudio.current.pause();
      myAudio.current.currentTime = 0;
    }

    const dismissAlarm = ()=>{
      myAudio.current.pause();
      myAudio.current.currentTime = 0;
    }

    return (
      <div className="Clock" id="Clock">
        <h1 className="title">Tomato Clock</h1>
        
        <div className="label-container">
          <Focus focusLength={focusLength} increamentFocus={increamentFocus} decreamentFocus={decreamentFocus}></Focus>
          <Break breakLength={breakLength} increamentBreak={increamentBreak} decreamentBreak={decreamentBreak}></Break>
        </div>
        <div className='timer-container'>
          <h1 id='timer-label'>{timerLabel} Times!</h1>
          <h3 id='time-left'>
            {minutes < 10 ? ("0" + minutes).slice(-2) : minutes}:{seconds < 10 ? ("0" + seconds).slice(-2) : seconds}
          </h3>

          <Button
            id='start_stop'
            onClick={timerRunning ? handleStop : handleStart}
          >
            Start/Stop
          </Button>
          <Button
            onClick={handleReset}
            id='reset'
          >
            Reset
          </Button>
          <Button onClick={dismissAlarm}>
            Dismiss Alarm
          </Button>
        </div>
        <audio
          id='beep'
          ref={myAudio}
          src={soundfile}
          type='audio'
        ></audio>
        <h2>Cycles finished : {cycles}, Congratulation!!!</h2>
      </div>
    )
  
}