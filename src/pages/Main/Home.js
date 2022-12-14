import { useDispatch, useSelector } from "react-redux"
import React from "react";
import ProductCard from "../../components/ProductCard";
import { toggleBrand, toggleStock, clearFilter } from "../../redux/actions/filterActions";

const Home = () => {

  const dispatch = useDispatch()
  const { filter: { brands, stock }, keyword } = useSelector(state => state.filter)
  const products = useSelector(state => state.product.products)

  const activeClass = "text-white  bg-indigo-500 border-white";
  let content;

  if (products?.length && (stock || brands?.length || true)) {
    content = products
      .filter(product => product.model.toLowerCase().includes(keyword.toLowerCase()))
      .filter(product => {
        if (stock) {
          return product.status === true
        }
        return product

      })
      .filter(product => {
        if (brands.length) {
          return brands.includes(product.brand)
        }
        return product

      })
      .map((product) => (
        <ProductCard key={product.model} product={product} />
      ))
  }

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : null} `}
          onClick={() => dispatch(toggleStock())} >
          In Stock
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('amd') ? activeClass : null}`}
          onClick={() => dispatch(toggleBrand('amd'))} >
          AMD
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('intel') ? activeClass : null}`}
          onClick={() => dispatch(toggleBrand('intel'))} >
          Intel
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold border-indigo-500 text-indigo-500`} /*${!brands.includes('intel amd') ? activeClass : null}*/
          onClick={() => dispatch(clearFilter())} >
          Clear Filter
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {content?.length ? content : <div>Nothing to show here.</div>}
      </div>
    </div>
  );
};

export default Home;
