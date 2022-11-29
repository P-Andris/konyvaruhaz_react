class KosarModell {
    #kosar = [];
    #db;
    #osszAr;
    constructor(kosar) {
        this.#kosar = kosar;
        this.osszAr = 0;
        this.darabszam = 0;
    }

    getKosar() {
        return this.#kosar;
    }

    setKosar(adat) {
        // Keresd meg, hogy van-e adat.id indexű elem!
        // Ha nincs, akkor az adat.db = 1
        // Különben az adott indexű elem darabszámát kell megnövelni
        ;
        const eredmeny = this.#kosar.findIndex((elem) => {
            return elem.id === adat.id;
        });
        if(eredmeny >= 0) {
            this.#kosar[eredmeny].db += 1;
        }
        else {
            this.#kosar.push(adat);
            this.#kosar[this.#kosar.length - 1].db = 1;
        }
        this.#db = eredmeny;
    }
    
    getOsszeg() {
        let osszeg = 0;
        this.#kosar.forEach((elem) => {
            osszeg += elem.ar;
        });
        this.#osszAr = osszeg;
        return this.#osszAr;
    }

    getKonyvDarab() {
        return this.#kosar.length;
    }

    getKosarElemDb() {
        return this.#db;
    }

    darabszamNoveles(adat) {
        adat.db += 1;
        this.#db = adat.db;
    }
    
    darabszamCsokkentes(adat) {
        adat.db -= 1;
        this.#db = adat.db;
    }
}

export default KosarModell;