import './Konyv.css';

// Ez egy objektum, nem egy tömb:
/* const konyvObj = {
    cim: "Harry Potter",
    szerzo: "J.K.Rowling",
    ar: 5000
}; */

// Paraméternek bármilyen nevet adhatunk
function Konyv(props) {
    function kosarKezeles() {
        // console.log(props.konyvObj);
        // props.kosarKezelesFuggveny(props.konyvObj);
        
        // Az App.js kosárkezelésének hívása:
        props.kosarKezeles(props.konyvObj);
    }

    return (
        <div className="Konyv">
            <h3 className="cim">{props.konyvObj.cim}</h3>
            <p className="szerzo">{props.konyvObj.szerzo}</p>
            <p className="ar">{props.konyvObj.ar} Ft</p>
            {/* A Konyv komponens kosárkezelésének a hívása */}
            <button onClick={kosarKezeles}>Kosárba</button>
        </div>
    );
}

export default Konyv;