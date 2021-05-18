import React from "react";

import { motion } from "framer-motion";
import Register from "./../components/User/Register/Index";

const AccountRegister = () => {
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}>
        <Register />
      </motion.div>
    </>
  );
};

export default AccountRegister;
