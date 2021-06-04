import React from "react";
import {
  SideDrawerWrapper,
  DrawerHeader,
  Empty,
  DrawerMain,
  DrawerContainer,
  DrawerMenu_Primary,
  DrawerMenu_Secondary,
  AfterEmpty,
  DrawerFooter,
  FooterBefore,
  Socials,
} from "./Styles";

import CloseIcon from "@material-ui/icons/Close";

import InstagramIcon from "@material-ui/icons/Instagram";

import FacebookIcon from "@material-ui/icons/Facebook";

import EmailIcon from "@material-ui/icons/Email";

import { Link, useHistory } from "react-router-dom";

import SideDrawerOptions from "./Options/Index";
import { useStateValue } from "../../context/StateProvider";

const SideDrawer = ({ toggleSiderBar, showSiderBar }) => {
  const [{ user }] = useStateValue();

  const history = useHistory();

  const redirect = () => {
    !user ? history.push("/login") : history.push("/account");
  };
  return (
    <>
      <SideDrawerWrapper>
        <DrawerHeader>
          <CloseIcon onClick={toggleSiderBar} />
        </DrawerHeader>
        <Empty></Empty>
        <DrawerMain>
          <DrawerContainer>
            <DrawerMenu_Primary>
              <SideDrawerOptions
                name='Shop'
                urlMen='/shop/all/men'
                urlWomen='/shop/all/women'
                toggleSiderBar={toggleSiderBar}
              />
              <SideDrawerOptions
                name='New Arrivals'
                urlMen='/newarrivals/men'
                urlWomen='/newarrivals/women'
                toggleSiderBar={toggleSiderBar}
              />
              <SideDrawerOptions
                name='Collections'
                urlMen='/collections/men'
                urlWomen='/collections/women'
                toggleSiderBar={toggleSiderBar}
              />
              <SideDrawerOptions
                name='BestSellers'
                urlMen='/bestsellers/men'
                urlWomen='/bestsellers/women'
                toggleSiderBar={toggleSiderBar}
              />
            </DrawerMenu_Primary>
            <DrawerMenu_Secondary>
              <ul className='linkList'>
                <li className='linkList__item'>
                  <h3 className='account' onClick={redirect}>
                    Account
                  </h3>
                </li>
              </ul>
            </DrawerMenu_Secondary>
            <AfterEmpty></AfterEmpty>
          </DrawerContainer>
        </DrawerMain>
      </SideDrawerWrapper>
    </>
  );
};

export default SideDrawer;
