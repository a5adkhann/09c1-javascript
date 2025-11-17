// console.log("Datatypes");

/*
Datatypes;
1) String  -- "" or ''
2) Number/Integer  -- numeric 
3) Boolean  -- true/false
4) Array  -- []
5) Object  -- {}
6) Function  -- ()
*/

var name = "Mudassir"; // String
var age = 22;  // Integer
let enrolled = true;  // Boolean
let courses = ["ADSE", "ENG"];  // Array

let address = {   // Object
    street: "123 Main St.",
    city: "Karachi",
    zip: 2345
}

let info = {
    street: {
        city: "Karachi"
    }
}

console.log(info.street.city);

// execution
console.log(name);  // string
console.log(age);   // integer
console.log(enrolled);  // boolean
console.log(courses[1]);  // array index 1
console.log(courses[0]);  // array index 0
console.log(address.street);  // object prop street
console.log(address.city);  // object prop city
console.log(address.zip);  // object prop zip


/*
- There are two types of custom functions.
1) Basic/Regular Function
2) Arrow Function
*/

function verification(a, b){
    console.log("You are Verified!!!");
    console.log(a+b);
}

// verification(2, 2);
// verification(20, 25);
// verification(45, 10);

// abc = () => {
//     console.log("You are Verified!!!");
// }

// abc();  









