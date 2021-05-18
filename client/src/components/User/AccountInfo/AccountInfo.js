import React from "react";
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

import { auth } from "../../../config/firebaseConfig";

import { Link, useHistory } from "react-router-dom";

const AccountInfo = () => {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

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
          <p className='section__Description'>Welcome back {user?.firstName}</p>
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
              <h2 className='sectionDetails__orders'>No addresses</h2>
              <SectionOneDetailsContent>
                <p className='order__details'>
                  No addresses are currently saved
                </p>
                <SectionDetailsContentButton>
                  <Link to='/account/addresses'>
                    <AddressButton> Manage Address</AddressButton>
                  </Link>
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
