import './App.css';
import Konyv from './Konyv';
import Kosar from './Kosar';
import { useState } from 'react';
import KosarModell from './modell/kosarModell';

const konyvTomb = [
  {
    id: 1,
    cim: "Harry Potter és a bölcsek köve",
    szerzo: "J.K.Rowling",
    ar: 5000
  },
  {
    id: 2,
    cim: "Harry Potter és a halál ereklyéi",
    szerzo: "J.K.Rowling",
    ar: 10000
  },
  {
    id: 3,
    cim: "80 év alatt a Föld körül",
    szerzo: "Bud Spencer",
    ar: 8000
  }
];

function App() {
  const [osszesKonyv, setOsszesKonyv] = useState(0);
  const [osszAr, setOsszAr] = useState(0);
  const [kosarTomb, setKosarTomb] = useState([]);
  const [kosarElemDb, setKosarElemDb] = useState(0);

  // KosarModell osztály példányosítása:
  const kosarmodell = new KosarModell(kosarTomb);
  
  function kosarKezeles(adat) {
    // console.log(adat);

    /*
    state - reprezentálják az oldal állapotát
    befrissítjük az oldal vonatkozó részét
    */

    // Beletesszük a kosárba a könyvet:
    // kosarTomb.push(adat);
    kosarmodell.setKosar(adat);
    setKosarTomb(kosarmodell.getKosar());
    console.log(kosarTomb);

    // Számoljuk meg, hogy hány könyvet tettünk a kosárba:
    // db++;
    // setDb(db + 1);
    // console.log(db);
    setOsszesKonyv(kosarmodell.getKonyvDarab());

    // A végösszeghez hozzáadja a könyv árát:
    setOsszAr(kosarmodell.getOsszeg());
    // console.log(adat.ar);

    setKosarElemDb(kosarmodell.getKosarElemDb());
  }

  function darabszamNoveles(adat) {
    kosarmodell.darabszamNoveles(adat)
    setKosarElemDb(kosarmodell.getKosarElemDb());
  }
  
  function darabszamCsokkentes(adat) {
    kosarmodell.darabszamCsokkentes(adat);
    setKosarElemDb(kosarmodell.getKosarElemDb());
  }

  function elemTorlese() {

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <section>
        <p>A kosárba rakott könyvek száma: {osszesKonyv}</p>
        <p>A könyvek ára összesen: {osszAr}</p>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Cím</th>
              <th>Szerző</th>
              <th>Ár</th>
              <th>Darab</th>
            </tr>
          </thead>
          <tbody>
            {kosarTomb.map((kosarElem, id) => {
              return (<Kosar kosarElem = {kosarElem} key = {id} darabszamNoveles = {darabszamNoveles} darabszamCsokkentes = {darabszamCsokkentes} elemTorlese = {elemTorlese}/>)
            })}
          </tbody>
        </table>
      </section>
      <article>
        {
          konyvTomb.map((konyv, id) => {
              return (<Konyv konyvObj = {konyv} key = {id} kosarKezeles = {kosarKezeles}/>)
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
