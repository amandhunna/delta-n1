import React, { useState, useEffect } from "react";
import {
  MainWrapper,
  Container,
  PageHeader,
  HeaderDetails,
  HeaderButton,
  AddressDetails,
  UserAddress,
  Segment,
  SegmentContent,
} from "./Styles";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import Popup from "./Popup";

import { useStateValue } from "../../../../context/StateProvider";

import { db } from "../../../../config/firebaseConfig";

const Address = () => {
  const [{ user }, dispatch] = useStateValue();

  const [showPopup, setshowPopup] = useState(false);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [address1, setaddress1] = useState("");
  const [address2, setaddress2] = useState("");
  const [phone, setphone] = useState("");
  const [zip, setzip] = useState("");
  const [city, setcity] = useState("");
  const [userState, setuserState] = useState("");

  const history = useHistory();

  const toggle = () => setshowPopup(!showPopup);

  useEffect(() => {
    let docRef = db.collection("Users").doc(user?.uid);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const details = doc.data();
          console.log(details);
          setfirstName(details.firstName);
          setlastName(details.lastName);
          setzip(details.zip);
          setcity(details.city);
          setaddress2(details.address2);
          setaddress1(details.address1);
          setuserState(details.state);
        } else {
          console.log("error fetching");
        }
      })
      .catch((e) => alert(e));
  });

  return (
    <MainWrapper>
      <Container>
        <PageHeader>
          <Link className='link' to='/account'>
            <ArrowBackIosIcon fontSize='small' />
            Back to Account
          </Link>
          <HeaderDetails>
            <h1 className='headerDetails__heading'>My addresses</h1>
            <HeaderButton onClick={toggle}>Add a new address</HeaderButton>
          </HeaderDetails>
        </PageHeader>

        {showPopup ? <Popup toggle={toggle} /> : null}

        <AddressDetails>
          <UserAddress>
            <Segment>
              <h2 className='segmentTitle'>Default Address</h2>
              <SegmentContent>
                <p className='accountAddress'>
                  <span className='one'>{firstName}</span>
                  <br />
                  {address1}
                  <br />
                  {address2}
                  <br />
                  {city}
                  <br />
                  {userState}
                </p>
              </SegmentContent>
            </Segment>
          </UserAddress>
        </AddressDetails>
      </Container>
    </MainWrapper>
  );
};

export default Address;
