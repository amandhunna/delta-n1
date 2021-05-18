import React from "react";

import SideDrawer from "../Components/SideDrawer/Index";
import Navbar from "./../Components/Navbar/Index";
import AccountInfo from "./../Components/User/AccountInfo/AccountInfo";
import { motion } from "framer-motion";

const HomePage = () => {
  /* const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen); */

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}>
        {" "}
      </motion.div>
    </>
  );
};

export default HomePage;
