import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

const typeName = ["тонкое", "традиционное"];

const PizzaBlock = ({ id, name, price, imageUrl, size, types }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cartSlice.items.find((obj) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      imageUrl,
      type: typeName[activeType],
      size: size[activeSize],
    };
    dispatch(addItem(item));
  };

  return (
    <div className="w-[280px] text-center mb-[55px]">
      <img className="w-[260px]" src={imageUrl} alt="Pizza" />
      <h4 className="text-[20px] font-black tracking-[1%] mb-[20px] h-[30px]">
        {name}
      </h4>
      <div className="flex bg-[#f3f3f3] rounded-[10px] flex-col p-[6px] w-[100%]">
        <ul className="flex flex-1 py-2 w-[100%]">
          {types.map((type) => (
            <li
              key={type}
              onClick={() => setActiveType(type)}
              className={
                activeType === type
                  ? "bg-white w-[100%] justify-center rounded-[10px] flex items-center"
                  : "w-[100%] justify-center rounded-[10px] flex items-center"
              }
            >
              {typeName[type]}
            </li>
          ))}
        </ul>
        <ul className="flex flex-1 w-[100%]">
          {size.map((size, i) => (
            <li
              key={i}
              onClick={() => setActiveSize(i)}
              className={
                activeSize === i
                  ? "bg-white w-[100%] justify-center rounded-[10px] flex items-center"
                  : "w-[100%] justify-center rounded-[10px] flex items-center"
              }
            >
              {size}см.
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between mt-[20px]">
        <div className="font-bold text-[22px] leading-[27px] trackin-[0.015em]">
          {price}₽
        </div>
        <button
          onClick={onClickAdd}
          className="bg-[#fff] hover:bg-[#fe5f1e] text-[#fe5f1e] hover:text-white rounded-[30px] border-[#fe5f1e] border-[1px] py-[10px] px-[20px] flex justify-center items-center gap-2"
        >
          <i className="text-[24px]">+</i>
          Добавить
          {addedCount > 0 && <span>{addedCount}</span>}
        </button>
      </div>
    </div>
  );
};

export default PizzaBlock;
