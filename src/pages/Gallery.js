import React from "react";
import { config } from "../constants";

const Gallery = () => {
  return (
    <div className="p-10 text-center max-w-6xl m-auto">
      <h1 className="text-5xl font-serif mb-5"> {config.gallery.title}</h1>
      <h2 className="text-xl"> {config.gallery.subtitle}</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
        {config.gallery.img.map((img, i) => (
          <img
            key={i}
            className={`hover:scale-105 transition-all cursor-pointer aspect-square object-cover ${
              i === 0 ? "sm:col-span-2 md:col-span-1" : ""
            }`}
            src={img}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
