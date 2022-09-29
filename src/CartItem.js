import React from 'react'

class CartItem extends React.Component {

   // constructor() {
   //    super();
   //    this.state = {
   //       price: 999,
   //       title: 'Phone',
   //       qty: 1,
   //       img: ''
   //    }// this.state
   // }//consructor

   // increaseQuantity = () => {

   //    //***first way

   //    // this.setState({
   //    //    qty : this.state.qty + 1
   //    // });

   //    //***second way

   //    this.setState((prevState) => {
   //       return{
   //          qty: prevState.qty + 1
   //       }
   //    });

   // }

   // decreaseQuantity = () => {

   //    //***first way

   //    // this.setState({
   //    //    qty : this.state.qty + 1
   //    // });

   //    //***second way

   //    this.setState((prevState) => {
   //       return{
   //          qty: prevState.qty - 1
   //       }
   //    });
      
   // }


   render() {
      console.log(this.props);
      const { price, title, qty } = this.props.product;
     const { product, OnIncreaseQuantity, OnDecreaseQuantity, OnDeleteProduct} = this.props;
      return (
         <div className='cart-item'>
            <div className='left-block'>
               <img style={styles.image} />
            </div>
            <div className='right-block'>
               {console.log(title)}
               <div style={{ fontSize: 25 }}>{title}</div>
               <div style={{ color: '#777' }}>{price}</div>
               <div style={{ color: '#777' }}>{qty}</div>
               <div className='cart-item-actions'>
                  <img
                     alt='increase'
                     className='action-icons'
                     src='https://t3.ftcdn.net/jpg/03/30/25/74/240_F_330257485_WEd8LDmLkdp4vbJjhbLY263gV0OvsiIF.jpg'
                     onClick = {() => OnIncreaseQuantity(product)}
                  />
                  <img
                     alt='decrease'
                     className='action-icons'
                     src='https://cdn-icons-png.flaticon.com/128/1828/1828899.png'
                     onClick = {() => OnDecreaseQuantity(product)}
                  />
                  <img
                     alt='delete'
                     className='action-icons'
                     src='https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg'
                     onClick = {() => OnDeleteProduct(product.id)}
                  />
               </div>
            </div>
         </div>
      );
   }
}

const styles = {
   image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
   }
}

export default CartItem;