import React, { useEffect, useState } from "react";
import { PushMenuWrapper, ImageWrapper } from "./Styles";
import { Link, useHistory } from "react-router-dom";

const PushMenu = ({ imageUrl, Gender, url }) => {
  return (
    <PushMenuWrapper>
      <Link to={url} className='link'>
        <ImageWrapper>
          <>
            <img className='image' src={imageUrl} alt='' />
          </>
        </ImageWrapper>
        <p className='details'>{Gender}</p>
      </Link>
    </PushMenuWrapper>
  );
};

export default PushMenu;
