import React from "react";

const Header = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="flex  items-center p-4">
            <img src="public/img/ShopHub.png" alt="logo" />
            <ul className="flex ml-[31.52px] gap-[31.19px]">
              <li className="list-item">Home</li>
              <li className="list-item">Categories</li>
              <li className="list-item">Deals</li>
              <li className="list-item">About</li>
            </ul>
            <div className="relative ml-20.25">
              <input
                type="text"
                className="search-input"
                placeholder="Search Products..."
              />
              <img
                className="absolute top-4 left-3"
                src="public/img/search.svg"
                alt="search"
              />
            </div>
            <div className="icon">
               <img src="public/img/shop.svg" alt="icon1" />
               <img src="public/img/people.svg" alt="icon1" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
