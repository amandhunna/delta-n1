import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../../context/StateProvider";

const Order = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <Orders>
      <table className='orderItems'>
        {cart.map((item) => (
          <tbody data-order-summary-section='orderItem'>
            <tr className='product'>
              <td className='product__image'>
                <div className='product-thumbnail '>
                  <div className='product-thumbnail__wrapper'>
                    <img
                      alt='Antique-Finish German Silver Floral Embossed Temple Necklace'
                      className='product-thumbnail__image'
                      src={item.imageUrl}
                    />
                  </div>
                </div>
              </td>
              <th className='product__description' scope='row'>
                <span className='product__description__name '>
                  {item.title}
                </span>
              </th>
              <td className='product__price'>
                <span className='orderAmount'>₹{item.price}</span>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </Orders>
  );
};

export default Order;

export const Orders = styled.div`
  display: block;
  color: #545454;

  .orderItems {
    width: 100%;

    border-collapse: collapse;
    border-spacing: 0;
    font-size: 1em;
    border-color: grey;
    box-sizing: border-box;
    text-indent: initial;
    display: table;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
    line-height: 1.3em;
    word-wrap: break-word;
    word-break: break-word;
    -webkit-font-smoothing: subpixel-antialiased;

    @media (min-width: 1000px) {
      margin-top: 0.75em;
      margin-bottom: 1.5em;
      position: relative;
      z-index: 1;
    }
  }

  .orderItem {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }

  .product {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }

  .product__image {
    padding-top: 0;
    border-color: #fad9d9;
    padding-bottom: 0;
    padding-left: 0;
    text-align: left;
    padding: 0;
    font-weight: 400;
    display: table-cell;
    vertical-align: inherit;
  }

  .product-thumbnail {
    width: 4.6em;
    height: 4.6em;
    border-radius: 8px;
    background: #fff;
    position: relative;
    display: block;
    text-align: left;
    color: #545454;
  }

  .product-thumbnail__wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    z-index: 1;
    display: block;
    text-align: left;
  }

  .product-thumbnail__image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    border: 0;
    text-align: left;
  }

  .product__description {
    padding-top: 0;
    padding-bottom: 0;
    color: #545454;
    text-align: left;
    width: 100%;
    padding-left: 1em;
    display: table-cell;
    vertical-align: inherit;
  }

  .product__description__name {
    color: #333;
    width: 1em;
    min-width: 100%;
    display: block;
    margin-bottom: 25px;
    font-weight: 500;
    text-align: left;
  }

  .product__price {
    border-color: #fad9d9;
    padding-bottom: 0;
    white-space: nowrap;
    text-align: right;
    display: table-cell;
    vertical-align: inherit;
    padding-top: 0;
    padding: 0;
    font-weight: 400;
    padding-left: 1em;
  }

  .orderAmount {
    color: #333;
    font-weight: 500;
    text-align: right;
    white-space: nowrap;
  }
`;
