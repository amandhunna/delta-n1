import React, { useState } from "react";
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
  SocialButtons,
} from "./Styles";
import { useHistory, Link } from "react-router-dom";

import { useStateValue } from "../../../context/StateProvider";

import { auth, provider, facebookAuth } from "../../../config/firebaseConfig";

import { motion } from "framer-motion";

const Login = () => {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // email and password auth
  const signIn = (e) => {
    e.preventDefault();
    try {

    const userCredential = auth.signInWithEmailAndPassword(email, password);
    if (userCredential) {
      dispatch({
        type: "SET_USER",
        user: userCredential,
        });
      history.push("/");
      }
    }
    catch(error) {
      console.error("error in the basic sign-in ::", error);
      alert(error.message);
    }
    finally {
      setEmail("");
      setPassword("");
      history.push("/");
    }
  };

  // facebook authentication
  const facebookAuthentication = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.signInWithPopup(facebookAuth)
        console.log(" facebook user", userCredential);
    }
    catch(error) {
      console.error("error in facebook signup:: ", error);
      alert(error);
    } finally {
      history.push("/");
    }
  };

  // googleAuthentication
  const googleAuthentication = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.signInWithPopup(provider);
      dispatch({ type: "SET_USER", user: userCredential, })
    } catch (error) {
        console.error("error in google sign-in: ", error) 
      alert(e.message) 
    } finally {
      history.push("/");
    }

  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}>
      <LoginWrapper>
        <LoginSection>
          <LoginContainer>
            {" "}
            <LoginPageContent>
              <LoginForm>
                <LoginFormHeader>
                  <h1 className='formTitle'>Login</h1>
                  <p className='formLegend'>
                    Please enter your email and password
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
                <LoginFormItem>
                  <input
                    type='password'
                    className='formInput'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    required
                  />
                  <label className='floatingLabel'>Password</label>
                </LoginFormItem>
                <LoginSubmit onClick={signIn}>Login</LoginSubmit>
                <LoginHint>
                  <span
                    className='restore'
                    onClick={() => history.push("/restorepassword")}>
                    Click to reset password
                  </span>
                </LoginHint>
                <LoginHint>
                  <span className='text'>Don't have an account?</span>

                  <span onClick={() => history.push("/register")}>
                    <p className='linkToRegister'>Create one</p>
                  </span>
                </LoginHint>
                <LoginHint>
                  <span className='text'></span>
                </LoginHint>
                <LoginSocials>
                  <SocialButtons onClick={facebookAuthentication}>
                    <img
                      className='facebookLogo'
                      src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512'
                      alt='facebook'
                    />
                  </SocialButtons>
                  <SocialButtons onClick={googleAuthentication}>
                    <img
                      className='googleLogo'
                      src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png'
                      alt='facebook'
                    />
                  </SocialButtons>
                </LoginSocials>
              </LoginForm>
            </LoginPageContent>
          </LoginContainer>
        </LoginSection>
      </LoginWrapper>{" "}
    </motion.div>
  );
};

export default Login;
