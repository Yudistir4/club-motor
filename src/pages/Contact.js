import React, { useState } from "react";
import { config } from "../constants";

const Contact = () => {
  const [input, setInput] = useState({ name: "", email: "", pesan: "" });

  const handleChange = (e) =>
    setInput((values) => ({ ...values, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput({ name: "", email: "", pesan: "" });
  };

  return (
    <div>
      {/* Map */}
      <img
        className="w-full h-[400px] object-cover hover:brightness-75 transition-all cursor-pointer"
        src={config.contact.map}
        alt=""
      />
      {/* Info */}
      <div className="my-10 max-w-6xl pt-20 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 p-10">
        {config.contact.info.map((data, i) => (
          <div className="text-center flex flex-col items-center gap-5" key={i}>
            <div className="text-5xl text-yellow-600/80">{data.icon}</div>
            <h2 className="text-3xl font-serif">{data.title}</h2>
            <p className="text-xl">{data.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Leave Message */}
      <div className="bg-emerald-800/5 p-10 py-20 flex flex-col items-center">
        <div className="text-center">
          <h2 className="font-serif text-5xl">{config.contact.leave.title}</h2>
          <p className="text-xl mt-5">{config.contact.leave.subtitle}</p>
        </div>
        <form
          onSubmit={submit}
          className="max-w-3xl w-full p-10 flex flex-col gap-10"
        >
          {config.contact.leave.form.map((data) => (
            <input
              key={data.name}
              type="text"
              name={data.name}
              placeholder={data.placeholder}
              onChange={handleChange}
              value={input[data.name]}
              className="px-4 text-lg py-5 rounded-xl outline-none w-full"
            />
          ))}
          <button
            type="submit"
            className="hover:bg-black transition-all bg-yellow-600/80 p-5 text-white font-bold text-xl rounded-full"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
