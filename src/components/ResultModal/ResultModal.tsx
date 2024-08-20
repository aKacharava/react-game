import React, {forwardRef} from "react";

export const ResultModal = forwardRef(function ResultModal(
    props: {
        result: string,
        targetTime: number,
    },
    ref: React.LegacyRef<HTMLDialogElement>
) {
    return (
        <dialog ref={ref} className="result-modal" open>
            <h2>You {props.result}!</h2>
            <p>The target time was <strong>{props.targetTime}</strong> seconds.</p>
            <p>you stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>OK</button>
            </form>
        </dialog>
    )
})
