import React from "react";
import { config } from "../constants";
import { BiTime } from "react-icons/bi";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="max-w-6xl pt-10 m-auto p-10">
      <h1 className="text-center text-5xl font-serif mb-20">
        {config.news.title}
      </h1>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {config.news.berita.map((data) => (
          <div key={data.id} className="flex flex-col gap-5">
            <img
              className="hover:brightness-75 transition-all cursor-pointer"
              src={data.img}
              alt=""
            />
            <Link
              to={`/news/${data.id}`}
              className="font-serif text-3xl leading-[50px] cursor-pointer hover:text-blue-500 transition-all "
            >
              {data.title}
            </Link>
            <div className="flex text-gray-500  items-center gap-3">
              <BiTime className="text-2xl " />
              <p className="text-xl">{data.time} </p>
            </div>
            <p className="truncate text-xl text-gray-600 leading-10  ">
              {data.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
