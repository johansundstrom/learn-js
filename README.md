# Kort om programmering med JavaScript
Lite basic bara...

## Kompilering
* Programmeringsspråk är påhittade av människsor
* Processorer förstår inte programmeringsspråk
* Kod från programmeringsspråk måste översättas till objektkod (typ ettor och nollor)
* För att kompilera javascript behövs en *javascript engine*
* *javacript engine* finns i alla webbläsare och startar ofta genom en HTML-fil för att arbeta nära med webbläsarens DOM
* *javacript engine* finns också för filsystem med populära NODE/NPM

## NODE/NPM
* <a href="http://nodejs.org">nodejs.org</a>

## Programmering
* Programmering handlar om att behandla data
* Data placeras i arbetsminnet via variabler

## Variabler
* Sätt att reservera minneutrymme och referera till det med ett namn
* JavaScript definier variabel med ```var``` eller ```let```
* Två variabler som når varandra kan inte ha samma namn
* I de flesta programspråk brukar man tala om *scope* - alltså var variablen är tillgänglig i koden
* Variabler som skapas i en funktion nås bara i funktionen
* Variabler på övre nivå kan nå nedåt
* *Scope Rules* avgör detta

### let eller var?
* Nedanstående kod är ES5
```javascript
function test(){
    // inom block
    var parameter = 1;
    if (true) {
        // inom nytt block
        var parameter = 2; // samma variabel som innan if
        // parameter = 2 här
    }
    // parameter = 1 här
} 
```

* Nedanstående kod är EC6

```javascript
function test(){
    // inom block
    let parameter = 1;
    if (true) {
        // inom nytt block
        let parameter = 2; // INTE samma variabel som innan if
        // parameter = 2 här
    }
    // parameter = 1 här
} 
```
* ```let``` är *scoped to the nearest enclosing block*

## Konstanter
* Allokering av arbetsminne som programmet inte tillåts att ändras kallas konstanter
* Exempel, ```const veckoDagar = 7;```


## Skriva ut till användaren
* Funktionen ```console.log()``` skriver ut
* Exempel ```console.log('Test');```


## Funktioner

### Allmänt
* Inom programmering är kod oftast skiftlägeskänsliga 
* Block av kod kallas function
* Allt inom { och } är funktionens innehåll
* Funktionen skapas genom inledande ```function``` därefter funktionens namn
* En funktion behöver inte kunna ta emot indata
* En funktion behöver inte kunna lämns ut data
* Nya funktioner kan finnas inom en funktion
* Variabler som skapas inom en funktion är isolerade från yttervärlden
* Variabler som ska nås innifrån funktioner deklareras utanför funktionerna
* Funktion skapas enligt
```function minFunktion();```

### Indata
* Funktionen kan få indata, bearbeta dessa och mata ut ett resultat
* Indata tillförs inom funktionens parentes ```minFunktion(12, 34);```

### Bearbetning
* Inom ```{``` och ```}``` skrivs funktionens kod
* Funktion som konverterar Fahrenheit till Celcius
```javascript
function FtoC(celcius){
    fahrenheit = celcius * 9/5 +32
    return fahrenheit
}
```

### Utdata
* Inom funktionen finns oftast ett return-uttryck som skickar ut data
* Funktionens resultat returneras med ```return```
* Exempel på en returnering ```return myResult```

### Anropa funktion
* Funktionen anropas med dess namn ```minFunktion();``` eller ```minFunktion(12, 'text')```

### Exempel
```javascript
function summera(a, b) {
    let sum = a + b;
    return sum;
}

console.log(summera(34, 45));
```

## Anonyma Funktioner
* Funktion som inte behöver funktionsnamn
* Används oftast bara en gång
```JavaScript
var area = function(b, h){
    return b * h;
}

var golvYta = area(12, 5);
```

## Fat Arrow funktion
* Javascript har utvecklats, ECMAScript 6 (ES6) är senaste versionen
* Med ES6 kan parenteser och måsvingar rationaliseras bort
* ES5
```javascript
function kvadraten(sidan) {
  return sidan * 2
}

kvadraten(4);  // 8
```
* ES6
```javascript
var kvadraten = sidan => * 2

kvadraten(4);  // 8
```
* Samma kod, samma resultat

