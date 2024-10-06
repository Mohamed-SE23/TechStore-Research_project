import React, { useEffect, useState } from "react";
import Hero from "../../../components/reusable/Hero";
import Title from "../../../components/reusable/title";
import SearchField from "../../../components/reusable/Search";
import Loading from "../../../components/reusable/Loading";
import SkeletonLoading from "../../../components/reusable/SkeletonLoading";
import StoreCard from "./StoreCard";
import PageLoading from "../../../components/reusable/PageLoading";
import StoresLoading from "./StoresLoading";

const Stores = () => {
  const [searching, setSearching] = useState("");
  const [loading, setLoading] = useState(false);
  const [stores, setStores] = useState();

  const fetchStores = async () => {

    try{
      setLoading(true);
      const response = await axios.git('/api/v1/stores/stores-with-out-product');

      setLoading(false);
      console.log(response.data.stores)
      setStores(response.data.stores)

    } catch(error) {
      setLoading(false);
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchStores();
  },[])

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

      {/* all stores storeName, inner_image, outer_image, ownerId, bio */}
    {loading ? 
      <StoresLoading /> // stores skeleton loading
      : 
      <div>
      {stores?.map((store, i) => 
         <StoreCard 
                  key={i}
                  storeName={store.store_name}
                  inner_image={store.inner_image_url}
                  outer_image={store.outer_image_url}
                  ownerId={store.owner_id}
                  bio={store.store_bio || ""}
                  />
      )}
    </div>}
    </div>
  );
};

export default Stores;
