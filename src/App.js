import React from 'react'
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
          {
              price:9990,
              title:'Mobile Phone',
              qty: 1,
              img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              id: 1
          },
          {
              price:999,
              title:'Watch',
              qty: 1,
              img: 'https://media.istockphoto.com/photos/a-silver-stainless-steel-analog-watch-picture-id1368179045?b=1&k=20&m=1368179045&s=170667a&w=0&h=a8LiiRDqKVZHLUFt_8iDQvqPfq1Bc7exK7Azdzl6awk=',
              id: 2
          },
          {
              price:20000,
              title:'TV',
              qty: 1,
              img: 'https://media.istockphoto.com/photos/modern-tv-on-living-room-picture-id1328642672?b=1&k=20&m=1328642672&s=170667a&w=0&h=qvGAotYLoM8wpw3XVURafojFqVSPdTgnACobZdH2ong=',
              id: 3
          }
      ]
       
    }// this.state
 }//consructor

 handleIncreaseQuantity = (product) => {
   const {products} = this.state;
   const index = products.indexOf(product);

   products[index].qty += 1;

   this.setState({
      products: products
   })
 }

 handledecreaseQuantity = (product) => {
  const {products} = this.state;
  const index = products.indexOf(product);

  if(products[index].qty == 0){
      return;
  }

  products[index].qty -= 1;

  this.setState({
     products: products
  })
}

handleOnDeleteProduct = (id) => {
  const {products} = this.state;
  const items = products.filter((item) => item.id != id);

  this.setState({
     products: items
  })
}

getCartCount = () => {
  const { products } = this.state;

  let count = 0;

  products.forEach((product) =>{
      count += product.qty;
  } )

  return count;
}

getCartTotal = () => {
  const {products} = this.state;

  let countTotal = 0;

  products.map((product) => {
    countTotal = countTotal + product.qty * product.price;
  })

  return countTotal;
}

  render(){
    const {products} = this.state;
  return (
    <div className="App">
      <h1>Cart</h1>
      <Navbar count = {this.getCartCount()} />
      <Cart
       products = {products}
       OnIncreaseQuantity = {this.handleIncreaseQuantity}
       OnDecreaseQuantity = {this.handledecreaseQuantity}
       OnDeleteProduct = {this.handleOnDeleteProduct}
      />
      <div style={{padding:10, fontSize:20}}>Total: {this.getCartTotal()}</div>
    </div>
  );}
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
