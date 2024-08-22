import { forwardRef, useImperativeHandle, useRef } from "react";

export const ResultModal = forwardRef<{ open: () => void }, { result: string; targetTime: number }>(
    function ResultModal(props, ref) {
        const dialog = useRef<HTMLDialogElement>(null);

        useImperativeHandle(ref, () => ({
            open() {
                dialog.current?.showModal();
            }
        }), []);

        return (
            <dialog ref={dialog} className="result-modal">
                <h2>You {props.result}!</h2>
                <p>The target time was <strong>{props.targetTime}</strong> seconds.</p>
                <p>You stopped the timer with <strong>X seconds left.</strong></p>
                <form method="dialog">
                    <button>OK</button>
                </form>
            </dialog>
        );
    }
);
