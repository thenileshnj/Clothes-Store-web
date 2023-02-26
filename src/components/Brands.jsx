import React from "react";
import BrandsData from "../data/BrandsData";

const Brands = () => {
  return (
    <>
      <div>
        <div className="justify-center pt-4">
          <h4 className="text-center italic text-lg font-semibold">
            MOST LOVED BRANDS
          </h4>
          <h2 className="text-center font-extrabold text-xl">
            Brands We suggest and Promote in our store
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {BrandsData.map((data) => {
            return (
              <div key={data.id} className="w-64 h-32 p-2 m-8">
                <img src={data.image} alt="cotton king " />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Brands;
