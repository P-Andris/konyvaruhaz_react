// import logo from './logo.svg';
import './App.css';
import Konyv from './Konyv';
// <img src={logo} className="App-logo" alt="logo" />

const konyvTomb = [
  {
    cim: "Harry Potter és a bölcsek köve",
    szerzo: "J.K.Rowling",
    ar: 5000
  },
  {
    cim: "Harry Potter és a halál ereklyéi",
    szerzo: "J.K.Rowling",
    ar: 10000
  },
  {
    cim: "80 év alatt a Föld körül",
    szerzo: "Bud Spencer",
    ar: 8000
  }
];

function App() {
  function kosarKezeles(adat) {
    console.log(adat);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <article>
        {
          konyvTomb.map((konyv, id) => {
              return (<Konyv konyvObj = {konyv} key = {id} kosarKezelesFuggveny = {kosarKezeles}/>)
            }
          )
        }
        {/* <Konyv konyvObj = {konyvTomb[0]}/>
        <Konyv konyvObj = {konyvTomb[1]}/>
        <Konyv konyvObj = {konyvTomb[2]}/> */}
      </article>
      <footer>
        <p>Piller András</p>
      </footer>
    </div>
  );
}

export default App;
