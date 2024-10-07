import React from "react";
import ProductsCard from "../../../../components/reusable/ProductsCard";

const Laptops = ({ categories }) => {
  return (
    <>
      {categories?.map((category) => {
        category.category_name === "laptops" && (
          <div className="container mb-20">
            <div className="text-center my-20">
              <h1 className="text-2xl font-bold text-slate-800">Laptops</h1>
            </div>
            <div className="flex items-start justify-center">
              <div className="grid grid-cols-4 gap-8 justify-center items-center mx-auto lg:gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {category.products.map((product) => (
                  <ProductsCard
                    id={product.id}
                    img={product.image_url}
                    title={product.name}
                    description={product.description}
                    price={product.price}
                    btnTxt={"add to cart"}
                    // store={'store Name'}
                    // location={'WNS'}
                    // owner={'owner Name'}
                    // whatsappNum={'1234567890'}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Laptops;
