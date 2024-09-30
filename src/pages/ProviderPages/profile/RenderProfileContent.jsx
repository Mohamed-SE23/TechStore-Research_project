import React, { useState } from "react";
import Products from "./Products";
import Information from "./Information";

const RenderProfileContent = ({ storeData }) => {
  const [activeTab, setActiveTab] = useState("products");

  const renderContent = () => {
    switch (activeTab) {
      case "products":
        return <Products />;
      case "informations":
        return <Information 
                      storeData={storeData}/>;
    }
  };

  return (
    <div className="flex flex-col  items-center justify-center bg-white">
      <div className="max-w-5xl w-full">
        <ul className="flex items-center justify-center gap-20 border-b-2 w-full sm:gap-14">
          <li
            onClick={() => setActiveTab("products")}
            className={`cursor-pointer hover:text-[#ff7a57] pb-3 pt-5 ${
              activeTab === "products"
                ? "font-bold text-[#ff7a57] border-b-2 border-b-[#ff7a57]"
                : ""
            }`}
          >
            Products
          </li>
          <li
            onClick={() => setActiveTab("informations")}
            className={`cursor-pointer hover:text-[#ff7a57] pb-3 pt-5 ${
              activeTab === "informations"
                ? "font-bold text-[#ff7a57] border-b-2 border-b-[#ff7a57]"
                : ""
            }`}
          >
            Informations
          </li>
        </ul>
      </div>
      <div className="max-w-4xl w-full">{renderContent()}</div>
    </div>
  );
};

export default RenderProfileContent;
