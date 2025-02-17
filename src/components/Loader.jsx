import React from "react";
import { Html } from "@react-three/drei";   //check docs 

const Loader = () => {
  return (
    <Html>
      <div className=" flex justify-center items-center">
        <div className="w-20 h-20 border-opacity-20 border-blue-500 border-t-tblue-500 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;
