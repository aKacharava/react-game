import {useRef, useState} from "react";

export default function Player() {
    const playerName = useRef<HTMLInputElement | null>(null);

    const [enteredPlayerName, setEnteredPlayerName] = useState<string|null>(null)

    function handleClick() {
        if (playerName.current) {
            setEnteredPlayerName(playerName.current.value);
        }
    }

    return(
        <section id="player">
            <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
            <p>
                <input ref={playerName} type="text" />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    )
}
