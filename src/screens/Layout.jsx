import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";
const Layout = () => {
  return (
    <>

      <div className="w-full">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
