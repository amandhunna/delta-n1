import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactHeader,
  ContactContent,
  ContentHeader,
  Details,
} from "./Styles";

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactContainer>
        <ContactHeader>
          <h1 className='ContactHeader'>CONTACT US</h1>
        </ContactHeader>
        <ContactContent>
          <Details>
            <p className='details'>
              <span>
                We are happy to connect with you at Little Tags.
                <br />
              </span>
              <span>
                Please feel free to contact us for any query, concern,
                suggestion, or just about anything to do with us.
              </span>
            </p>

            <p className='mainDetails'>
              <b>
                <br />
                Please get in touch with us through any of the following means:
                <br />
              </b>
              <span>Mail: </span>
              <a className='link' href='mailto:contactteamdelta@gmail.com'>
                <span>
                  contactteamdelta@gmail.com
                  <br />
                </span>
              </a>
              <span>
                Whatsapp: +91-9023665633
                <br />
              </span>
              <span>
                Call: +91-9023665633 (Timings: 11 a.m. - 9:00 p.m)
                <br />
              </span>
              <span>Instagram: </span>
              <a className='link' href='http://www.instagram.com/'>
                <span>
                  www.instagram.com/teamdelta
                  <br />
                </span>
              </a>
              <span>Facebook: </span>
              <a className='link' href='http://www.facebook.com/teamdelta'>
                <span>
                  www.facebook.com/teamdelta
                  <br />
                  <br />
                </span>
              </a>
            </p>
          </Details>
        </ContactContent>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
