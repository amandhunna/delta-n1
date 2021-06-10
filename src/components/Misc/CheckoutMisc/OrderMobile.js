import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../../context/StateProvider";
import TableMobile from "./TableMobile";

const OrderMobile = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <Order>
      <div className='order__summary'>
        <table className='product'>
          {cart.map((item) => (
            <tbody>
              <tr className='product__row'>
                <td className='product__image'>
                  <div className='product__thumbnail '>
                    <div className='product-thumbnail__wrapper'>
                      <img
                        alt={item.title}
                        className='product-thumbnail__image'
                        src={item.imageUrl}
                      />
                    </div>
                  </div>
                </td>
                <th className='product__description' scope='row'>
                  <span className='product__name'>{item.title}</span>
                </th>

                <td className='product__price'>
                  <span className='total__amount'>₹{item.price}</span>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <TableMobile />
    </Order>
  );
};

export default OrderMobile;

const Order = styled.div`
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  display: block;
  color: #545454;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  line-height: 1.3em;

  .order__summary {
    display: block;
  }

  .product {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 1em;
    box-sizing: border-box;
    text-indent: initial;
    display: table;
    border-color: grey;
  }

  .product__row {
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

  .product__thumbnail {
    width: 4.6em;
    height: 4.6em;
    margin-bottom: 1.5em;
    border-radius: 8px;
    background: #fff;
    position: relative;
    display: block;
  }

  .product-thumbnail__wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    z-index: 1;
    display: block;
    font-weight: 400;
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
    text-align: left;
    width: 100%;
    padding-left: 1em;
    padding: 0;
    font-weight: 400;
    display: table-cell;
    vertical-align: inherit;
  }

  .product__name {
    color: #333;
    margin-left: 1em;
    width: 1em;
    min-width: 100%;
    display: block;
    font-weight: 500;
    text-align: left;
  }

  .product__price {
    padding-top: 0;
    border-color: #fad9d9;
    padding-bottom: 0;
    text-align: right;
    white-space: nowrap;
    padding-left: 1em;
    font-weight: 400;
    display: table-cell;
    vertical-align: inherit;
  }

  .total__amount {
    color: #333;
    font-weight: 500;
    text-align: right;
    white-space: nowrap;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 1em;
    line-height: 1.3em;
  }
`;
