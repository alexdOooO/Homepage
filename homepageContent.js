// homepageContent.js (no changes needed to the JSX)
import React from 'react';
import "./../../../sass/components/homepageContent.scss";
import Header from '../HeaderContent/header'; 
import StatsSection from '../StatsContent/stats';
import ProductGrid from '../ProductGrid/grid';
import HeroImage from '../../../../resources/sass/img/herolapnix.svg';

const HomepageContent = () => {
  return (
    <div className="homepage">
      <Header />
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            LEVEL UP YOUR <span className="hero__title-highlight">SETUP</span>
          </h1>
          <p className="hero__subtitle">
            Discover Top-Tier Laptops, Keyboards & Mice Built for Ultimate Gaming Performance and Seamless Work Productivity
          </p>
          <div className="hero__buttons">
            <button className="hero__button hero__button--primary">Shop Now</button>
            <button className="hero__button hero__button--secondary">Learn More</button>
          </div>
        </div>
        <div className="hero__image">
          <img src={HeroImage} alt="Hero Setup" className="hero__img" />
        </div>
      </section>
      <StatsSection />
      <ProductGrid />
    </div>
  );
};

export default HomepageContent;
