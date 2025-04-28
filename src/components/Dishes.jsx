import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import DishesCard from "../layouts/DishesCard"; 

const Dishes = () => {
  return (
   
      <div className="flex flex-col justify-center items-center px-5 lg:px-32 min-h-screen">
        <h1 className="pt-24 pb-10 font-semibold text-4xl text-center">
          Our Dishes
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          <DishesCard img={img1} title="Tasty Dish" price="$10.99" />
          <DishesCard img={img2} title="Tasty Dish" price="$12.99" />
          <DishesCard img={img3} title="Tasty Dish" price="$10.99" />
          <DishesCard img={img4} title="Tasty Dish" price="$11.99" />
          <DishesCard img={img5} title="Tasty Dish" price="$10.99" />
          <DishesCard img={img6} title="Tasty Dish" price="$12.99" />
        </div>
      </div> 
  );
};

export default Dishes;
