import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SearchBarComponent() {
  const [transportation, setTransportations] = useState([]);
  const [input, setInput] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const inputRef = useRef(null);

  useEffect(() => {
    fetch('/api/transportations')
      .then(response => response.json())
      .then(data => setTransportations(data));
  }, []);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    setFilteredOptions(
      transportation.filter((transportation) => transportation.bus_number.startsWith(inputValue))
    );
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleOptionClick = (transportation) => {
    setInput(transportation.bus_number);
    setIsFocused(false);
    navigate(`/transportation/${transportation._id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedOption = transportation.find((transportation) => transportation.bus_number === input);
    if (selectedOption) {
      navigate(`/transport-info/${selectedOption._id}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10 image-cover h-80 bg-[url('../media/bg-4.jpg')]">
      <div className="w-1/2">
        <form className="group relative" onSubmit={handleSubmit}>
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <div className="relative z-0 w-full mb-6 group">
     
          <select
  name="productStockName"
  id="productStockName"
  className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
  required
  value={input}
  onChange={handleChange}
  onFocus={handleFocus}
  onBlur={handleBlur}
>
  <option value="" disabled defaultValue>
    Hat seciniz
  </option>
  {transportation.map((option) => (
    <option key={option._id} value={option.bus_number}>
      {option.bus_number}
    </option>
  ))}
</select>
</div>

        </form>cd 
      </div>
      <div>
        <Link
          to={`/transportation/${transportation.find((transportation) => transportation.bus_number === input)?._id}`}
          className="hidden lg:inline-block rounded-md mt-3 px-10 p-2 border-solid border-2 bg-gray-200 hover:bg-gray-400 hover:text-white"
        >
          Durak Bilgileri
        </Link>
      </div>
    </div>
  );
}

export default SearchBarComponent;


