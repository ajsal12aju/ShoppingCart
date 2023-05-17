import { addToCart } from "./redux/action";
import { useDispatch } from "react-redux"; 
import "./App.css";

function App() { 
  const dispatch = useDispatch()
  const product ={
    name : 'oppof12',
    category:'mobile',
    price:'20000'
  }
  return (
    <div className="App">
      <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
}

export default App;
