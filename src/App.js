
import './App.css';
import Article from './components/Article';
import ArticleBox from './components/ArticleBox';
import Clock from './components/Clock';
import HandleEvent from './components/HandleEvent';
import soundbass from "./assets/soundbass.wav"


function App() {

  function play() {
    new Audio(soundbass).play()
  }   

  return (
    <div>
      <Clock />
      <Article title="Tytuł komponentu funkcyjnego" description="Opis funkcyjny 1" />
      <ArticleBox title="Tytuł 1" description="Opis 1" />
      <ArticleBox title="Pusty artykuł"/>
      <HandleEvent />
      <div>
        <p></p>
      </div>
      <div>
        <p>
        <button onClick={play}>
          Włącz BASS
        </button>
        </p>
      </div>
    </div>
  )
}

export default App; 
