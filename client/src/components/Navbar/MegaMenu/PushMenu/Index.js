import React, { useEffect, useState } from "react";
import { PushMenuWrapper, ImageWrapper } from "./Styles";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const PushMenu = ({ imageUrl, Gender, url }) => {
  return (
    <PushMenuWrapper>
      <Link to={url} className='link'>
        <ImageWrapper>
          <motion.div whileHover={{ scale: 1.2 }}>
            <img className='image' src={imageUrl} alt='' />
          </motion.div>
        </ImageWrapper>
        <p className='details'>{Gender}</p>
      </Link>
    </PushMenuWrapper>
  );
};

export default PushMenu;
