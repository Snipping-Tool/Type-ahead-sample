
import './assets/css/App.css';
import TypeAheadCard from './components/cards/TypeAheadCard.js'

export default function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        Github API:  Users (Typeahead Sample)
        <p>by Snipping-Tool</p>
      </header>
      <TypeAheadCard/>
    </div>
    </>
  );
}

