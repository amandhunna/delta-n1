import React, { useState, useEffect } from "react";
import {
  MainWrapper,
  Container,
  PageHeader,
  PageHeaderSection,
  SectionDetails,
  SectionOne,
  SectionTwo,
  SectionOneDetails,
  SectionOneDetailsContent,
  AddressButton,
  SectionDetailsContentButton,
} from "./Styles";

import { useStateValue } from "../../../context/StateProvider";

import { auth, db } from "../../../config/firebaseConfig";

import { Link, useHistory } from "react-router-dom";
import Order from "./../../Misc/CheckoutMisc/Order";

const AccountInfo = () => {
  const [{ user, cart }, dispatch] = useStateValue();

  const history = useHistory();

  const [address, setaddress] = useState([]);

  useEffect(() => {
    let docRef = db.collection("Users").doc(user?.uid);
    console.log(docRef);

    docRef.onSnapshot((snapshot) => setaddress(snapshot.data()));
  }, [address]);

  console.log(address, "address");

  const logout = () => {
    auth.signOut();
    history.push("/");
  };

  return (
    <MainWrapper>
      <Container>
        <PageHeader>
          <p className='logOut' onClick={logout}>
            Logout
          </p>
        </PageHeader>
        <PageHeaderSection>
          <h1 className='section__Heading'>My account</h1>
          <p className='section__Description'>
            Welcome back, {user?.displayName}
          </p>
        </PageHeaderSection>
        <SectionDetails>
          <SectionOne>
            <SectionOneDetails>
              <h2 className='sectionDetails__orders'>My orders</h2>
              <SectionOneDetailsContent>
                <p className='order__details'>
                  You havent placed any orders yet
                </p>
              </SectionOneDetailsContent>
            </SectionOneDetails>
          </SectionOne>

          <SectionTwo>
            <SectionOneDetails>
              <h2 className='sectionDetails__orders'>Primary Address</h2>
              <SectionOneDetailsContent>
                <p className='order__details'>
                  <span className='one'>
                    {address?.firstName} {address?.lastName}
                  </span>
                  <br />
                  {address?.address1}
                  <br />
                  {address?.address2}
                  <br />
                  {address?.city}
                  <br />
                  {address?.addressState}
                  {address?.zip}
                </p>
                <SectionDetailsContentButton>
                  {address?.firstName ? (
                    <Link to='/account/addresses'>
                      <AddressButton> Edit Address</AddressButton>
                    </Link>
                  ) : (
                    <Link to='/account/addresses'>
                      <AddressButton> Manage Address</AddressButton>
                    </Link>
                  )}
                </SectionDetailsContentButton>
              </SectionOneDetailsContent>
            </SectionOneDetails>
          </SectionTwo>
        </SectionDetails>
      </Container>
    </MainWrapper>
  );
};

export default AccountInfo;
