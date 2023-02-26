import React from "react";
import CategoryData from "../data/CategoryData";


const Catagories = () => {
  return (
    <>
      <div>
        <div className="text-center my-3 text-3xl font-bold">
          <h2>The cloths catagories we have </h2>
        </div>
        <div className="flex flex-wrap gap-3 pt-12 pb-12">
          {
            CategoryData.map((data) => {
              return(
          <div key={data.id} className="justify-end m-auto ">
            <img
              className="object-contain h-48 w-48 rounded-full"
              src={data.image}
              alt="mens ware"
            />
            <h3 className="m-auto w-full justify-center items-center text-center pt-2 font-bold">{data.Category}</h3>
            <h3 className="m-auto w-full justify-center items-center text-center pt-1 font-semibold">{data.start}</h3>
          </div>
              )
            })
          }
          
        </div>
      </div>
    </>
  );
};

export default Catagories;
