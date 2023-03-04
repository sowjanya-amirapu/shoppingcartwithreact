import React from "react";
import { useState, useEffect } from "react";
import { Grid, TextField, Divider, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import MC from "../Assets/mc.png";
import VISA from "../Assets/visa.png";
import RUPAY from "../Assets/rupay.png";
import ALL from "../Assets/See all.png";
import { PaystackButton } from "react-paystack";

const CardType = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <h4 style={{ color: "white" }}>Card Type</h4>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={2}>
          <img src={MC} alt="MasterCard Pic" />
        </Grid>
        <Grid item xs={2}>
          <img src={VISA} alt="VISA Pic" />
        </Grid>
        <Grid item xs={2}>
          <img src={RUPAY} alt="RUPAY Pic" />
        </Grid>
        <Grid item xs={2}>
          <img src={ALL} alt="SEE ALL Pic" />
        </Grid>
      </Grid>
    </Grid>
  );
};

const initialValues = {
  id: 0,
  fullname: "",
};

const CustomTextField = styled(TextField)({
  "& .MuiInputLabel-root": {
    color: "white",
    borderColor: "white",
  },
  "& .MuiInputBase-root": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
  },
});

const CardForm = ({ sum, ship }) => {
  const publicKey = "pk_test_564e01acd29fb806e9501d4c6e92b9c9934df101";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [card, setCard] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  let total = sum + ship;

  const componentProps = {
    email,
    total,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "CHECK OUT",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <Grid container spacing={2}>
      <Grid item container spacing={2}>
        <Grid item xs={12}>
          <CustomTextField
            fullWidth
            variant="outlined"
            required
            id="outlinedcard-required"
            label="Name on card"
            onChange={(e) => setName(e.target.value)}
            defaultValue="Name"
          />
        </Grid>

        <Grid item xs={12}>
          <CustomTextField
            fullWidth
            variant="outlined"
            required
            id="outlined-required"
            label="Card Number"
            onChange={(e) => setCard(e.target.value)}
            defaultValue="1111 2222 3333 4444"
          />
        </Grid>

        <Grid item xs={12}>
          <CustomTextField
            fullWidth
            variant="outlined"
            required
            id="outlined-required"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            defaultValue="xyz@email.com"
          />
        </Grid>

        <Grid item xs={12}>
          <CustomTextField
            fullWidth
            variant="outlined"
            required
            id="outlined-required"
            label="Phone"
            onChange={(e) => setPhone(e.target.value)}
            defaultValue="222-222-2222"
          />
        </Grid>
      </Grid>

      <Grid item container spacing={2}>
        <Grid item xs={6}>
          <CustomTextField
            variant="outlined"
            required
            id="outlined-required"
            label="Expiration Date"
            onChange={(e) => setExpiration(e.target.value)}
            defaultValue="mm/yy"
          />
        </Grid>
        <Grid item xs={6}>
          <CustomTextField
            variant="outlined"
            required
            id="outlined-required"
            label="cvv"
            onChange={(e) => setCvv(e.target.value)}
            defaultValue="123"
          />
        </Grid>
        <Grid item>
          <CheckOut sum={sum}
       
          componentProps={componentProps} />
        </Grid>
      </Grid>
    </Grid>
  );
};

const CheckOut = ({ sum, componentProps}) => {
  const [ship, setShip] = useState(0);



  useEffect(() => {
    const shipCal = (total) => {
      let ship = (10/100) * total;
      setShip(ship);
    };
    shipCal(sum);
  });

  console.log(ship)
  return (
    <>
      <p style={{ color: "white" }}>Subtotal:</p>
      <p>${sum}</p>
      <p style={{ color: "white" }}>Shipping Cost:</p>
      <p>${ship}</p>
      <p style={{ color: "white" }}>Total(Tax incl.):</p>
      <p>${sum + ship}</p>
      <PaystackButton {...componentProps} />
      {/* <Button sx={{width: 550, height: 60, backgroundColor: '#4DE1C1', color: 'black'}} variant='contained'>CHECK OUT</Button>
       */}
    </>
  );
};

const Card = ({ sum }) => {
  const [values, setValues] = useState(initialValues);
  return (
    <Grid
      container
      sx={{
        width: 650,
        height: 850,
        backgroundColor: "#2568C3",
        borderRadius: 15,
        padding: 5,
      }}
    >
      <Grid item>
        <CardType />
      </Grid>
      <Grid item>
        <CardForm sum={sum} />
      </Grid>
    </Grid>
  );
};

export default Card;

//
