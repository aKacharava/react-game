import {useRef, useState} from "react";

export default function TimerChallenge(
    props: {
        title: string,
        targetTime: number
    }
) {
    const [timerExpired, setTimerExpired] = useState(false)
    const [timerStarted, setTimerStarted] = useState(false)

    const timer = useRef<number | undefined>(undefined);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, props.targetTime * 1000)

        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current)
    }

    return(
        <section className="challenge">
            <h2>{props.title}</h2>
            {timerExpired && <p>Timer expired, you lost.</p>}
            <p className="challenge-time">
                {props.targetTime} second{props.targetTime !== 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : ''}>
                {timerStarted ? 'Time is running...' : 'Time inactive'}
            </p>
        </section>
    )
}
