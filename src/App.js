
import './App.css';
import Player from './components/Player';
import TimerChallenge from './components/TimerChallenge';

function App() {
  return (
    <> {/*don't use div bc div has default css*/}
      
      <Player/>
      <div style={{display:'flex', justifyContent: 'center'}}>
      <TimerChallenge title="Easy" targetTime = {1} />
      <TimerChallenge title="Not easy" targetTime = {5}/>
      <TimerChallenge title="Getting tough" targetTime = {10}/>
      <TimerChallenge title="Pros only" targetTime = {15} />
      </div>
    </>
  );
}

export default App;
