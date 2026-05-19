import React from "react";

const Featured = () => {
  return (
    <section className="h-135 w-full bg-g">
      <div className="container">
        <h2 className="text-left">Featured Products</h2>
        <div className="flex justify-between">
          <div className="block-F">
            <div>
              <img src="public/img/headphn.png" alt="headphn" />
              <h3 className="F-h3">Wireless Headphones</h3>
              <p className="F-p">Premium quality sound</p>
              <div className="flex items-center pt-3">
                <p className="F-p2 ">$99.99</p>
                <button>
                  <img src="public/img/shopbtn.png" alt="shopbtn" />
                </button>
              </div>
            </div>
          </div>

          <div className="block-F">
            <div>
              <img src="public/img/phn.png" alt="phn" />
              <h3 className="F-h3">Smartphone Pro</h3>
              <p className="F-p">Latest technology</p>
              <div className="flex items-center pt-3">
                <p className="F-p2 ">$799.99</p>
                <button>
                  <img src="public/img/shopbtn.png" alt="shopbtn" />
                </button>
              </div>
            </div>
          </div>

          <div className="block-F">
            <div>
              <img src="public/img/shoe.png" alt="shoe" />
              <h3 className="F-h3">Designer Sneakers</h3>
              <p className="F-p">Comfortable & stylish</p>
              <div className="flex items-center pt-3">
                <p className="F-p2 ">$129.99</p>
                <button>
                  <img src="public/img/shopbtn.png" alt="shopbtn" />
                </button>
              </div>
            </div>
          </div>

          <div className="block-F">
            <div>
              <img src="public/img/tv.png" alt="tv" />
              <h3 className="F-h3">Gaming Laptop</h3>
              <p className="F-p">High performance</p>
              <div className="flex items-center pt-3">
                <p className="F-p2 ">$1,299.99</p>
                <button>
                  <img src="public/img/shopbtn.png" alt="shopbtn" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
