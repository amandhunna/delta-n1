import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import {
  LoginWrapper,
  LoginSection,
  LoginContainer,
  LoginPageContent,
  LoginForm,
  LoginFormHeader,
  LoginFormItem,
  LoginSubmit,
  LoginHint,
  LoginSocials,
} from "./../Login/Styles";

import { auth } from "../../../config/firebaseConfig";

import { motion } from "framer-motion";

const Recover = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");

  const redirectToLoginPage = () => history.push("/account/login");

  const recoverPassword = (e) => {
    e.preventDefault();

    auth
      .sendPasswordResetEmail(email)
      .then((response) => {
        console.log(response);
        auth.signOut();
        history.push("/account/login");
      })
      .catch((e) => alert(e.message));

    console.log("recovering password Now");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}>
      <LoginWrapper>
        <LoginSection>
          <LoginContainer>
            {" "}
            <LoginPageContent>
              <LoginForm>
                <LoginFormHeader>
                  <h1 className='formTitle'>Recover Password</h1>
                  <p className='formLegend'>
                    Please enter your email to reset your password
                  </p>
                </LoginFormHeader>
                <LoginFormItem>
                  <input
                    type='email'
                    className='formInput'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autofocus
                    required
                  />
                  <label className='floatingLabel'>Email</label>
                </LoginFormItem>

                <LoginSubmit type='submit' onClick={recoverPassword}>
                  Recover
                </LoginSubmit>
                <LoginHint>
                  <span onClick={redirectToLoginPage} className='restore'>
                    Back to Login Page
                  </span>
                </LoginHint>
                <LoginSocials></LoginSocials>
              </LoginForm>
            </LoginPageContent>
          </LoginContainer>
        </LoginSection>
      </LoginWrapper>
    </motion.div>
  );
};

export default Recover;
