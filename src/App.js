
import './assets/css/App.css';
import TypeAheadCard from './components/cards/TypeAheadCard.js'

export default function App() {
  return (
    <>
    {/* <div className="App"> */}
      <div className="AppBackground"
        style={{
          backgroundImage: 'url(' + require('./assets/images/pattern3.png').default + ')',
        }}
      >
        <header className="App-header">
          Github API: User Search Box
          <p>Typeahead Sample</p>
        </header>
        <div className="CardContainer">
          <TypeAheadCard/>
          
        </div>
      </div>
    {/* </div> */}
    <footer className="AppFooter">
        <p>Made by <a href="http://github.com/Snipping-Tool">Carvey Lamosao </a>© 2021</p>
    </footer>
    </>
  );
}

