import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Sort, { sortlist } from "../components/Sort";
import qs from "qs";
import axios from "axios";
import Categories from "../components/Categories";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination.jsx/index.jsx";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );
  const { items, status } = useSelector((state) => state.pizza);

  const { searchValue } = useContext(SearchContext);

  const onClickCategory = useCallback((idx) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    const order = sort.sortPropety.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortPropety.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    dispatch(
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage,
      })
    );
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortPropety: sort.sortPropety,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort, currentPage]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(location.search.substring(1));
      const sort = sortlist.find(
        (obj) => obj.sortPropety === params.sortPropety
      );
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    getPizzas();
  }, [categoryId, sort, searchValue, currentPage]);

  const pizzas = items.map((item) => (
    <Link key={item.id} to={`/pizza/${item.id}`}>
      <PizzaBlock {...item}  />
    </Link>
  ));
  const sceleton = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="p-[40px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <Categories value={categoryId} onClickCategory={onClickCategory} />
          <Sort />
        </div>
        <h2 className="flex items-center text-[32px] font-bold pb-[25px]">
          Все пиццы
        </h2>
        {status === "error" ? (
          <div className=" text-center py-[30px]">
            <h2 className="text-4xl font-bold">
              Произашло ошибка <span>😕</span>
            </h2>
            <p className="text-[#777777] ">
              К сожелению не удолось получить питсы.
              <br />
              Попробуйте повторить попытку позже.
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-[20px]">
            {status === "loading" ? sceleton : pizzas}
          </div>
        )}
      </div>
      <Pagination onChangePage={onChangePage} currentPage={currentPage} />
    </div>
  );
};

export default Home;
