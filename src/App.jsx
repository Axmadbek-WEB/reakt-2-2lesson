
import img from './assets/img.jpg'
import './App.css'
import { useState } from 'react';
function Hidden(){
  const img = document.getElementById("img")
  img.style.display="none"
}
function Show(){
  const img = document.getElementById("img")
  img.style.display="block"
}


function Counter() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const [count, setCount] = useState(0);

  return (

    <>
      <h1>Counter</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div><hr />


      <div className="">
        <h1>Hidden Component</h1>
        <div className="">
          <button onClick={Hidden}>Hidden</button>
          <button onClick={Show}>Show</button>
        </div>
        <p>Hello my name is marslikbola</p>
        <img src={img} alt="" style={{ width: '400px' }} id='img'/>
      </div><hr />


      <div className="">
        <h1>Input Change</h1>
        <div class="form-control">
          <input class="input input-alt" placeholder="Cristiano Rona  "value={text} onChange={handleChange} required="" type="text" />
          <span class="input-border input-border-alt"></span>
        </div>
        <h1>Your Text:{text}</h1>
      </div>

      
    </>
  );
}

export default Counter;




