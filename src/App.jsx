import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";
import Review from "./components/Review";
import { SEO } from "./layouts/Head";

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const sectionTitles = {
      home: "FoodieWeb - Home",
      dishes: "FoodieWeb - Dishes",
      about: "FoodieWeb - About",
      menu: "FoodieWeb - Menu",
      review: "FoodieWeb - Reviews",
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (sectionTitles[id]) {
              document.title = sectionTitles[id];
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div> 
      <SEO
        title="FoodieWeb - Home"
        description="Discover delicious dishes, read our story, explore the menu, and see what our happy customers are saying. Welcome to FoodieWeb!"
        pathname="/"
        siteUrl="https://restaurantFoodieWeb.com" 
        twitterUsername="@foodieweb"
      />

      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="dishes">
          <Dishes />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="menu">
          <Menu />
        </section>

        <section id="review">
          <Review />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
