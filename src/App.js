import { useState, useEffect } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import AddItem from "./Components/AddItem";
import Card from "./Components/Card";
import data from "./Components/Data";
import { Grid } from "@mui/material";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);

  const APIKEY = "https://easy-battledress-crab.cyclic.app/shop";
  const getFunction = async () => {
    let res = await axios.get(APIKEY);
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getFunction();

    const sumAmount = (array) => {
      let sum = 0;
      array.map((item) => {
        sum += item.price;
      });
      setSum(sum);
    };
    sumAmount(data);
  });

  console.log(sum);

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item container direction="column" xs={6}>
          <div>
            <AddItem getFunction={getFunction} />
          </div>
          <h3>Shopping Cart</h3>
          <p>You have 3 items in your cart</p>

          {data?.map((item) => (
            <Cart
              key={item._id}
              id={item._id}
              itemname={item.name}
              moreinfo={item.type}
              quantity={item.quantity}
              price={item.price}
              getFunction={getFunction}
            />
          ))}
        </Grid>
        <Grid item>
          <Grid item>
            <Grid item>
              <Card sum={sum} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
