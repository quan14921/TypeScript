"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello");
const a = 30;
const b = 40;
const myName = "Trần Hồng Quân";
const myAge = 20;
const status = true;
const myObj = { id: 1, name: "Quân" };
const objectArr = [{ id: 1, name: "Quân" }, { id: 2, name: "Quân" }];
function sum(numA, numB) {
    return numA + numB;
}
sum(a, b);
console.log(sum(a, b));
const getProducts = (products) => {
    const result = products.map(item => ` <div>${item.name}</div>`);
};
getProducts([{ id: 1, name: "A" }, { id: 2, name: "B" }]);
//# sourceMappingURL=app.js.map