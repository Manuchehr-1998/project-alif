import React, { useState } from "react";

const Categories = ({value,onClickCategory}) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытие",
  ];
 

  return (
    <div className="w-[80%]">
      <ul className="flex flex-wrap">
        {categories.map((categoryName,i) => (
          <li
            onClick={() => onClickCategory(i)}
            key={i}
            className={
              value === i
                ? "py-[13px] px-[30px] mr-[10px] bg-black text-white rounded-[30px] cursor-pointer transition:bg-0.1s ease-in-out"
                : "py-[13px] px-[30px] mr-[10px] bg-[#f9f9f9] rounded-[30px] cursor-pointer transition:bg-0.1s ease-in-out"
            }
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
