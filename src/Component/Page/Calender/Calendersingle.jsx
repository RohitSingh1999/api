import { React, useState, useEffect } from "react";
import Btn from "../../Common/Btn";
import Calendar from "../Calender/Calender";
import Heading from "../../Common/Heading";
import Sidebar from "../../Common/Sidebar";
import imagesData from "../../Constant/JsonData";
import { useParams, Link } from "react-router-dom";
import AllcalendarData from "./Calendersinglejsondata";
// import Checkout from "./Checkout";
const Calendersingle = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [imageData, setImageData] = useState(null);
  const [selectedMonthData, setSelectedMonthData] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const selectedImageData = imagesData.find(
      (image) => String(image.slug) === id
    );

    setImageData(selectedImageData);
    const selectedYearData = AllcalendarData.find(
      (yearData) => yearData.year === selectedImageData.Year
    );
    const selectedCategory = selectedYearData?.categories.find(
      (category) => category.category === selectedImageData.name
    );
    setSelectedMonthData(selectedCategory?.months || []);
    const selectedMonth = selectedCategory?.months.find(
      (month) => month.id === selectedImageData.id
    );

    const storedQuantity = localStorage.getItem("cartQuantity");
    if (storedQuantity) {
      setQuantity(parseInt(storedQuantity, 10));
    }
  }, [id, imagesData, AllcalendarData]);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const fetchedCartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartData(fetchedCartData);
  }, [showSidebar]);

  useEffect(() => {
    const fetchedCartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartData(fetchedCartData);
  }, [showSidebar, quantity]);

  if (!imageData) {
    return <div>Image not found</div>;
  }
  const handleAddToCart = () => {
    if (quantity === 0) {
      return;
    }

    const newItem = {
      id: imageData.id,
      name: imageData.name,
      Year: imageData.Year,
      url: imageData.url,
      quantity: quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = existingCart.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity = quantity;
    } else {
      existingCart.push(newItem);
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setQuantity(1);
    setShowSidebar(true);
    document.body.classList.add("overflow-hidden");
  };

  return (
    <>
      <Sidebar />
      <div className="container mx-auto">
      <div className="container px-6 mx-auto mt-40 ">
        <div className="text-h3 font-bold font-poppins">
          <Heading HeadingText="Calendars" />
        </div>
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-2 font-poppins item-center ">
        <div className="flex lg:justify-center items-center">
          <img
            className="w-[60%] h-[80%] object-contain"
            src={imageData.url}
            alt={imageData.name}
          />
        </div>
        <div className="flex flex-col mb-0 items-start justify-center p-6">
          <h1 className="lg:text-h3 text-h4 leading-tight font-bold lg:mt-10 ">
            WMH Calendar {imageData.Year} - {imageData.name}
          </h1>
          <div className="mt-2">
            <span className="text-h6 font-bold">Category :</span>{" "}
            <span className="text-p font-regular">Calendar</span>
          </div>
          <Link
            to={`https://www.wmhmag.com/wmh-calendar-${imageData.slug.toLowerCase()}`}
          >
            <div className="mt-6" onClick={handleAddToCart}>
              <Btn btname="Buy Now" />
            </div>
          </Link>
        </div>
      </div>
      </div>
      <div className="bg-dimblack py-14 font-poppins">
        <h2 className="text-h4 font-bold text-white xl:ml-32 xl:px-0 px-6 mb-10">
          Calendar Description
        </h2>
        <div className="xl:mx-32  mx-0 text-black bg-white md:p-10 p-6 mt-5 mb-10">
          <div>
            <h5 className="text-h5 mt-5">
              WMH Calendar {imageData.Year} - {imageData.name}
            </h5>
            <p className="text-p mt-8 leading-[1.5rem]">
              {imageData.Discription}
            </p>
          </div>
          <div className="grid grid-cols-1 2xl:grid-cols-4 lg: md:grid-cols-2 gap-8 mt-8 text-black my-10">
            {selectedMonthData?.map((item) => (
              <div
                className="shadow-xl p-8 hover:scale-105 transition-transform duration-300 ease-in-out"
                key={item.id}
              >
                <p className="bg-light-purple w-20 p-2 text-center text-black float-right -mr-8 -mt-8 text-[12px]">
                  {item.month}
                </p>
                <h4 className="text-h5 mb-4">{item.name}</h4>
                {item.credits && (
                  <ul>
                    {item.credits.map((credit, index) => (
                      <li
                        key={index}
                        className="text-p"
                        style={{ wordWrap: "break-word" }}
                      >
                        {credit}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-h4 font-bold text-black xl:ml-32 ml-12 mt-16 mb-10">
          You may also be interested in
        </h2>
        <Calendar />
      </div>
    </>
  );
};

export default Calendersingle;
