import React, {useState} from 'react';
import { TextField, Box, Button, Divider } from '@mui/material';
import axios from 'axios';



const AddItem = ({getFunction}) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const shopItem = {
        name, type, price, quantity
    }

    const APIKEY = ('https://easy-battledress-crab.cyclic.app/shop')

    const handleSubmit = async (e)=>{
        e.preventDefault()
        let res = await axios.post(APIKEY, shopItem)
        getFunction()
        setName('')
        setType('')
        setPrice('')
        setQuantity('')

    }

  return (
    <div className='addItemClass' >
      <TextField 
        value={name}
        sx={{width: 100, height: 56}} id="filled-basic" label="Item" variant="filled" size="medium" 
        onChange={(e)=> setName(e.target.value)}/>
      <TextField 
       value={type}
      sx={{width: 100, height: 56}} id="filled-basic" label="Type" variant="filled" size="medium"
        onChange={(e)=> setType(e.target.value)}/>
      <TextField 
      value={quantity}
      sx={{width: 100, height: 56}} id="filled-basic" label="Quantity" variant="filled" size="medium"
        onChange={(e)=> setQuantity(e.target.value)}/>
      <TextField 
      value={price}
      sx={{width: 100, height: 56}} id="filled-basic" label="Price" variant="filled" size="medium"
        onChange={(e)=> setPrice(e.target.value)}/>
      <div className='buttonClass'>
      <Button sx={{width: 112, height: 60, backgroundColor: '#4DE1C1', color: 'black'}} variant='contained' onClick={handleSubmit}>Add Item</Button>
      </div>
    </div>

    

  )
}

export default AddItem;