//global scope / window scope {
var a = 1;

// block scope {
function tes(a) {
    console.log(a);
}
//}

tes(a);
console.log(a);
//}