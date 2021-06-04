import React from "react";
import styled from "styled-components";
import { cartTotal } from "../../context/reducer";
import { useStateValue } from "./../../context/StateProvider";
import { useStripe } from "@stripe/react-stripe-js";
import { fetchFromAPI } from "../../helper/helper";

const PayBtn = () => {
  const [{ cart, user }] = useStateValue();
  const stripe = useStripe();

  const handleCheckout = async (e) => {
    e.preventDefault();

    const line_items = cart.map((item) => {
      return {
        quantity: item.quantity,
        price_data: {
          currency: "INR",
          unit_amount: item.price * 100, // prices are in paise
          product_data: {
            name: item.title,
            description: item.description,
            images: [item.imageUrl],
          },
        },
      };
    });

    const response = await fetchFromAPI("create-checkout-session", {
      body: {
        line_items,
        customer_email: user.email,
      },
    });

    const { sessionId } = response;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.log(error);
    }
  };

  return <Pay onClick={handleCheckout}>{`Pay ₹${cartTotal(cart)}`}</Pay>;
};

export default PayBtn;
/* 






























*/

const Pay = styled.button`
  color: white;
  border-color: #ff9999;
  background-color: #ff9999;
  position: relative;
  display: inline-block;
  padding: 14px 28px;
  line-height: normal;
  border: 1px solid transparent;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2em;
  font-family: Futura, sans-serif;
  font-weight: 400;
  font-style: normal;
  margin-bottom: 4.5rem;

  transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: 1;
  -webkit-tap-highlight-color: initial;
  text-decoration: none;
  cursor: pointer;
`;
