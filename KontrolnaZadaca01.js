//1 (3 BODA)
//Napisi funkciju koja ispisuje parne brojeve od 0 do 100 (ukljucujuci 100)
function ispisiParneBrojeve() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
console.log(ispisiParneBrojeve())

//2 (3 BODA)
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u dan u tjednu. Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Ponedjeljak";
//INPUT: 5; OUTPUT: "Petak"; 

function pretvoriUnos() {
    let dan;

    switch (dan) {
        case 1:
            dan = "Ponedjeljak";
            break;
        case 2:
            dan = "Utorak";
            break;
        case 3:
            dan = "Srijeda";
            break;
        case 4:
            dan = "Četvrtak";
            break;
        case 5:
            dan = "Petak";
            break;
        case 6:
            dan = "Subota";
            break;
        case 7:
            dan = "Nedjelja";
            break;
        default:
            dan = "Neispravan unos";
    }

    return dan;
}

console.log(pretvoriUnos(1));
console.log(pretvoriUnos(5));

//3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere ne uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao";
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 35)

function okreniString(string) {
    let okrenutiString = "";
    let brojCharactera = 0;

    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] !== " ") {
            okrenutiString += string[i];
            brojCharactera++;
        }
    }

    return (okrenutiString, brojCharactera);
}

console.log(okreniString("Pisanje zadatka nije jednostavan posao"));

//4 (4 BODA)
//Napisi funkciju koja vraca najkraci kljuc u danom objektu
//INPUT: somePeople
//OUTPUT: "Ada"

const somePeople = {
    Donald: "Knuth",
    Bjarne: "Stroustrup",
    Ada: "Lovelace",
    Kent: "Beck",
    Martin: "Fowler",
    Erich: "Gamma"
}

function dajNajKraciKljuc(obj) {
    let najKraciKljuc = Object.keys(obj)[0];

    for (const key in obj) {
        if (key.length < najKraciKljuc.length) {
            najKraciKljuc = key;
        }
    }

    return najKraciKljuc;
}

console.log(dajNajKraciKljuc(somePeople))

//5 (4 BODA)
//Napisi funkciju u obliku function expressiona koja vraca proste brojeve
//INPUT: [3, 4, 5, 8, 11]
//OUTPUT: [3, 5, 11]

//ZAMJENA ZA 5 (4 BODA)
//Napisi funkciju u obliku arrow functiona koja kvadrira i vraca dane inpute
//INPUT: [2, 4, 6, 0, 1]
//OUTPUT: [4, 16, 36, 0, 1]

//6 (4 BODA)
//Napisi funkciju koja vraca sve dogadaje koji su se dogodili prije od vrijednosti iz ulaznog parametra
const someEvents = [
    {
        eventName: "Izasla je Java",
        eventYear: 1995,
    },
    {
        eventName: "Izasao je C#",
        eventYear: 2000,
    },
    {
        eventName: "Izasao je Python",
        eventYear: 1991,
    },
    {
        eventName: "Izasao je C++",
        eventYear: 1985,
    },
    {
        eventName: "Izasao je JavaScript",
        eventYear: 1995,
    },
];
//INPUT: (someEvents, 1992)
//OUTPUT: [{eventName: "Izasao je Python", eventYear: 1991}, {eventName: "Izasao je C++", eventYear: 1985}]