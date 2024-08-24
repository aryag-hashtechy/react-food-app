import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import endPoints from "../../common/endPoints";
import { addToWishlist, deleteWishlist } from "../../feature/wishlist/wishlistSlice";
import axiosProvider from "../../common/axiosProvider";
import Paginate from "./Paginate";
import SearchBar from "./SeachBar";
import Title from "./Title";
import Card from "./Card";
import { keepPreviousData } from "@tanstack/react-query";
import { useQuery, useMutation } from '@tanstack/react-query';
import { handleToast } from "../../lib/GlobalMethods";
import Toast from "./Toast";

// Import Swiper styles
import "swiper/css";

const Body = () => {
  const wishlist = useSelector(state => state.wishlist.wishlist)
  const [category, setCategory] = useState("Foods");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState([1]);
  const [totalCategory, setTotalCategory] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toast, setToast] = useState({
    message: null,
    type: null,
    isVisible: false,
  });

  const { data: foodItems } = useQuery({
    queryKey: ['fetchData', category, currentPage, pageCount, wishlist],
    queryFn: async () => {
      const response = await axiosProvider({
        method: "GET",
        apiURL: endPoints.getAllFood,
        params: { category, page: currentPage },
      })

      setTotalCategory(response?.data?.category);
      handlePageCount(response?.data?.data.totalPage);

      response.data.data.data.map((items) => {
        const isPresnet = wishlist.find(data => data === items.id)
        isPresnet ? items.is_in_wishlist = true : <></>
        return items;
      })

      return response.data.data.data
    },
    retry: 0,
    placeholderData: keepPreviousData,
  })

  const handlePageCount = (totalPage) => {
    let page = [];
    let count = 1;
    while (count <= totalPage) {
      page.push(count);
      count++;
    }
    setPageCount(page);
  };

  const handleCreateWishlist = useMutation({
    mutationKey: ['createWishlist'],
    mutationFn: async (food_id) => {
      return await axiosProvider({
        method: "POST",
        apiURL: endPoints.createWishlist,
        params: { food_id },
        navigate,
      })
    },
    onSuccess: (response) => {
      dispatch(addToWishlist(response?.data?.food_id));
      handleToast(setToast, response)
    },
    onError: (error) => {
      handleToast(setToast ,error.response)  
    }
  })

  const handleDeleteWishlist = useMutation({
    mutationKey: ['deleteWishlist'],
    mutationFn: async (food_id) => {
      return await axiosProvider({
        method: "DELETE",
        apiURL: endPoints.deleteWishlist,
        params: { food_id },
        navigate,
      });
    },
    onSuccess: (response) => {
      dispatch(deleteWishlist(response.data.food_id));
      handleToast(setToast, response)
    },
    onError: (error) => {
      handleToast(setToast, error.response)  
    }
  })

  const createCart = async (foodId) => {
    try {
      const response = await axiosProvider({
        method: "POST",
        apiURL: endPoints.createCart,
        navigate,
        params: { foodId },
      });
      
      if(response?.status === 200){
        handleToast(setToast, response)
      }
    } catch (err) {
      handleToast(setToast, err.response)
    }
  };

  const handlePageChange = (id) => {
    setCurrentPage(id);
  };

  const handleIncrement = () => {
    if (currentPage < pageCount?.length) {
      setCurrentPage((items) => ++items);
    }
  };

  const handleDecrement = () => {
    if (currentPage > 1) {
      setCurrentPage((items) => --items);
    }
  };

  return (
    <>
      {toast?.isVisible && <Toast type={toast.type} message={toast.message} />}
      <div className="body__main">
        <h1 className="body__title ">
          Delicious <br />
          food for you
        </h1>
      </div>

      <SearchBar navigateTo={"/search-page"} />

      <Title
        setCategory={setCategory}
        setCurrentPage={setCurrentPage}
        category={category}
        totalCategory={totalCategory}
      />

      <p
        className="body__text"
        onClick={() => navigate(`/category/${category}?page=${currentPage}`)}
      >
        See more
      </p>

      <div className="slider__main">
        <Swiper spaceBetween={-100} slidesPerView={1}>
          {foodItems &&
            foodItems?.map((items) => (
              <SwiperSlide>
                <Card
                  id={items?.id}
                  name={items?.name}
                  foodImage={items?.foodImage}
                  price={items?.price}
                  is_in_wishlist={items?.is_in_wishlist}
                  createCart={createCart}
                  handleCreateWishlist={handleCreateWishlist}
                  handleDeleteWishlist={handleDeleteWishlist}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="body__paginate">
        <Paginate
          pageCount={pageCount}
          handlePageChange={handlePageChange}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default Body;