## Module export/require
* Funktioner kan läggas separat i andra filer
* Exporterande fil (functions/function.js) behöver ha följande format...
```javascript
export function hej() {
  return 'Hej';
}
```
* Importerande fil (start.js) behöver följande...
```javascript
const minModul = require('functions/function.js');
let val = minModul.hej();     // val = "Hej"
```

### Testa booleska-, numeriska- och strängvärden
```javascript
let x = Boolean(0);
let y = Boolean(1);

console.log(x, y);
console.log(!x);
```

```javascript
let a = 'johan';
let b = 123;
let c = 456;
console.log(a + b + c); //Blir fel
```
Lösning
```javascript
let d = b + c;
let e = d.toString() + a;
console.log(e);
```

## Array (serier av värden)
```javascript
let minArray = [23, 54, 21, 8, 12, 42];
console.log(minArray);
```

Peka ut 2:a (med start från index 0)
```javascript
console.log(minArray[1]);   //skriver ut 54
```

sorterad
```javascript
console.log(minArray.sort()); //Sorterad
```

Fallande
```javascript
console.log(minArray.reverse(); //Sorterad fallande
```

Antal element i array
```javascript
console.log(minArray.length);
```

## Räknare, Loopar
```Javascript
for ( i = 0; i < 10; i++ ){
    console.log(i);
};
```

Eller...
```Javascript
do {
    console.log(i);
    i++;
}
while (i < 10);
```

## Objekt
Objekt är en variabel som innehåller variabler och array 

### Objekt (kan bestå av *properties* och *methods*)
* *Property* utläses som "kan vara". En bil "kan vara" en Volvo ```car.name = 'Volvo';```
* *Method* utläses som "kan göra". En bil "kan startas" ```car.start();```
* Programmeringsmässigt skiljs *property* och *method* åt genom parentesen
* Parenter innebär att man kan ta emot indata
* Ett objekts innehåll definieras inom ```{``` och ```}```

### Skapa Objekt (två sätt)

## Skapa variabel som obekt
* Följande sätt kallas *Object Literal* då den både skapar och definierar objektet
```javascript
var car = {
    brand: "Volvo",
    type: "S70",
    color: "Svart",
    year: 2002
}
```
Annat sätt med samma resultat
```javascript
var car = new Object();
// Objektet är skapat, nu kan den populeras
car.brand = "Volvo";
car.type = "S70";
car.color = Svart;
car.year = "2002";
```

### Skriv ut objektets *property*
```javascript
console.log(car.type);
```

Annat exempel - objekt med array
```javascript
var owner = {
    name: "Johan", 
    age: 59, 
    cars: [
        {brand: "Volvo", color: "svart", year: 2002}, 
        {brand: "Chevrolet", type = "Corvette", color: "röd"}, 
        {brand: "BMW"}
    ]
};
```
Plocka ut "röd Corvette"
```javascript
console.log(owner.cars[1].color + " " + person.cars[1].type);
```
Lista alla bilar
```javascript
for (
i = 0; i < array.length; i++){
    console.log(owner.cars[i].brand);
};
```
Eller...
```javascript
Object.keys(owner.cars).forEach(function(key) {
    console.log(owner.cars[key]); 
});
```

### Gör om (parse) text till objekt
```javascript
let text = '{"name": "Johan", "age": 59, "cars": [{"brand": "Volvo", "color": "Svart", "year": 1998}, {"brand": "Corvette", "color": "röd"}, {"brand": "BMW"}]}';
let obj = JSON.parse(text); 
console.log(obj.cars[1].color);
```

### Gör om (stringify) objekt till text
```javascript

```

## Manipulera HTML med JS
```html
<input type="number" min="0" max="100" id="valueA" oninput="calculateSum()"> +
<input type="number" min="0" max="100" id="valueB" oninput="calculateSum()">
= <span id="sum"></span>
```
* Hämta value från #valueA ur DOM 
* Hämta value från #valueB ur DOM
* Dessa värden kommer som strängvariabler
* Genom parseFloat castas sträng till numeriskt värde
* Visa summan av dessa om det är ett numerisk värde
```javascript
function calculateSum() {
    let a = document.getElementById("valueA").value;
    let b = document.getElementById("valueB").value;
    
    let sum = parseFloat(a) + parseFloat(b);
    if (!isNaN(sum)) {
        document.getElementById("sum").innerHTML = sum.toString();
    }
}
```
