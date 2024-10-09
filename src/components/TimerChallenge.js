import { useState,useRef } from "react";

const TimerChallenge = ({title, targetTime}) => {
    const [timerStarted, setTimerStarted] = useState(false) //the inicial value is false
    const [timerExpired, setTimerExpired] = useState(false)
    const timer = useRef()

    
    function handleStart(){
        timer.current = setTimeout(()=>{
                    setTimerExpired(true)
                    }, targetTime*1000)
        setTimerStarted(true) // true the timer started
    }

    function handleStop(){
        clearTimeout(timer.current)
        setTimerStarted(false)

    }
    return ( 
        <section id='challenge'>
            <h2>{title}</h2>
            {/*<p>{timerExpired? 'You lost!' : ''}</p>*/}
            {timerExpired&&<p>You lost!</p>} {/*when the vble timerExpired is true it put You lost!, if the vble is false don't put it */}
            <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} Challenge</button>
            <p>{timerStarted? 'Time is running..' : 'Timer inactive'}</p>
        </section>
     );
}
 
export default TimerChallenge;
