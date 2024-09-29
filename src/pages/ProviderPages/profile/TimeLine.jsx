import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import profile from "../../../assets/profile.jpg";
import coverTimeLine from "../../../assets/coverTimeLine.jpg";
import { BsCameraFill } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { selectProductOwner } from "../../../app/UserInfo";

const TimeLine = ({ StoreName, bio, inner_img, outer_img }) => {
  const [profileImages, setProfileImages] = useState({
    inner_img: coverTimeLine,
    outer_img: profile,
  });

  const [showFullImage, setShowFullImage] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  
  const ProvOwner = useSelector(selectProductOwner);

  // Function to handle the image upload
  const handleImageUpload = (e, imageType) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImages((prevImages) => ({
          ...prevImages,
          [imageType]: reader.result,
        }));

        // Send the file to the backend (mockup example)
        const formData = new FormData();
        formData.append("file", file);
        // Example: Send to backend
        // fetch("/upload-image", { method: "POST", body: formData });
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to open the image in a modal
  const handleImageClick = (imgSrc) => {
    setImageToShow(imgSrc);
    setShowFullImage(true);
  };

  // handle navigation to edit account 
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/proUserName/providerAccount')
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 to-white pb-8 mb-10">
      {/* Full Image Modal */}
      {showFullImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <img src={imageToShow} alt="Full Image" className="max-w-full max-h-full" />
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={() => setShowFullImage(false)}
          >
            &times;
          </button>
        </div>
      )}

      {/* Store Inner Image */}
      <div className="relative max-w-5xl w-full h-96 flex justify-center sm:h-72">
        <img
          src={profileImages.inner_img || coverTimeLine}
          alt="cover photo"
          className="object-cover w-full h-full rounded-b-lg"
          onClick={() => handleImageClick(profileImages.inner_img)}
        />
        {ProvOwner && (
          <div className="absolute bottom-3 left-5 bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 md:py-1 md:px-2">
            <label className="flex items-start justify-center gap-2 cursor-pointer">
              <BsCameraFill className="w-5 h-5" />
              <p className="md:hidden">Edit Inner Img</p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageUpload(e, "inner_img")}
              />
            </label>
          </div>
        )}

        {/* Store Outer Image */}
        <div className="absolute -bottom-20 md:-bottom-16">
          <img
            src={profileImages.outer_img || profile}
            alt="profile photo"
            className="w-44 h-44 object-cover rounded-full border-4 border-white 
            lg:w-40 lg:h-40 md:w-36 md:h-36 sm:w-32 sm:h-32"
            onClick={() => handleImageClick(profileImages.outer_img)}
          />
          {ProvOwner && (
            <label className="bg-gray-200 p-2 rounded-full absolute left-3 bottom-3 sm:p-1.5 hover:bg-gray-300 md:bottom-2 md:left-2 cursor-pointer">
              <BsCameraFill />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageUpload(e, "outer_img")}
              />
            </label>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 mt-24 md:mt-20">
        <h1 className="text-3xl text-gray-900 font-bold md:text-2xl sm:text-xl">
          {StoreName}
        </h1>
        <p className="max-w-md w-full px-6">{bio}</p>
      </div>

      {ProvOwner && (
        <div className="mt-10 bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 active:scale-95">
          <button 
            onClick={handleNavigate}
            className="flex items-center gap-2">
            <CiEdit className="w-5 h-5" />
            <span>Edit store information</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default TimeLine;
