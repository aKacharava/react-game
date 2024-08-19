import Player from "./components/Player/Player.tsx";

function App() {
    return (
        <div id={"content"}>
            <header>
                <h1>The <em>almost</em> final countdown</h1>
                <p>Stop the timer when the time is almost expired to get the best score</p>
            </header>
            <Player />
            <div id="challenges"></div>
        </div>
    )
}

export default App
