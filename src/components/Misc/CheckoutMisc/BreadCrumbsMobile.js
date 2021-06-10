import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const Breadcrumbs = ({
  activeCart,
  activeShipping,
  activePayment,
  activeInfo,
}) => {
  const history = useHistory();

  return (
    <Crumbs>
      <Crumb>
        <CrumbItem>
          {activeCart ? (
            <Link to='/cart' className='linkActive'>
              Cart
              <NavigateNextIcon fontSize='medium' />
            </Link>
          ) : (
            <Link to='#' className='link'>
              Cart
              <NavigateNextIcon fontSize='medium' />
            </Link>
          )}
        </CrumbItem>
        <CrumbItem>
          {activeInfo ? (
            <Link to='#' className='linkActive'>
              Information
              <NavigateNextIcon fontSize='medium' />
            </Link>
          ) : (
            <Link to='#' className='link'>
              Information
              <NavigateNextIcon fontSize='medium' />
            </Link>
          )}
        </CrumbItem>
        <CrumbItem>
          {activeShipping ? (
            <Link to='/shipping' className='linkActive'>
              Shipping
              <NavigateNextIcon fontSize='medium' />
            </Link>
          ) : (
            <Link to='#' className='link'>
              Shipping
              <NavigateNextIcon fontSize='medium' />
            </Link>
          )}
        </CrumbItem>
        <CrumbItem>
          {activePayment ? (
            <Link to='/payment' className='linkActive'>
              Payment
              <NavigateNextIcon className='icon' fontSize='medium' />
            </Link>
          ) : (
            <Link to='#' className='link'>
              Payment
              <NavigateNextIcon className='icon' fontSize='medium' />
            </Link>
          )}
        </CrumbItem>
      </Crumb>
    </Crumbs>
  );
};

export default Breadcrumbs;

const Crumbs = styled.div`
  display: block;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: subpixel-antialiased;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  line-height: 1.3em;
`;

export const Crumb = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  padding-top: 1.5em;
  margin: 0;
  padding-bottom: 1.5em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  margin: 0;
`;

export const CrumbItem = styled.div`
  display: flex;
  font-size: 0.8571428571em;
  align-items: center;
  color: #737373;

  .linkActive {
    text-decoration: none;
    color: #323232;
    transition: color 0.2s ease-in-out;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    word-wrap: break-word;
    word-break: break-word;
    -webkit-font-smoothing: subpixel-antialiased;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
    line-height: 1.3em;
  }

  .link {
    text-decoration: none;
    color: #323232;
    transition: color 0.2s ease-in-out;
    cursor: text;
    font-size: 0.8rem;
    word-wrap: break-word;
    word-break: break-word;
    -webkit-font-smoothing: subpixel-antialiased;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
    line-height: 1.3em;
  }

  .MuiSvgIcon-root {
    color: #737373;
    fill: currentColor;
    margin: 0.3em;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    text-align: -webkit-match-parent;
    word-wrap: break-word;
    word-break: break-word;
  }

  .icon {
    display: none;
    text-align: center;
  }
`;
