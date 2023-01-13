import React from "react";
import { config } from "../constants";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex items-center flex-col gap-5 p-10">
      <img className="w-20 sm:w-24" src={config.logo} alt="" />
      <p className="max-w-lg text-lg text-center">
        Motor Club Indonesia merupakan Induk organisasi dari Club-club Motor se
        Indonesia.
      </p>
      <div className="text-white flex gap-5">
        <div className="h-14 w-14 flex items-center justify-center bg-blue-500 rounded-full">
          <ImFacebook className="text-2xl" />
        </div>
        <div className="h-14 w-14 flex items-center justify-center bg-cyan-500 rounded-full">
          <AiOutlineTwitter className="text-2xl" />
        </div>
        <div className="h-14 w-14 flex items-center justify-center bg-blue-500 rounded-full">
          <AiOutlineInstagram className="text-2xl" />
        </div>
        <div className="h-14 w-14 flex items-center justify-center bg-red-500 rounded-full">
          <AiFillYoutube className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
