export {};

console.log("hello");

const a: number = 30;
const b: number = 40;

const myName: string = "Trần Hồng Quân";
const myAge : number = 20;
const status : boolean = true;
const myObj: User = {id: 1, name: "Quân"};

interface User{
    id: number, // required
    name: string// required
}

const objectArr: User[] = [{id: 1, name: "Quân"}, {id: 2, name: "Quân"}]


function sum(numA: number , numB: number): number{
    return numA + numB;
}
sum(a,b)
console.log(sum(a,b));



type Product ={
    id: number,
    name: string
}
const getProducts = <T extends Product>(products: T[]) =>{
    const result = products.map(item =>` <div>${item.name}</div>`)
}
getProducts([{id: 1,name:"A"}, {id: 2, name: "B"}]);
