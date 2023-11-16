import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const demoText = {
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const SingleProduct = () => {
    const {id} = useParams()
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch("/products.json");
              const data = await response.json();
             const product = data.filter((p) => p.id == id)
            //  console.log(product[0])
             setProducts(product[0])
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          fetchData();
    }, [id])

    const {image, title, category, price} = products;


  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      
      <div className="flex items-center gap-2 pt-8 text-Black/50">
        <a href="/">Home</a> <a href="/shop" className="font-semibold text-black">/ Shop</a>
      </div>

      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-6 sm:mt-10">
          <div>
          <div>
            <div className="grid gird-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
              {/* Product Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt="Product-Image"
                  className="w-full"
                />
              </div>
              {/* Product Details */}
              <div className="flex flex-col justify-between">
                <div>
                  {/* Product Title */}
                  <h1 className="text-3xl text-red-500 font-semibold sm:text-4xl">
                    {title}
                  </h1>
                  {/* Product Description */}
                  <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sed enim ut sem viverra aliquet eget sit. Odio
                    facilisis mauris sit amet
                  </p>
                  {/* Star Ratings */}
                  <span className="my-3 text-xl text-yellow-600 flex items-center gap-1 sm:my-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </span>
                  {/* Product Price */}
                  <span className="text-xl text-red-500 font-semibold sm:text-2xl">
                    ${price}
                  </span>
                </div>
                {/* Quantity Input and Order Button */}
                <div className=" ">
                  <div className="text-left flex flex-col gap-2 w-full">
                    {/* Quantity Label */}
                    <label className="font-semibold">Quantity</label>
                    {/* Quantity Input */}
                    <input
                      className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                      type="number"
                      defaultValue="1"
                      required
                    />
                  </div>
                  {/* Order Button */}
                  <div className="w-full text-left my-4">
                    <button
                      className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white text-md font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
                      title="Confirm Order"
                    >
                      <span>Confirm Order</span>
                      <FaArrowAltCircleRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* product details */}
      <div className="mt-10">
        <h2 className="text-sm font-medium text-gray-900">Details</h2>

        <div className="mt-4 space-y-6">
          <p className="text-sm text-gray-600">
            {demoText.details} {demoText.details}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-medium text-gray-900">Description</h2>

        <div className="mt-4 space-y-6">
          <p className="text-sm text-gray-600">
            {demoText.description} {demoText.description}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-medium text-gray-900">Highlights</h2>
        <div className="mt-4 space-y-4">
          <li className="text-sm text-gray-600">
            {demoText.highlights[0]}
          </li>
          <li className="text-sm text-gray-600">
            {demoText.highlights[1]}
          </li>
          <li className="text-sm text-gray-600">
            {demoText.highlights[2]}
          </li>
          <li className="text-sm text-gray-600">
            {demoText.highlights[3]}
          </li>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
