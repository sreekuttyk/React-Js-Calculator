import './App.css';
import {React,useState} from 'react';
function App() {
 const [value,setValue]=useState("");
  const click=(e)=>{
 setValue(value+e.target.value);
  }
  const backSpace=()=>{
    setValue(value.slice(0,-1));
  }
  const calculate=()=>{
    setValue(eval(value));
  }
  const clear=()=>{
    setValue("");  
  }
  return (
   <div className="screen">
     <input type="text" id="text1" value={value} style={{width:240}}></input>
    <div className='row'>
    <button className="btn1" onClick={clear} >clear</button>
     <button className="btn2"  onClick={backSpace}>c</button>
     <button className="btn3" onClick={click} value="/">/</button>
    </div>
    <div className='row'>
     <button className="btn" onClick={click} value="7">7</button>
     <button className="btn" onClick={click} value="8">8</button>
     <button className="btn" onClick={click} value="9">9</button>
     <button className="btn2" onClick={click} value="*">*</button>
     </div>
     <div className='row'>
     <button className="btn" onClick={click} value="4">4</button>
     <button className="btn" onClick={click} value="5">5</button>
     <button className="btn" onClick={click} value="6">6</button>
     <button className="btn2" onClick={click} value="-">-</button>
     </div>
     <div className='row'>
     <button className="btn" onClick={click} value="1">1</button>
     <button className="btn" onClick={click} value="2">2</button>
     <button className="btn" onClick={click} value="3">3</button>
     <button className="btn2" onClick={click} value="+">+</button>
     </div>
     <div className='row'>
     <button className="btn" onClick={click} value="0">0</button>
     <button className="btn" onClick={click} value=".">.</button>
     <button className="btn1" onClick={calculate}>=</button>
     </div>
   </div>
  );
}
export default App;
