import React, {
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

const Search = () => {
  const inputRef = useRef();
  const [value, setValue] = useState("");
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const onClickClear = () => {
    setSearchValue("");
    setValue("")
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    []
  );
  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value)
  };

  return (
    <div className="relative lg:pb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="22"
        height="22"
        viewBox="0 0 50 50"
        className="absolute left-1 top-2"
      >
        <path d="M 21.5 8 C 14.057 8 8 14.057 8 21.5 C 8 28.943 14.057 35 21.5 35 C 24.789065 35 27.805703 33.816017 30.150391 31.853516 C 30.435292 32.138417 39.711913 41.416007 39.943359 41.648438 C 40.413359 42.118437 41.176484 42.118437 41.646484 41.648438 C 42.116484 41.178438 42.116484 40.415312 41.646484 39.945312 C 41.415038 39.712882 32.138417 30.435292 31.853516 30.150391 C 33.816017 27.805703 35 24.789065 35 21.5 C 35 14.057 28.943 8 21.5 8 z M 21.5 9 C 28.392 9 34 14.608 34 21.5 C 34 28.392 28.392 34 21.5 34 C 14.608 34 9 28.392 9 21.5 C 9 14.608 14.608 9 21.5 9 z"></path>
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        type="text"
        placeholder="Поиск пиццы..."
        className="p-1 border-2 border-[#D3D3D3] pl-[25px] rounded-md focus:w-[450px] min-w-[290px] sm:min-w-[200px] sm:max-w-[270px] md:max-w-[330px]  transition: all 0.15s ease-in-out"
      />
      {value && ( 
        <svg
          onClick={onClickClear}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="22"
          height="22"
          fill="#D3D3D3"
          viewBox="0 0 16 16"
          className="absolute top-2 right-1"
        >
          <path d="M 2.75 2.042969 L 2.042969 2.75 L 2.398438 3.101563 L 7.292969 8 L 2.042969 13.25 L 2.75 13.957031 L 8 8.707031 L 12.894531 13.605469 L 13.25 13.957031 L 13.957031 13.25 L 13.605469 12.894531 L 8.707031 8 L 13.957031 2.75 L 13.25 2.042969 L 8 7.292969 L 3.101563 2.398438 Z"></path>
        </svg>
      )}
    </div>
  );
};

export default Search;
