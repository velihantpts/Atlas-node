import {
    add,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    getDay,
    isSameMonth,
    isToday,
    parse,
    startOfToday,
    startOfWeek,
  } from "date-fns";
  
  import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
  import { capitalizeFirstLetter } from "./function";
  import { useState } from "react";
  
  function Calendar() {
    const today = startOfToday();
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const colStartClasses = [
      "",
      "col-start-2",
      "col-start-3",
      "col-start-4",
      "col-start-5",
      "col-start-6",
      "col-start-7",
    ];
  
    const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
    let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());
  
    const daysInMonth = eachDayOfInterval({
      start: startOfWeek(firstDayOfMonth),
      end: endOfWeek(endOfMonth(firstDayOfMonth)),
    });
    
    const getPrevMonth = (event) => {
      event.preventDefault();
      const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
      setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
    };
    
    const getNextMonth = (event) => {
      event.preventDefault();
      const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
      setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
    };
  
    return (
      <div className="p-8   flex items-center justify-center">
        <div className="w-[400px] h-[500px]">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-xl">
              {format(firstDayOfMonth, "MMMM yyyy")}
            </p>
            <div className="flex items-center justify-evenly gap-6 sm:gap-12">
              <ChevronLeftIcon
                className="w-6 h-6 cursor-pointer"
                onClick={getPrevMonth}
              />
              <ChevronRightIcon
                className="w-6 h-6 cursor-pointer"
                onClick={getNextMonth}
              />
            </div>
          </div>
          <hr className="my-6" />
          <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
            {days.map((day, idx) => {
              return (
                <div key={idx} className="font-semibold">
                  {capitalizeFirstLetter(day)}
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-7 gap-6 sm:gap-12 mt-8 place-items-center">
            {daysInMonth.map((day, idx) => {
              return (
                <div key={idx} className={colStartClasses[getDay(day)]}>
        <p
    className={`cursor-pointer flex items-center justify-center font-semibold h-8 w-8 rounded-full hover:text-white ${
      isToday(day) ? "bg-blue-500 text-white" : isSameMonth(day, firstDayOfMonth) ? "text-gray-900" : "text-gray-400 hover:bg-blue-500"
    }`}
  >
    {format(day, "d")}
  </p>
  
              </div>
            );
          })}
        </div>
      </div>
    </div>
    );
  }
  
  export default Calendar;
  