import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../redux/slices/filterSlice";

export const sortlist = [
  { name: "популярности (DESC)", sortPropety: "rating" },
  { name: "популярности (ASC)", sortPropety: "-rating" },
  { name: "цене (DESC)", sortPropety: "price" },
  { name: "цене  (ASC)", sortPropety: "-price" },
  { name: "алфавиту (DESC)", sortPropety: "name" },
  { name: "алфавиту  (ASC)", sortPropety: "-name" },
];

export default function Sort() {
  const dispatch = useDispatch();
  const sortRef = useRef();

  const sort = useSelector((state) => state.filter.sort);

  const [open, setOpen] = useState(false);

  const onClickList = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  useEffect(() => {
    const onClickOutside = (e) => {
      if (!e.composedPath().includes(sortRef.current)) {
        setOpen(false);
        console.log("click outside");
      }
    };
    document.body.addEventListener("click", onClickOutside);
    return () => document.body.removeEventListener("click", onClickOutside);
  }, []);

  return (
    <div className="sort" ref={sortRef}>
      <div className="flex items-center gap-2 md:flex-wrap" onClick={()=>setOpen(!open)}>
        <div className="flex items-center gap-2">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Сортировка по:</b>
        </div>
        <div>
          <span
            onClick={() => setOpen(!open)}
            className="text-orange-700 underline decoration-dotted"
          >
            {sort.name}
          </span>
        </div>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortlist.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickList(obj)}
                className={
                  sort.sortPropety === obj.sortPropety
                    ? "text-orange-700 w-[100%] justify-center rounded-[10px] flex items-center"
                    : "w-[100%] justify-center rounded-[10px] flex items-center"
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
