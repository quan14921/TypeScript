
import ReactDOM from 'react-dom'

const myName: string = "Trần Hồng Quân";
const myStatus: boolean = true;
const myAge: number = 20;
const product: {id: number, name: string} = {id: 1, name: "A"};

ReactDOM.render(
<div>
  <h1>Hello</h1>
  <div>{myStatus ?"Quân trân" : "Trần quân"}</div>
  <div>{myAge}</div>
  <div>{product.name}</div>
</div>,document.querySelector('#root')
);
