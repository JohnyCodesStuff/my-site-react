
import './App.css';
/*import Clock from './components/Clock';
import soundbass from "./assets/soundbass.wav"*/
import Header from './components/Header';
import PersistentCounter from './components/PersistentCounter';
import TabMenu from './components/TabMenu';
/*import Home from './components/Home';
import Search from './components/Search';
import Profile from './components/Profile';
*/


function App() {

  /*function play() {
    new Audio(soundbass).play()
  }   */

  return (
    <div> 
      <Header/>
      <PersistentCounter />
      <TabMenu />
    <div></div>
    </div>
  )
}

export default App; 
