import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../../context/StateProvider";
import { cartTotal } from "../../../context/reducer";

const TableMobile = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <Table>
      <TableBody>
        <TableRow>
          <th class='subtotal' scope='row'>
            Subtotal
          </th>
          <td class='price'>
            <span class='amount'>₹{cartTotal(cart)}</span>
          </td>
        </TableRow>

        <Row>
          <th class='shipping' scope='row'>
            Shipping
          </th>
          <td class='details'>
            <span class='ship'>Shipping is free</span>
          </td>
        </Row>
      </TableBody>

      <TableFooter>
        <tr class='row'>
          <th class='footer__row1' scope='row'>
            <h3 class='total'>Total</h3>
            <span class='summary ' data-checkout-taxes=''>
              Including taxes
            </span>
          </th>
          <td class='currency' data-presentment-currency='INR'>
            <span class='amount'>₹{cartTotal(cart)}</span>
          </td>
        </tr>
      </TableFooter>
    </Table>
  );
};

export default TableMobile;

export const Table = styled.table`
  width: 100%;
  margin-top: 30px;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1em;
  display: table;
  box-sizing: border-box;
  text-indent: initial;
  color: #545454;
  border-color: grey;
`;

export const TableBody = styled.div`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1em;
  text-indent: initial;
  color: #545454;
  border-bottom: 1px solid #e7e7e7;
`;

export const TableRow = styled.div`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  line-height: 1.3em;

  .subtotal {
    margin-top: 20px;
    padding-left: 0;
    text-align: left;
    padding: 0;
    font-weight: 400;
    display: table-cell;
    vertical-align: inherit;
  }

  .price {
    padding-top: 0;
    text-align: right;
    padding-left: 1.5em;
    white-space: nowrap;
    padding: 0;
    font-weight: 400;
    display: table-cell;
    vertical-align: inherit;
  }

  .amount {
    color: #333;
    font-weight: 500;
    text-align: right;
    white-space: nowrap;
  }
`;

export const Row = styled.div`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  line-height: 1.3em;

  .shipping {
    padding-top: 1.75em;
    padding-left: 0;
    text-align: left;
    display: table-cell;
    vertical-align: inherit;
    padding-bottom: 2rem;
    font-weight: 400;
  }

  .ship {
    color: #737373;
    font-size: 0.8571428571em;
    text-align: right;
  }

  .details {
    padding-top: 0.005em;
    text-align: right;
    white-space: nowrap;
    padding-left: 1.5em;
    font-weight: 400;
    display: table-cell;
    vertical-align: inherit;
  }
`;

export const TableFooter = styled.div`
  display: table-footer-group;
  vertical-align: middle;
  border-color: inherit;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  line-height: 1.3em;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;

  .row {
    display: table-row;
    margin-top: 1em;
    vertical-align: inherit;
    border-color: inherit;
  }

  .footer__row1 {
    margin-top: 300rem;
    position: relative;
    padding-left: 0;
    text-align: left;
    padding: 0;
    font-weight: 400;
    display: table-cell;
    vertical-align: inherit;
  }

  .total {
    color: #333;
    font-size: 1.1428571429em;
    text-align: left;
    font-weight: 400;
  }

  .summary {
    color: #737373;
    margin-top: -10px;
    display: block;
    font-size: 0.8571428571em;
    text-align: left;
  }

  .currency {
    text-align: right;
    padding-top: 3.5em;
    padding-left: 1.5em;
    white-space: nowrap;
    padding: 0;
    font-weight: 400;
    display: table-cell;
    color: #545454;
    vertical-align: inherit;
  }

  .amount {
    color: #333;
    font-size: 1.7142857143em;
    font-weight: 500;
    letter-spacing: -0.04em;
    line-height: 1em;
    white-space: nowrap;

    text-align: right;
  }
`;
