import React from "react";
import { ListWrapper, LinkList, LinkListItem } from "./Styles";
import { Link, useHistory } from "react-router-dom";

const List = ({ url, Gender }) => {
  const history = useHistory();

  return (
    <>
      <ListWrapper>
        <a to={url} className='link'>
          <p className='linkMain'>{Gender}</p>
        </a>
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
            <Link className='linkListItem'>
              <p className='link'>Accessories</p>
            </Link>
          </LinkListItem>
        </LinkList>
      </ListWrapper>
    </>
  );
};

export default List;
