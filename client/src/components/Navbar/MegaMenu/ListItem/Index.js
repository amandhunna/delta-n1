import React from "react";
import { ListWrapper, LinkList, LinkListItem } from "./Styles";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const List = ({ url, Gender }) => {
  const history = useHistory();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}>
      <ListWrapper>
        <Link to={url} className='link'>
          <p className='linkMain'>{Gender}</p>
        </Link>
        <LinkList>
          <LinkListItem>
            {" "}
            <Link to={`${url}/tops`} className='linkListItem'>
              <p className='link'>Tops</p>
            </Link>
          </LinkListItem>
          <LinkListItem>
            {" "}
            <Link to={`${url}/bottoms`} className='linkListItem'>
              <p className='link'>Bottoms</p>
            </Link>
          </LinkListItem>
          <LinkListItem>
            {" "}
            <Link to={`${url}/Accessories`} className='linkListItem'>
              <p className='link'>Accessories</p>
            </Link>
          </LinkListItem>
        </LinkList>
      </ListWrapper>
    </motion.div>
  );
};

export default List;
