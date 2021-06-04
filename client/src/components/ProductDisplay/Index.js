import React, { useEffect, useState } from "react";
import {
  Main,
  Section,
  Header,
  Products,
  HeaderContainer,
  HeaderContainer_Section,
  ProductList,
} from "./Styles";
import Images from "../Misc/ProductDisplay/ProductDisplayImages";
import { db } from "../../config/firebaseConfig";
import { useStateValue } from "./../../context/StateProvider";

const ProductDisplay = ({ name, title, imageUrl, price, id }) => {
  const [{ term, user }, dispatch] = useStateValue();

  return (
    <Main>
      <Section>
        <Header>
          <HeaderContainer>
            <HeaderContainer_Section>
              <h1 className='Header_heading'>Search</h1>
              <div class='Header__Description'>
                <p>104 results for {term}</p>
              </div>
            </HeaderContainer_Section>
          </HeaderContainer>
        </Header>
        <ProductList>
          <Images title={title} imageUrl={imageUrl} />
          <Images title={title} imageUrl={imageUrl} />
          <Images title={title} imageUrl={imageUrl} />
          <Images />
        </ProductList>
      </Section>
    </Main>
  );
};

export default ProductDisplay;
