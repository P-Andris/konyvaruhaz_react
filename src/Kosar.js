import './Kosar.css';

function Kosar(props) {
    function darabszamNoveles() {
        props.darabszamNoveles(props.kosarElem);
    }
    
    function darabszamCsokkentes() {
        props.darabszamCsokkentes(props.kosarElem);
    }

    function elemTorlese() {
        props.elemTorlese(props.kosarElem);
    }

    // Ha már van az adott elem a kosárban, akkor növeld meg az adott könyv darabszámát. Ha nincs, akkor pedig a darabszám az 1 legyen.
    // Legyen egy plusz gomb, amim növeli, és egy mínusz gomb, ami csökkenti a darabszámot.
    // Legyen egy törlés gomb, ami törli a kosárból az elemet.
    return (
        <tr>
            <td>{props.kosarElem.cim}</td>
            <td>{props.kosarElem.szerzo}</td>
            <td>{props.kosarElem.ar}</td>
            <td>{props.kosarElem.db}</td>
            <button className='noveles' onClick={darabszamNoveles}>+</button>
            <button className='csokkenes' onClick={darabszamCsokkentes}>-</button>
            <button className='torles' onClick={elemTorlese}>X</button>
        </tr>
    );
}

export default Kosar;