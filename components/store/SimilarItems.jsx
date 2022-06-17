import React from "react";
import useFetch from "../../hooks/useFetch";
import ProductCard from "./ProductCard";

const SimilarItems = () => {
  const baseURL = process.env.CMS_URL;
  const { data, loading } = useFetch(`${baseURL}/products?populate=*`);

  return (
    <>
      <h2 className="border-b border-warning pb-1 text-lg xl:text-xl font-semibold">Items You May Like</h2>
      <div className="pt-12 pb-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 text-secondary">
        {data?.data.slice(0, 3).map((product, i) => (
          <ProductCard product={product} key={i} />
        ))}
      </div>
    </>
  );
};

export default SimilarItems;
