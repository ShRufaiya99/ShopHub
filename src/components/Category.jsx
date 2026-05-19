import React from "react";

const Category = () => {
  return (
    <section>
      <div className="container">
        <h2 className="text-center">Shop by Category</h2>
        <div className="flex justify-between pt-8 pb-16">
          <div className="w-45.5 flex flex-col items-center">
            <img src="public/img/pc.png" alt="pc" />
            <p className="category-p">Electronics</p>
          </div>

          <div className="w-45.5  flex flex-col items-center">
            <img src="public/img/dress.png" alt="pc" />
            <p className="category-p">Fashion</p>
          </div>

          <div className="w-45.5  flex flex-col items-center">
            <img src="public/img/home.png" alt="pc" />
            <p className="category-p">Home</p>
          </div>

          <div className="w-45.5 flex flex-col items-center">
            <img src="public/img/sport.png" alt="pc" />
            <p className="category-p">Sports</p>
          </div>

          <div className="w-45.5 flex flex-col items-center">
            <img src="public/img/book.png" alt="pc" />
            <p className="category-p">Books</p>
          </div>

          <div className="w-45.5  flex flex-col items-center">
            <img src="public/img/game.png" alt="pc" />
            <p className="category-p">Gaming</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
