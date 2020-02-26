"use strict";
var myName;
myName = 78;
myName = 'soumo';
var a = ["abc", "cde", "efg", "eee78"];
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
})(color || (color = {}));
;
var myColor = color.blue;
console.log(myColor);
var car = "BMW";
console.log(car);
car = { brand: "BMW", seris: 3 };
console.log(car);
// Function
function mul(num1, num2) {
    return num1 * num2;
}
function hlo() {
    return "hello";
}
var b;
b = mul;
console.log(hlo());
//objects
