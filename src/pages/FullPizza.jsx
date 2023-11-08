import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const FullPizza = () => {
  const [pizza, setPizza] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          " https://64ed91b91f872182714164d4.mockapi.io/app/photos/alif-test-junior/" +
            id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получение пиццы!");
      }
    }
    fetchPizza();
  }, []);

  return (
    <div className="w-[100%] flex flex-wrap justify-center py-[30px]">
      <div className="max-w-lg p-6 bg-white border border-[#FE5F1E] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center">
          <img className="w-[260px]" src={pizza.imageUrl} alt="Pizza" />
        </div>

        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
          {pizza.name}
        </h5>

        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {pizza.description}
        </p>
        <p className="items-center text-[22px] font-bold hover:underline text-center">
          цена {pizza.price}₽
        </p>
      </div>
      <Link to="/" className="flex justify-center w-[100%] py-[20px]">
        <span className="bg-[#282828] text-[#fff] w-[210px] rounded-[30px]  border-[1px] py-[10px] px-[20px] flex justify-center items-center gap-2">
          Вернуться назад
        </span>
      </Link>
    </div>
  );
};

export default FullPizza;
