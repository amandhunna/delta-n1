import React, { useState } from "react";
import {
  PopUpContainer,
  PopUpHeader,
  PopUpContent,
  Form,
  FormItem,
  ItemLabel,
  FormButton,
} from "./PopupStyles";
import CloseIcon from "@material-ui/icons/Close";
import { HeaderButton } from "./Styles";
import "../../../../App.css";
import { useStateValue } from "./../../../../context/StateProvider";

import { db } from "./../../../../config/firebaseConfig";

const Popup = ({ toggle }) => {
  const [{ user }, dispatch] = useStateValue();

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [address1, setaddress1] = useState("");
  const [address2, setaddress2] = useState("");
  const [phone, setphone] = useState("");
  const [zip, setzip] = useState("");
  const [city, setcity] = useState("");
  const [userState, setuserState] = useState("");

  const registerAddress = (e) => {
    e.preventDefault();

    db.collection("Users").doc(user.uid).set({
      firstName: firstName,
      lastName: lastName,
      address1: address1,
      address2: address2,
      city: city,
      zip: zip,
      phone: phone,
      state: userState,
    });

    setfirstName("");
    setlastName("");
    setaddress1("");
    setaddress2("");
    setphone("");
    setzip("");
    setcity("");
    setuserState("");

    toggle();
  };
  return (
    <PopUpContainer>
      <CloseIcon onClick={toggle} />
      <PopUpHeader>
        <h3 className='headerHeading'>Add a new address</h3>
        <p className='headerDescription'>
          Please fill in the information below :
        </p>
      </PopUpHeader>

      <PopUpContent>
        <Form>
          <FormItem>
            <input
              type='text'
              className='formInput'
              placeholder='First name'
              onChange={(e) => setfirstName(e.target.value)}
              autofocus
              required
            />
            <ItemLabel>First name</ItemLabel>
          </FormItem>{" "}
          <FormItem>
            <input
              type='text'
              className='formInput'
              placeholder='Last name'
              onChange={(e) => setlastName(e.target.value)}
              required
            />
            <ItemLabel>Last name</ItemLabel>
          </FormItem>
          <FormItem>
            <input
              type='text'
              className='formInput'
              placeholder='Phone'
              onChange={(e) => setphone(e.target.value)}
              required
            />
            <ItemLabel>Phone</ItemLabel>
          </FormItem>
          <FormItem>
            <input
              type='text'
              className='formInput'
              placeholder='Address 1'
              onChange={(e) => setaddress1(e.target.value)}
              required
            />
            <ItemLabel>Address 1</ItemLabel>
          </FormItem>
          <FormItem>
            <input
              type='text'
              className='formInput'
              placeholder='Address 2'
              onChange={(e) => setaddress2(e.target.value)}
            />
            <ItemLabel>Address 2</ItemLabel>
          </FormItem>
          <FormItem>
            <input
              type='text'
              className='formInput'
              placeholder='City'
              onChange={(e) => setcity(e.target.value)}
              required
            />
            <ItemLabel>City</ItemLabel>
          </FormItem>
          <FormItem>
            <input
              type='text'
              className='formInput'
              placeholder='Zip'
              onChange={(e) => setzip(e.target.value)}
              required
            />
            <ItemLabel>Zip</ItemLabel>
          </FormItem>
          <FormItem>
            <input
              type='text'
              className='formInput'
              placeholder='State'
              onChange={(e) => setuserState(e.target.value)}
              required
            />
            <ItemLabel>State</ItemLabel>
          </FormItem>
        </Form>
        <FormButton type='submit' onClick={registerAddress}>
          Add a new address
        </FormButton>
      </PopUpContent>
    </PopUpContainer>
  );
};

export default Popup;
