
import './App.css';
import Article from './components/Article';
import ArticleBox from './components/ArticleBox';

function App() {
  return (
    <div>
      <Article title="Tytuł komponentu funkcyjnego" description="Opis funkcyjny 1" />
      <ArticleBox title="Tytuł 1" description="Opis 1" />
      <ArticleBox title="Tytuł 2" description="Opis 2" />
      <ArticleBox title="Tytuł 3" description="Opis 3" />
    </div>
  )
}

export default App; 
