function runme() {
    // let a = 'johan';
    // var b = 123;
    // let c = 456;

    // let d = b + c;
    // //let e = d.toString();
    // console.log(a + d.toString());

    let array = [23, 54, 21, 8, 12, 42];
    console.log(array);
    console.log(array[1]);
    console.log(array.sort());

    console.log(array.length);
    console.log(array.reverse());

    var person = {
        "owner": "johan", 
        "age": 57, 
        "cars": [
            {type: "Volvo", color: "Svart", year: 1998}, 
            {type: "Corvette", color: "röd"}, 
            {type: "BMW"}
        ]
    };


    console.log(person.cars[1].color + " " + person.cars[1].type);
 
    for (
    i = 0; i < array.length; i++){
        //console.log(person.cars[i].type);
    };

    let text = '{"owner": "johan", "age": 57, "cars": [{"type": "Volvo", "color": "Svart", "year": 1998}, {"type": "Corvette", "color": "röd"}, {"type": "BMW"}]}';
    var obj = JSON.parse(text); 
    console.log(obj.cars[1].color);

    myFunction(23, 45);

    function myFunction(a, b) {
        var sum = a + b;
        console.log(sum);
        return sum;
    };
};

function clicked(){
    document.getElementById("demo").innerHTML = "Clicked";
    console.log("clicked");
};
