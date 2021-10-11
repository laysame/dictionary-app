import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App mt-5">
        <main>
            <Dictionary defaultKeyword={"sunset"}/>
        </main>
        <footer>This project was coded by Laysa Souza and open-source on <a href="https://github.com/laysame/dictionary-app">Github</a></footer>
    </div>
  );
}

export default App;
