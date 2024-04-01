import React from "react";
import styles from "./homeDetails.module.css";
import { Carousel } from "react-responsive-carousel";
function HomeDetails() {
  return (
    <div>
      <button>Back to products</button>
      <div className="product">
        <div className="smallDescription">
          Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones
          with Mic, up to 50 Hours Playtime, Multi-Point Connection, App
          Support, AUX & Voice Assistant Support for Mobile Phones (Black)
        </div>
        <div className={styles.detailContainer}>
          <div className="productImage">
            <Carousel className={styles.productOptions}>
              <div>
                <img src="https://img.freepik.com/free-psd/levitating-headphones-still-life_23-2150806982.jpg?w=740&t=st=1711797736~exp=1711798336~hmac=1b4be4c97fc0f5cb767c32a057d53eeeb1335c4fd34c9c605d30dc37aa89a5fc" />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src="https://img.freepik.com/free-psd/levitating-headphones-still-life_23-2150806982.jpg?w=740&t=st=1711797736~exp=1711798336~hmac=1b4be4c97fc0f5cb767c32a057d53eeeb1335c4fd34c9c605d30dc37aa89a5fc" />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src="https://img.freepik.com/free-psd/levitating-headphones-still-life_23-2150806982.jpg?w=740&t=st=1711797736~exp=1711798336~hmac=1b4be4c97fc0f5cb767c32a057d53eeeb1335c4fd34c9c605d30dc37aa89a5fc" />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
            {/* <div className="selectedProductImage">
              <img
                src="https://img.freepik.com/free-psd/levitating-headphones-still-life_23-2150806982.jpg?w=740&t=st=1711797736~exp=1711798336~hmac=1b4be4c97fc0f5cb767c32a057d53eeeb1335c4fd34c9c605d30dc37aa89a5fc"
                alt="image"
                width="900"
                height="300"
              />
            </div>
            <div className={styles.productOptions}>
              <img
                src="https://img.freepik.com/free-psd/levitating-headphones-still-life_23-2150806982.jpg?w=740&t=st=1711797736~exp=1711798336~hmac=1b4be4c97fc0f5cb767c32a057d53eeeb1335c4fd34c9c605d30dc37aa89a5fc"
                alt="image"
                width="300"
                height="70"
              />
              <img
                src="https://img.freepik.com/free-psd/levitating-headphones-still-life_23-2150806982.jpg?w=740&t=st=1711797736~exp=1711798336~hmac=1b4be4c97fc0f5cb767c32a057d53eeeb1335c4fd34c9c605d30dc37aa89a5fc"
                alt="image"
                width="300"
                height="70"
              />
              <img
                src="https://img.freepik.com/free-psd/levitating-headphones-still-life_23-2150806982.jpg?w=740&t=st=1711797736~exp=1711798336~hmac=1b4be4c97fc0f5cb767c32a057d53eeeb1335c4fd34c9c605d30dc37aa89a5fc"
                alt="image"
                width="300"
                height="70"
              />
            </div> */}
          </div>
          <div className="productDescription">
            <div className="productTitle">Sony WH-CH720N</div>
            <div className="rating">
              <div className="star">4</div>
              <div className="review">50 Customer review</div>
            </div>
            <div className="price"></div>
            <div className="colorType">
              <div className="color"></div>
              <div className="type"></div>
            </div>
            <div className="about"></div>
            <div className="available"></div>
            <div className="brand"></div>
            <div className="buttons">
              <div className="addToCart">Title</div>
              <div className="buyNow">Title</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDetails;
