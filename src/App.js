import logo from './logo.svg';
import './App.css';
import Class_01 from "./components/01_class"
import Class_02 from './components/02_class';
function App() {
  return (
    <div className="App">
    <Class_01 msg="This is a Prop" >
      <p>this is children of this above component</p> 
    </Class_01>
    <Class_02  array = {["apple","banana","rose","pineapple"]} />
    </div>
  );
}

export default App;
