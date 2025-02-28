import React from "react";
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { IMG_CDN_URL } from "../utils/constants";

const   VideoTitle = ({ title, overview,poster_path }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24  absolute text-white bg-gradient-to-r from-black ">
     
      <h1 className="text-6xl flex items-center gap-2 font-bold">{title} <img className="w-24 h-24 object-center rounded-lg" src={IMG_CDN_URL+ poster_path}></img></h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex space-x-4">
        <button className=" flex items-center bg-white text-black p-4 px-16 text-xl  rounded-lg hover:bg-opacity-80"><FaPlay className="mr-2" /> Play</button>
        <button className="bg-gray-500 text-white flex items-center p-4 px-16 text-xl bg-opacity-50 rounded-lg"><GoInfo className="mr-2 text-3xl" /> More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
