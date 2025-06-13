import { useImperativeHandle, useRef } from "react";

export default function ResultModel({ ref, targetTime, timeRemaining , onReset }) {
    const dialog = useRef();

    const formatedTimeRemaining = (timeRemaining / 1000).toFixed(2);
    const userLost = timeRemaining <= 0;
    const score = Math.round((1- timeRemaining/(targetTime * 1000))* 100); 

    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal();
        },
    }));

    return (
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
           { userLost && <h2>You lost</h2>}
           { !userLost && <h2>Your score: {score}</h2>}
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped at <strong>{formatedTimeRemaining} seconds</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
}