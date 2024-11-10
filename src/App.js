
import './App.css';
/*import Clock from './components/Clock';*/
import soundbass from "./assets/soundbass.wav"
import Header from './components/Header';
import PersistentCounter from './components/PersistentCounter';


function App() {

  /*function play() {
    new Audio(soundbass).play()
  }   */

  return (
    <div> 
      <Header/>
      <PersistentCounter />
    <div></div>  
    </div>
  )
}

export default App; 
