import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed z-[99999999999999999999999999999] lg:static bg-white  ">
      <div className="flex justify-between w-[100vw] lg:w-full pt-2 px-7 shadow-md">
        <div className="  list-none items-center gap-7 flex">
          <img
            className="w-14"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8lO4AXm9cVMHuOlrUAl9YlNHsegr4AI3X6+/2NxecRmtcyotkAldUAktQWntoAIHUZM3wAJ3gmMXissccNLHrl5+4AHHMkO4AmL3cfN34PLXpga5rZ2+XQ0t/BxNVpdJ95gqiZyukqSInt9vtLqdzY6vagpr+Ciq1JWI+Vm7kvQoTIzNpUYZTp6/A6S4hqiLO4vM8Rd7VzfaUmaaW01+4pXptwuOIqUZDQ5vSu1O02SIdEp9sAFHEiVpZ3uuPR4Wa5AAAEaElEQVR4nO3bjVKbQBQF4CwRkojEROJPUGtrtImxta1a/1rr+79VMbGOyL0EdndmL/R8T7BnFvawC7RaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNN1orYT4dfdlxPVJNs0G7jP3t7e7j2fyD6+FqGKrykvbWcK12U7lbIeGz9u7BoesxV7LTrZgwncndjxeuh13B0XblhEoNByPX4y5vtK+RUKnuQc/1yMuatbUSqqGqy5V6kOglVEm3JgvOuWbA1KAeEQf6CVW3DtW4Y5IwGdZgufmiUxavhl9dj381zbL4Z2vqOsBKa5pl8WJvV3xnaJfFi+TAdYJVDMpiaSB9P9XdM0yYnLmOUOyi+s4iN4mye//DlnHC4SfXIQqNjOpwqSu69g3LYmH7yHWKIh+rnNIwZF+m3wzrcMl1iiJVj6FIA8HPNRcmO4tXW4JL30JZpPYFH0v9MNtZvGjPXefgzS2URbqYzlzn4F1ZKIs04ZXrHDw7ZSE5oYVnNiW68i+s1KFqy70P7ZSFGn53HYT1w85VGlyeuk7CsVMWKuiEG66jMOyUhYo9zxca8cxKWajJZhpR5oVq5ZlNJddpQi86dp2GcGJlZ6HiznNCr//ZdZ68QztloRYBPYmrjZ2yCK6XCb3op+tAOVMrZTEOlwG90HMdKOeTjbJIbl6mUOIkWimLsf8voBeKawzzE/03d+FiOT1xHSmrZ2Vn8Sag5z+4zpRloyzGnUzCW9eZsrS+98rKXKPyVtOp8UNbcpcJmN6Isl7SGJdFMtkMswkjWUvNV9NX+Ofee9G961AZidkL7mCSCygsoWFZxH82pSc8NCr88SURUFhCk7IIJhEV0ItE7RH1yyJQ5ASKa4uZXlkkcZqPCSis8XXKIgjimw6XT9xTG98VASkeq7vrNB6bT9qTd489hgouO5TI2yyM50nbPfF/kowXUXK8sDCdJ24HXPBxcPFE8YSdYvAfB080E4ah60xZ/J8kN5oJI1HrTMHHwe92teWnUNqJMHsXBh29hNJO9fmdRdDRCijuzUxBWaxsBYq8t2t8WQQ6F6nAN6R2y8LfELWpWGA/Dk40ykLeJdqyWhZh/8l1GsovNiG3u2Un0Bd1dPGqoCwqJfT7666j0PjfDuMKZRFG0bqoDdMb1coiJPh+FN3K2kxk8H+SEGURbuSc3q4/CHtKe4cvC+KgV9YZYUnsnyRUWcg6nCipUln4rkerg339S5RF+Nv1aDXwf5LEfn4KZZ2ClsN/HEyUhS9t51cG/yfJOZFQcOux/uOySKiykLf3W439k6QxZcH+o/4flEXU9LIYN6QsDh+5hE0pi9Z80M3bj+NxU8oi1ctpPYXkC9BalgXtlD6/qGVZ0PLP3IuykHgWquekT0+hyMNQLff5KqxtWdCO6au0nmVBeqIT1rUsCBv0UtqcsujRC02DyuIznbCWOwtG6FP6zVlKWyfH64TmrKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANr+AtbYXHYB9448AAAAAElFTkSuQmCC"
            alt=""
          />
          <li className="text-blue-800 hover:text-gray-500  cursor-pointer hidden md:flex font-semibold">
            Personal
          </li>
          <li className="text-blue-800 hover:text-gray-500  cursor-pointer hidden md:flex font-semibold">
            Business
          </li>
          <li className="text-blue-800 hover:text-gray-500 cursor-pointer  hidden md:flex font-semibold">
            Developer
          </li>
          <li className="text-blue-800 hover:text-gray-500  cursor-pointer hidden md:flex font-semibold">
            Help
          </li>
        </div>
        <div className="flex md:hidden">
          <img
            className="w-[100px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHnwQPjQj5uZwPUGsv4bZAW2fXde1Aiu32Q&usqp=CAU"
            alt=""
          />
        </div>
        <div className="items-center gap-7 flex">
          <button
            type="button"
            className="px-[38px] py-[8px] me-2 mb-2  hidden md:flex text-md font-medium  focus:outline-none bg-white rounded-full  border-blue-800 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-blue-900  border-[2px]"
          >
            Log in
          </button>
          <button
            type="button"
            className="text-white hidden md:flex bg-[#012169] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-[30px] py-[8px] text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sing up
          </button>
          <div className="flex md:hidden">
            <GiHamburgerMenu className="text-2xl" onClick={toggleDropdown} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute   z-[20000] right-0 flex ">
          <div className="px-4 py-3 bg-white rounded-b-lg shadow-md">
            <div className="space-y-2">
              <div>
                <h3 className="text-gray-800 hover:text-blue-800  cursor-pointer font-semibold mb-2">
                  Personal
                </h3>
              </div>
              <div>
                <h3 className="text-gray-800 hover:text-blue-800 cursor-pointer  font-semibold mb-2">
                  Business
                </h3>
              </div>
              <div>
                <h3 className="text-gray-800 hover:text-blue-800  cursor-pointer font-semibold mb-2">
                  Developer
                </h3>
              </div>
              <div>
                <h3 className="text-gray-800 hover:text-blue-800  cursor-pointer font-semibold mb-2">
                  Help
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
