
import './App.css';
import Clock from './components/Clock';
import soundbass from "./assets/soundbass.wav"
import PersistentCounter from './components/PersistentCounter';


function App() {

  function play() {
    new Audio(soundbass).play()
  }   

  return (
    <div> 
      <Clock />  
      <PersistentCounter />
    </div>
  )
}

export default App; 
