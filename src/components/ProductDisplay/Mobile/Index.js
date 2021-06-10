import React from "react";
import {
  Main,
  Section,
  Header,
  HeaderContainer,
  HeaderContainer_Section,
  ProductList,
} from "./Styles";
import ImageMobile from "../../Misc/ProductDisplay/ProductDisplayImages_Mobile";
import { useStateValue } from "../../../context/StateProvider";

const ProductDisplayMobile = () => {
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
          <ImageMobile />
          <ImageMobile />
        </ProductList>
        <ProductList>
          <ImageMobile />
          <ImageMobile />
        </ProductList>
        <ProductList>
          <ImageMobile />
          <ImageMobile />
        </ProductList>
      </Section>
    </Main>
  );
};

export default ProductDisplayMobile;
