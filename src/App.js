
import './App.css';
import Article from './components/Article';
import ArticleBox from './components/ArticleBox';
import Clock from './components/Clock';

function App() {
  return (
    <div>
      <Clock />
      <Article title="Tytuł komponentu funkcyjnego" description="Opis funkcyjny 1" />
      <ArticleBox title="Tytuł 1" description="Opis 1" />
      <ArticleBox title="Tytuł 2" description="Opis 2" />
      <ArticleBox title="Tytuł 3" description="Opis 3" />
      <ArticleBox />
      <div>
        <p></p>
      </div>
    </div>
  )
}

export default App; 
