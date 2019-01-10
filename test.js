var person = {
   owner: "johan", 
    age: 57, 
    cars: [
        {type: "Volvo", color: "Svart", year: 1998}, 
        {type: "Corvette", color: "röd"}, 
        {type: "BMW"},
        {type: "Saab"}
    ]
};

Object.keys(person.cars).forEach(function(key) {
    console.log(person.cars[key]); 
});

