import './App.css';
import {useState,useEffect} from 'react';
import Item from './components/item'
import axios from 'axios';

function App() {
  const [text,setText]=useState("");
  const [todo,setTodo]=useState([]);

useEffect(()=>{
axios.get("http://localhost:5000/get-todo")
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err))
})


  return (
    <div className="App">
   <div className="container">
     <h1>TODO APP</h1>
     <div className="top">
      <input type="text" placeholder="write something..."
      value={text}
      onChange={(e)=>setText(e.target.value)}/>
      <div className='add'>Add</div>

     </div>
     <div className='list'>
       <Item/>
     </div>
   </div>

    </div>
  );
}

export default App;
