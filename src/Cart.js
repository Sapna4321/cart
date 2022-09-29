import React from 'react'
import CartItem from './CartItem';

class Cart extends React.Component {

   constructor() {
      super();
      this.state = {
        products: [
            {
                price:9990,
                title:'Mobile Phone',
                qty: 1,
                img: '',
                id: 1
            },
            {
                price:999,
                title:'Watch',
                qty: 1,
                img: '',
                id: 2
            },
            {
                price:20000,
                title:'TV',
                qty: 1,
                img: '',
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
   
   render() {
      const { products } = this.state;
      
      return (
         <div className='cart'>
            {products.map((product) =>{
                return (
                <CartItem
                product = {product}
                key = {product.id}
                OnIncreaseQuantity = {this.handleIncreaseQuantity}
                OnDecreaseQuantity = {this.handledecreaseQuantity}
                OnDeleteProduct = {this.handleOnDeleteProduct}
                />
                );
                
            })}
         </div>
      );
   }
}

export default Cart;