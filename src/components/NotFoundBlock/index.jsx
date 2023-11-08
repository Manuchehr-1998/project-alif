import React from "react";
import { Link } from "react-router-dom";
import cartEmptyImg from "../../assets/img/empty-cart.png";

const index = () => {
  return (
    <div className=" text-center">
      <h2 className="text-4xl font-bold">
        Корзина пустая <span>😕</span>
      </h2>
      <p className="text-[#777777] ">
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <div className="flex justify-center">
        <img src={cartEmptyImg} alt="Empty cart" />
      </div>
      <Link to="/" className="flex justify-center">
        <span className="bg-[#282828] text-[#fff] w-[210px] rounded-[30px]  border-[1px] py-[10px] px-[20px] flex justify-center items-center gap-2">Вернуться назад</span>
      </Link>
    </div>
  );
};

export default index;
