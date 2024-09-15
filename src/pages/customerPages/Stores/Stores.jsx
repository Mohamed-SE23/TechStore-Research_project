import React, { useState } from "react";
import Hero from "../../../components/reusable/Hero";
import Title from "../../../components/reusable/title";
import SearchField from "../../../components/reusable/Search";
import Loading from "../../../components/reusable/Loading";
import SkeletonLoading from "../../../components/reusable/SkeletonLoading";

const Stores = () => {
  const [searching, setSearching] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(searching);
  console.log(loading);

  return (
    <div>
      <Hero />
      <Title name={"Stores"} />
      <SearchField
        setLoading={setLoading}
        loading={loading}
        setSearching={setSearching}
        placeholder={"Search for store..."}
      />
      <Loading />
      {/*  Skeleton Loading */}
      {/* <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-4 items-center justify-center w-full lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 px-8 mb-20">
          {Array(8) // Create an array with 6 items to simulate 6 skeleton loaders
            .fill(null)
            .map((_, index) => (
              <SkeletonLoading key={index} /> // Render 6 SkeletonLoader components
            ))}
        </div>
      </div> */}
    </div>
  );
};

export default Stores;
