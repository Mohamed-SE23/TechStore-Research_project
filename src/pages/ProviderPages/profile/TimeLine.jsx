import React from "react";
import profile from "../../../assets/profile.jpg";
import coverTimeLine from "../../../assets/coverTimeLine.jpg";
import { BsCameraFill } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";

const TimeLine = ({ StoreName, bio }) => {

  const ProvOwner = true;

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 to-white pb-8 mb-10">
      <div className="relative max-w-5xl w-full h-96 flex justify-center sm:h-72">
        <img
          src={coverTimeLine}
          alt="cover photo"
          className="object-cover w-full h-full rounded-b-lg"
        />
        <div className="absolute bottom-3 left-5 bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 md:py-1 md:px-2">
          <button className="flex items-start justify-center gap-2">
            <BsCameraFill className="w-5 h-5" />
            <p className="md:hidden">Edit Inner Img</p>
          </button>
        </div>
        <div className="absolute -bottom-20 md:-bottom-16">
          <img
            src={profile}
            alt="profile photo"
            className="w-44 h-44 rounded-full border-4 border-white 
                                                              lg:w-40 lg:h-40 md:w-36 md:h-36 sm:w-32 sm:h-32 "
          />
          <button className="bg-gray-200 p-2 rounded-full absolute left-3 bottom-3 sm:p-1.5 hover:bg-gray-300 md:bottom-2 md:left-2">
            <BsCameraFill />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mt-24 md:mt-20 ">
        <h1 className="text-3xl text-gray-900 font-bold md:text-2xl sm:text-xl">
          {StoreName}
        </h1>
        <p className="max-w-md w-full px-6">{bio}</p>
      </div>
      {ProvOwner && (
        <div className="mt-10 bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 active:scale-95">
          <button className="flex items-center gap-2">
            <CiEdit className="w-5 h-5" />
            <span>Edit store information</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default TimeLine;
