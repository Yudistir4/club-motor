import React from "react";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { useParams } from "react-router-dom";
import { config } from "../constants";

const SingleNews = () => {
  let { id } = useParams();
  let news = config.news.berita.filter((data) => data.id === parseInt(id))[0];

  return (
    <div className="max-w-6xl m-auto p-20 flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <div className="flex text-gray-500  items-center gap-3">
          <BiTime className="text-2xl " />
          <p className="text-xl">{news.time} </p>
        </div>

        <div className="text-gray-500 flex gap-3">
          <ImFacebook className="text-xl" />
          <AiOutlineTwitter className="text-xl" />
          <AiOutlineInstagram className="text-xl" />
          <AiFillYoutube className="text-xl" />
        </div>
      </div>
      <img src={news.img} alt="" />
      <h1 className="text-3xl font-serif md:text-5xl md:leading-[60px]">
        {" "}
        {news.title}
      </h1>

      <p className="text-xl leading-10 text-justify">{news.caption}</p>
    </div>
  );
};

export default SingleNews;
