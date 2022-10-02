import React from 'react'
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import { getFirestore, collection, onSnapshot, addDoc, doc, updateDoc, deleteDoc, query, where} from 'firebase/firestore';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
       
    }// this.state
    this.db = getFirestore();
 }//consructor

 componentDidMount(){
  console.log('Inside dis catch');
      // firebase 
      // .firestore()
      // .collection('products')
      // .get()
      // .then((snapshot) => {
      //   console.log(snapshot);
      //   snapshot.docs.map((doc) => {
      //     console.log(doc.data());
      //   });

      //   const products = snapshot.docs.map((doc) =>{
      //     const data = doc.data();
      //     data['id'] = doc.id;

      //     return doc.data();
      //   })

      //   this.setState({
      //     products: products
      //   })
      // })


  const q = query(collection(this.db, 'products'), where("title", "==", "laptop"))
      
      
      const loadData = onSnapshot(q, (snapshot) =>{
        const products = 
        snapshot.docs.map((doc) => {
         const data = doc.data();
         data['id'] = doc.id;
         console.log(data);
         return data;
        })

        this.setState({
         products: products,
         loading: false
        })
      })
   
      
      
     

      // const colRef = collection(db, 'products');
      
      // getDocs(colRef)
      //  .then((snapshot) => {

      //    const products = 
      //    snapshot.docs.map((doc) => {
      //     const data = doc.data();
      //     data['id'] = doc.id;
      //     console.log(data);
      //     return data;
      //    })

      //    this.setState({
      //     products: products,
      //     loading: false
      //    })

      //  })
    }
 

 handleIncreaseQuantity = (product) => {
   const {products} = this.state;
   const index = products.indexOf(product);
   
  //  const docRef = collection(this.db, 'products').doc(products[index].id);
  
   const docRef =  doc(this.db, "products", products[index].id);

  updateDoc(docRef,{
    qty: products[index].qty + 1
   })
   .then(() =>{
    console.log('Updated successfully')
   })
   .catch((error) =>{
    console.log('error', error);
   })

  //  products[index].qty += 1;

  //  this.setState({
  //     products: products
  //  })
 }

 handledecreaseQuantity = (product) => {
  const {products} = this.state;
  const index = products.indexOf(product);

  // if(products[index].qty == 0){
  //     return;
  // }

  // products[index].qty -= 1;

  // this.setState({
  //    products: products
  // })
  const docRef =  doc(this.db, "products", products[index].id);

  updateDoc(docRef,{
    qty: products[index].qty - 1
   })
   .then(() =>{
    console.log('Updated successfully')
   })
   .catch((error) =>{
    console.log('error', error);
   })

}

handleOnDeleteProduct = (id) => {
  const {products} = this.state;

  const docRef =  doc(this.db, "products", id);

  deleteDoc(docRef)
   .then(() =>{
    console.log('Deleted successfully')
   })
   .catch((error) =>{
    console.log('error', error);
   })

   




  // console.log('inside delete', products);
  // const items = products.filter((item) => item.id != id);

  // this.setState({
  //    products: items
  // })
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

addProduct = () =>{
  const ref = collection(this.db, 'products');

      addDoc(ref, {
       img:'',
       qty:3,
       price:900,
       title:'Washing machine'
      })
       .then((docRef) => {
         console.log(docRef);
       })
       .catch((error) =>{
        console.log('Error:', error);
       })
    
}

  render(){
    const {products, loading} = this.state;
  return (
    <div className="App">
      <h1>Cart</h1>
      <Navbar count = {this.getCartCount()} />
      <button onClick = {this.addProduct} style = {{fontSize: 20, padding:20}}>Add Product</button>
      <Cart
       products = {products}
       OnIncreaseQuantity = {this.handleIncreaseQuantity}
       OnDecreaseQuantity = {this.handledecreaseQuantity}
       OnDeleteProduct = {this.handleOnDeleteProduct}
      />
       {loading && <h1>Loading Products...</h1>}
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
