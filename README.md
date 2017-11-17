# Kort om programmering
Lite basic bara

* Block av kod kallas function.
* Funktion skapas enligt
```function myFunction();```
* Funktionen kan få indata, bearbeta dessa och mata ut ett resultat
* Funktionen anropas med dess namn
```myFunction();```
* Indata tillförs inom funktionens parentes
```myFunction(12, 34);```
* Inom funktionen finns ett return-uttryck som skickar ut data
```javascript
function myFunction(a, b) {
    let sum = a + b;
    console.log(sum);
    return sum;
}
```
* Allt inom { och } är funktionens innehåll
* Funktionen skapas genom inledande ```function``` därefter funktionens namn
* En funktion behöver inte kunna ta emot indata
* En funktion behöver inte kunna sända data
* Funktioner kan finnas inom en funktion
* Variabler som skapas inom en funktion är isolerade från yttervärlden
* Variabler som ska nås av alla funktioner deklareras därför utanför funktionerna


## Variabler
Skapa minneutrymme och referera till det med ett namn 
```var``` eller ```let```? ECMAScript 6 (senaste), nearest function block and let is scoped to the nearest enclosing block
var a = 'johan'; // eller let a = "johan";

### Testa boolseska-, numeriska- och strängvärden
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
