
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
      <div>
        <p>
        <iframe 
            width="360" 
            height="240"  
            src="https://www.youtube.com/embed/Z5NINTQfdJU?si=tb8oDj3U9r9rrH3S" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            justify-content="center"
            allowfullscreen>
        </iframe>
        </p>
      </div>
    </div>
  )
}

export default App; 
