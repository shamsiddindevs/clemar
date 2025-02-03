import { useState } from "react";
import logo from "../../public/assets/logo.png";
import { IoClose, IoSearch, IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowRight, MdOutlineShoppingBag } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const mobileMenuItems = [
  { title: "About Us", path: "/about" },
  { title: "Cart", path: "/cart" },
  { title: "Checkout", path: "/checkout" },
  { title: "Contact", path: "/contact" },
  { title: "Home", path: "/", isHighlighted: true },
  { title: "Market", path: "/market" },
  { title: "My account", path: "/account" },
  { title: "News", path: "/news" },
  { title: "Products", path: "/products" },
  { title: "Services", path: "/services" },
];

const menuItems = [
  {
    title: "Бумажная продукция",
    subItems: [
      "Влажные салфетки",
      "Диспенсер",
      "Коробка с салфетками",
      "Полотенце",
    ],
  },
  {
    title: "Моющие средства",
    subItems: [
      "Бутылки, дозаторы, распылители для моющих средств",
      "Моющие средства для пищевой промышленности",
      "Моющие средства для полов",
    ],
  },
  {
    title: "Подметальные машины",
    subItems: ["Бензиновые", "Для улицы", "Подметально-вакуумные"],
  },
  {
    title: "Бумажная продукция",
    subItems: ["Аккумуляторные", "Для производств", "Компактные"],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [modal, setModal] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <header className="w-full bg-white fixed top-0 z-[9999]">
      <div className="container mx-auto flex items-center justify-between py-3 lg:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Clemar Logo" className="h-[35px] mr-2" />
          </Link>
          <div className="hidden transition-all ease-in-out cursor-pointer relative group lg:flex ml-8 uppercase">
            <span className="flex text-sm gap-2 items-center text-gray-600 hover:text-gray-800 font-medium">
              Каталог <IoIosArrowDown className="text-xs" />
            </span>
            <div className="invisible group-hover:visible transition-all top-5 ease-in-out absolute group-hover:top-0 -left-2 pt-10">
              <ul className="bg-[#222222] text-white w-[200px] flex flex-col">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className={`relative px-4 py-2 text-sm capitalize ${
                      menuItems?.length == index + 1 ||
                      "border-gray-700 border-b-1 border-dashed"
                    }`}
                    onMouseOver={() => setActiveMenu(index)}
                    onMouseOut={() => setActiveMenu(null)}
                  >
                    <Link className="flex justify-between items-center">
                      {item.title}{" "}
                      <MdKeyboardArrowRight className="text-[18px]" />
                    </Link>
                    <ul
                      className={`transition-all duration-100 ease-in-out absolute z-10 block w-[200px] px-1 left-[100%] top-0 ${
                        activeMenu === index
                          ? "top-0 visible opacity-100"
                          : "top-20 opacity-0 invisible"
                      }`}
                    >
                      {item?.subItems?.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className={`bg-[#222222] px-4 py-2 text-xs ${
                            item?.subItems?.length == subIndex + 1 ||
                            "border-gray-700 border-b-1 border-dashed"
                          }`}
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Laptop View: Nav as */}
        <nav className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-4 text-2xl text-gray-600">
            <IoSearch
              className="hidden lg:block"
              onClick={() => setModal(!modal)}
            />
            <Link to="/cart">
              <MdOutlineShoppingBag className="text-2xl" />
            </Link>
          </div>
          <div className="flex flex-col leading-[20px]">
            <span className="text-gray-700">РЕЖИМ РАБОТЫ:</span>
            <span className="text-gray-700 uppercase">
              Пн-Пт с 9:00 до 18:00
            </span>
          </div>
          <HashLink
            to={"/#"}
            className="bg-blue-500 text-white py-[5px] px-[30px] leading-[36px] rounded-lg hover:bg-blue-600 font-semibold"
          >
            ОТДЕЛ ПРОДАЖ
          </HashLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex gap-5">
          <Link to="/cart">
            <MdOutlineShoppingBag className="text-2xl" />
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <span className="sr-only">Open Menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#1E1E1E] z-[9999] overflow-scroll">
          <div className="relative h-full ">
            {/* Close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-white p-2"
            >
              <IoClose className="text-2xl" />
            </button>

            {/* Menu Items */}
            <nav className="pt-16 px-8 text-center">
              <ul className="space-y-4">
                {mobileMenuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={`block py-2 text-lg ${
                        item.isHighlighted ? 'text-[#0095E5]' : 'text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {modal && (
        <div className="fixed inset-0  flex justify-center items-center z-50">
          <div className="w-[60%] ">
            {/* Search Bar */}
            <div className="relative   z-[100] flex items-center border-b border-blue-500 pb-2">
              <input
                type="text"
                className="w-full bg-transparent text-white py-3 outline-none text-4xl"
                placeholder="Поиск..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <IoSearchOutline className="text-white absolute right-3 text-5xl py-3 bg-blue-400 rounded-full cursor-pointer hover:opacity-100 opacity-80" />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setModal(false)}
              className="mt-4 text-gray-400 hover:text-white text-3xl absolute top-0 right-5 z-[70]"
            >
              <IoClose />
            </button>
          </div>
          {/* overlay */}
          <div
            className="fixed inset-0 bg-gray-950/90 z-[60]"
            onClick={() => setModal(false)}
          />
        </div>
      )}
    </header>
  );
};

export default Navbar;
