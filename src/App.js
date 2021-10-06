import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src="./book-logo.png" alt="logo"/>
      </header>
        <main>
            <Dictionary defaultKeyword={"sunset"}/>
        </main>
        <footer>Coded by Laysa Souza</footer>
    </div>
  );
}

export default App;
