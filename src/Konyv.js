import './Konyv.css';

// Ez egy objektum, nem egy tömb:
/* const konyvObj = {
    cim: "Harry Potter",
    szerzo: "J.K.Rowling",
    ar: 5000
}; */

// Paraméternek bármilyen nevet adhatunk
function Konyv(props) {
    function kosarba() {
        console.log(props.konyvObj);
        props.kosarKezelesFuggveny(props.konyvObj);
    }
    return (
        <div className="Konyv">
            <h3 className="cim">{props.konyvObj.cim}</h3>
            <p className="szerzo">{props.konyvObj.szerzo}</p>
            <p className="ar">{props.konyvObj.ar} Ft</p>
            <button onClick={kosarba}>Kosárba</button>
        </div>
    );
}

export default Konyv;