import {useRef, useState} from "react";
import {ResultModal} from "../ResultModal/ResultModal.tsx";


export default function TimerChallenge(
    props: {
        title: string,
        targetTime: number
    }
) {
    const [timeRemaining, setTimeRemaining] = useState<number>(props.targetTime * 1000)

    const timer = useRef<number | undefined>(undefined)
    const dialog = useRef<{ open: () => void } | null>(null)

    const timerIsActive: boolean = timeRemaining > 0 && timeRemaining < props.targetTime * 1000

    if (timeRemaining <= 0) {
        handleStop()
        dialog.current?.open()
    }

    function handleReset() {
        setTimeRemaining(props.targetTime * 1000)
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining: number) => {
                return prevTimeRemaining - 10
            });
        }, 10)
    }

    function handleStop() {
        dialog.current?.open()
        clearInterval(timer.current)
    }

    return(
        <>
            <ResultModal
                ref={dialog}
                remainingTime={timeRemaining}
                targetTime={props.targetTime}
                onReset={handleReset}
            />
            <section className="challenge">
                <h2>{props.title}</h2>
                <p className="challenge-time">
                    {props.targetTime} second{props.targetTime !== 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : ''}>
                    {timerIsActive ? 'Time is running...' : 'Time inactive'}
                </p>
            </section>
        </>
    )
}
