import { forwardRef, useImperativeHandle, useRef } from "react";

export const ResultModal =
    forwardRef<
        {
            open: () => void;
        },
        {
            remainingTime: number;
            targetTime: number;
            onReset: () => void;
        }
    >(
        function ResultModal(props, ref) {
            const dialog = useRef<HTMLDialogElement>(null);

            const userLost: boolean = props.remainingTime <= 0
            const formattedRemainingTime = (props.remainingTime / 1000).toFixed(2)
            const score = Math.round((1 - props.remainingTime / (props.targetTime * 1000)) * 100)

            useImperativeHandle(ref, () => ({
                open() {
                    dialog.current?.showModal();
                }
            }), []);

            return (
                <dialog ref={dialog} className="result-modal">
                    {userLost ? <h2>You lost!</h2> : <h2>Your score: {score}</h2>}
                    <p>The target time was <strong>{props.targetTime}</strong> seconds.</p>
                    <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
                    <form method="dialog" onSubmit={props.onReset}>
                        <button>OK</button>
                    </form>
                </dialog>
            );
        }
    );
