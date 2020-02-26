let myName : any;
myName=78;
myName='soumo';
let a : any[] = ["abc","cde","efg","eee78"];

enum color {
    red,
    blue
};

let myColor:color=color.blue;

console.log(myColor);

let car : any="BMW";
console.log(car);
car={brand: "BMW", seris:3};
console.log(car);

// Function
function mul(num1 : number, num2: number):number
{
    return num1*num2;
}

function hlo():string
{
    return "hello";
}

let b: (var1: number, var2: 
    number)=>number;
b=mul;

console.log(hlo());

//objects

let complex:{data:number[],output: (all: boolean)=>number[]}={
    data:[100,3.99,10],            
    output:function(all:boolean):number{
        return this.data;
    }
};