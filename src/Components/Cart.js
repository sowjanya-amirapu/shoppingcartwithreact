import React, {useState} from 'react';
import dec from '../Assets/dec.png'
import inc from '../Assets/inc.png'
import TrashCan from '../Assets/TrashCan.png'
import PizzaPic from '../Assets/pizza.png'
import axios from 'axios';
 
// import  { Grid, Paper }  from '@mui/material'


const Cart = ({ id, itemname, moreinfo, quantity, price, getFunction}) => {

  const APIKEY = ('https://easy-battledress-crab.cyclic.app/shop')

  const incFunction = async () =>{
      const qty = { quantity: quantity+1 }
    const res = await axios.put(`${APIKEY}/${id}`, qty)
    getFunction()

  }
  const decFunction = async() =>{
    const qty = { quantity: quantity-1 }
    const res = await axios.put(`${APIKEY}/${id}`, qty)
    console.log(res)
    getFunction()

}

  const deleteFunction = async()=>{
    const res = await axios.delete(`${APIKEY}/${id}`)
    getFunction()
    console.log(res)



  }

  return (

    <div className= 'cart-item'>
    <img src={PizzaPic} alt='Item Pic'/>
      <div className='item-info'>
        <h4>{itemname}</h4>
        <p>{moreinfo}</p>
      </div>
    <p>{quantity}</p>
      <div className='inc-dec'>
        <img onClick={incFunction} src={inc} alt='Inc Pic'/>
        <img onClick={decFunction} src={dec} alt='Dec Pic'/>
      </div>
    <p>${price}</p>
    <img onClick={deleteFunction} src={TrashCan} alt='Trash Can Pic'/>
    </div>


  );
}

export default Cart

{/* <Grid container>
<Grid item xs={6}>
  <Paper>
  <div className= 'cart-item'>
  <img src={PizzaPic} alt='Item Pic'/>
    <div className='item-info'>
    <h4>{itemname}</h4>
    <p>{moreinfo}</p>
    </div>
  <p>{quantity}</p>
    <div className='inc-dec'>
      <img src={inc} alt='Inc Pic'/>
      <img src={dec} alt='Dec Pic'/>
    </div>
  <p>${price}</p>
  <img src={TrashCan} alt='Trash Can Pic'/>
  </div>
  </Paper>
</Grid>
</Grid> */}