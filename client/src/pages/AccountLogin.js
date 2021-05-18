import React from "react";

import { motion } from "framer-motion";
import Login from "./../components/User/Login/Index";

const AccountLogin = () => {
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}>
        <Login />{" "}
      </motion.div>
    </>
  );
};

export default AccountLogin;
