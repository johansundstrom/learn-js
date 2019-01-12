# Kort om programmering med JavaScript
Lite basic bara...

## Kompilering
* Programmeringsspråk är av männiksor påhittade språk
* Processorer förstår inte programmeringsspråk
* Kod från programmeringsspråk måste översättas till objektkod (typ ettor och nollor)
* För att kompilera javascript behövs en *javascript engine*
* *javacript engine* finns i alla webbläsare och startar ofta genom HTML för att arbeta nära med webbläsarens DOM
* *javacript engine* finns också för filsystem med populära NODE/NPM

## NODE/NPM
* <a href="http://nodejs.org">nodejs.org</a>

## Programmering
* Programmering handlar om att behandla data
* Data placeras i arbetsminnet via variabler

## Variabler
* Att reservera minneutrymme och refererar till det med ett namn
* Definiera variabel med ```var``` eller ```let```
* Två variabler med samma namn kan inte förekomma
* I de flesta programspråk brukar man tala om *scope* - alltså var variablen är tillgänglig
* Variabler som skapas i en funktion når inte utanför denna
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
        // parameter är nu = 2
    }
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
        // parameter = 2 i detta block
    }
    // parameter = 1 här
} 
```
* ```let``` är *scoped to the nearest enclosing block*

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

### Funktionsanrop
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
var yta = function(b, h){
    return b * h;
}
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
const myModule = require('functions/function.js');
let val = myModule.hello();     // val = "Hej"
```

### Testa booleska-, numeriska- och strängvärden
```javascript
let x = Boolean(0);
let y = Boolean(1);
console.log(x, y);
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
console.log(d);
```

### Array (serier av värden)
```javascript
let arr = [23, 54, 21, 8, 12, 42];
console.log(arr);
```
Peka ut 2:a (med start från index 0
```javascript
console.log(array[1]);
```
sorterad
```javascript
console.log(array.sort()); //Sorterad
```
Fallande
```javascript
console.log(array.reverse(); //Sorterad fallande
```

Antal element i array
```javascript
console.log(array.length);
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
while (i < 5);
```

## Objekt
Objekt är en variabel som innehåller variabler. 

### Objekt (kan bestå av properties och methods)
En bil kan vara en Volvo - en property (tänk vara), car.name = 'Volvo';
en bil kan starta - en method (tänk göra), car.start();

Exempel med endast properties (namn: värde)
```javascript
var car = {type: "Volvo", color: "black", year: 2013};
console.log(car.type);
```

Annat exempel - objekt med array
```javascript
var person = {
    owner: "johan", 
    age: 59, 
    cars: [
        {type: "Volvo", color: "Svart", year: 1998}, 
        {type: "Corvette", color: "röd"}, 
        {type: "BMW"}
    ]
};
```
Plocka ut RöD Corvette
```javascript
console.log(person.cars[1].color + " " + person.cars[1].type);
```
Lista alla bilar
```javascript
for (
i = 0; i < array.length; i++){
    console.log(person.cars[i].type);
};
```
Eller...
```javascript
Object.keys(person.cars).forEach(function(key) {
    console.log(person.cars[key]); 
});
```
Gör om (parse) text till objekt
```javascript
let text = '{"owner": "johan", "age": 59, "cars": [{"type": "Volvo", "color": "Svart", "year": 1998}, {"type": "Corvette", "color": "röd"}, {"type": "BMW"}]}';
let obj = JSON.parse(text); 
console.log(obj.cars[1].color);
```
