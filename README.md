# Kort om programmering
Lite basic bara

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
### Anrop
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
* Används ofta en gång
```JavaScript
var yta = function(b, h){
    return b * h;
}
```

## Fat Arrow funktion
* Javascript har utvecklats, ECMAScript 6 (ES6) är senaste versionen
* Med ES6 kan parenterser och måsvingar rationaliseras bort
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
```

## Variabler

Skapa minneutrymme och referera till det med ett namn 

```var``` eller ```let```? ECMAScript 6 (senaste), nearest function block and let is scoped to the nearest enclosing block

```javascript
var a = 'johan'; // eller let a = "johan";
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
let e = d.toString();
console.log(a + d.toString());
let d = b + c;
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
En bil kan heta Volvo - en property (tänk vara), car.name = 'Volvo';
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
    age: 57, 
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
Gör om (parse) text till objekt
```javascript
let text = '{"owner": "johan", "age": 57, "cars": [{"type": "Volvo", "color": "Svart", "year": 1998}, {"type": "Corvette", "color": "röd"}, {"type": "BMW"}]}';
var obj = JSON.parse(text); 
console.log(obj.cars[1].color);
```
