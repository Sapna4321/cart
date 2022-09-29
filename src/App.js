import React from 'react'
import './App.css';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <h1>Cart</h1>
      <Cart/>
    </div>
  );
}

export default App;



//event handling

// export default function App(){

//   function showAlert(){
//     alert ("Hello");
//   }

//   function handleInputChange(e){
//     console.log(e.target.value);
//   }

//   return(
//     <div className='App'>
//       <button onClick = {showAlert} >Show Alert</button>
//       <input onChange = {handleInputChange} />
//     </div>
//   );
// }
