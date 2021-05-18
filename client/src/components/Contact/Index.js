import React from "react";
import {
  Conatainer,
  Content_Wrapper,
  Content,
  ContentSection,
  ContentOne,
  ContentColumn,
  HeaderDetails,
  Header,
  Socials,
  ContentSocial,
} from "./Styles";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const Contact = () => {
  return (
    <Conatainer>
      <Content_Wrapper>
        <Content>
          <ContentSection>
            <ContentOne>
              <ContentColumn>
                <Header>
                  <HeaderDetails>
                    <h2 className='contact'>Contact US</h2>
                    <p className='details'>
                      Feel free to connect if you have any queries related to
                      the products or if you want to know more about bulk
                      orders, International orders/shipping rates and
                      collaborations. <br />
                    </p>
                  </HeaderDetails>
                </Header>
                <Socials>
                  <ContentSocial>
                    <a
                      href='https://www.instagram.com/'
                      className='link'
                      target='_blank'>
                      <InstagramIcon />
                    </a>
                    <a href='https://www.facebook.com/' className='link'>
                      <FacebookIcon />
                    </a>
                    <a
                      href='mailto: vatsalpatel1073@gmail.com'
                      className='link'>
                      Send Email
                    </a>
                  </ContentSocial>
                </Socials>
              </ContentColumn>
            </ContentOne>
          </ContentSection>
        </Content>
      </Content_Wrapper>
    </Conatainer>
  );
};

export default Contact;
