import React from "react";
import Cart from "../assets/cart.svg";
import Moon from "../assets/moon-solid.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-[#F0F6FF] pt-5 pb-5">
      <header className="flex container mx-auto items-center justify-between">
        <div className="logo">
          <a
            href=""
            className="p-[20px] rounded-2xl w-[150px] h-7 text-3xl bg-blue-600 text-center text-white"
          >
            C
          </a>
        </div>
        <nav>
          <ul className="flex gap-[20px]">
            <li>
              <Link to={'/'} className="text-2xl">
                Home
              </Link>
            </li>
            <li>
              <Link to={'/about'} className="text-2xl">
                About
              </Link>
            </li>
            <li>
              <Link to={'/products'} className="text-2xl">
                Products
              </Link>
            </li>
            <li>
              <Link to={'/cart'} className="text-2xl">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
        <div className="icons flex gap-4">
          <img src={Moon} width={25} alt="" />
          <img src={Cart} width={25} alt="" />
        </div>
      </header>
    </div>
  );
}

export default Header;
