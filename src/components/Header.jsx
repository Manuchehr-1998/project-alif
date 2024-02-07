import React from "react";
import logoImg from "../assets/img/pizza-logo.svg";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";

export default function Header() {
  const { items, totalPrice } = useSelector((state) => state.cartSlice);
  const location = useLocation();
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="p-[40px] border-b-[1px] border-slate-200">
      <div className="flex justify-between items-center flex-wrap">
        <Link to="/" className="md:pb-1  lg:pb-2">
          <div className="flex gap-4 ">
            <img width="38" src={logoImg} alt="Pizza logo" />
            <div>
              <h1 className="text-4xl font-semibold text-[#181818]">
                Pizza TJK
              </h1>
              <p className="text-[#7b7b7b]">самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="md:pt-2">
          {location.pathname !== "/cart" && (
            <div className="bg-[#FE5F1E] rounded-[30px] w-[150px] h-[50px] flex justify-center">
              <Link to="/cart" className="flex items-center text-[#fff] gap-2">
                <span className="border-r-[1px] border-slate-200 px-2">
                  {totalPrice} ₽
                </span>
                <div className="button__delimiter"></div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{totalCount}</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
