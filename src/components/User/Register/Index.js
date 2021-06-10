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
  LoginSocials,
} from "../Login/Styles";

import { useHistory } from "react-router-dom";

import { useStateValue } from "../../../context/StateProvider";

import { auth, db } from "../../../config/firebaseConfig";

const Register = () => {
  const history = useHistory();

  const [{ user }, dispatch] = useStateValue();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const user = response.user;
        if (user) {
          user.updateProfile({ displayName: firstName }).then((response) => {
            if (response) {
              console.log(response);
            }
          });
        }

        db.collection("Users")
          .doc(response.user.uid)
          .set({ displayName: firstName });
      })
      .catch((e) => alert(e));

    auth.signOut();
    history.push("/");
  };

  return (
    <LoginWrapper>
      <LoginSection>
        <LoginContainer>
          {" "}
          <LoginPageContent>
            <LoginForm>
              <LoginFormHeader>
                <h1 className='formTitle'>Register</h1>
                <p className='formLegend'>
                  Please fill in the information below
                </p>
              </LoginFormHeader>
              <LoginFormItem>
                <input
                  type='text'
                  className='formInput'
                  placeholder='Frist Name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autofocus
                  required
                />
                <label className='floatingLabel'>Email</label>
              </LoginFormItem>
              <LoginFormItem>
                <input
                  type='text'
                  className='formInput'
                  placeholder='Last Name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autofocus
                  required
                />
                <label className='floatingLabel'>Email</label>
              </LoginFormItem>
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
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className='floatingLabel'>Password</label>
              </LoginFormItem>
              <LoginSubmit onClick={register}>Create my Account</LoginSubmit>
              <LoginSocials></LoginSocials>
            </LoginForm>
          </LoginPageContent>
        </LoginContainer>
      </LoginSection>
    </LoginWrapper>
  );
};

export default Register;
