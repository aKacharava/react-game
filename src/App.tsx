import Player from "./components/Player/Player.tsx";
import TimerChallenge from "./components/TimerChallenge/TimerChallenge.tsx";

function App() {
    return (
        <div id={"content"}>
            <header>
                <h1>The <em>almost</em> final countdown</h1>
                <p>Stop the timer when the time is almost expired to get the best score</p>
            </header>
            <Player />
            <div id="challenges">
                <TimerChallenge title="Easy" targetTime={1} />
                <TimerChallenge title="Medium" targetTime={5} />
                <TimerChallenge title="Hard" targetTime={10} />
                <TimerChallenge title="Extreme" targetTime={15} />
            </div>
        </div>
    )
}

export default App
