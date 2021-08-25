import './App.css';
import SearchBar from './components/search-bar'
import BoardGameList from './components/boardgame-list';

function App() {
  return (
    <div>
      <div className ="text-center">
        <h1 className="title">Board Game Upgrader</h1>
        <h5>Build out your game shelf. We'll help you take it up a notch:</h5>
      </div>
      <SearchBar />
      <BoardGameList/>
    </div>
  ) 
}

export default App;
