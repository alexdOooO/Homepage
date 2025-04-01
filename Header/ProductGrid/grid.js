import React from 'react';
import { IconStarFilled, IconStar } from '@tabler/icons-react';
import "./../../../sass/components/grid.scss";

// Placeholder imports for product images
import Product1 from '../../../../resources/sass/img/tuf.svg';
import Product2 from '../../../../resources/sass/img/tuf.svg';
import Product3 from '../../../../resources/sass/img/tuf.svg';
import Product4 from '../../../../resources/sass/img/tuf.svg';
import Product5 from '../../../../resources/sass/img/tuf.svg';
import Product6 from '../../../../resources/sass/img/tuf.svg';
import Product7 from '../../../../resources/sass/img/tuf.svg';
import Product8 from '../../../../resources/sass/img/tuf.svg';

const Grid = () => {
  const products = [
    { id: 1, name: "Acer Predator Helios KX1", price: "P2,000", rating: 4, image: Product1 },
    { id: 2, name: "Racer HKC NTX", price: "P2,000", rating: 5, image: Product2 },
    { id: 3, name: "TITAN 18 HX AI AZXW", price: "P2,000", rating: 3, image: Product3 },
    { id: 4, name: "TITAN 18 HX AI AZXW", price: "P2,000", rating: 5, image: Product4 },
    { id: 5, name: "Vivobook AIX", price: "P2,000", rating: 4, image: Product5 },
    { id: 6, name: "TITAN 18 HX AI AZXW", price: "P2,000", rating: 5, image: Product6 },
    { id: 7, name: "ASUS TUF GAMING AI4", price: "P2,000", rating: 4, image: Product7 },
    { id: 8, name: "TITAN 18 HX AI AZXW", price: "P2,000", rating: 5, image: Product8 },
  ];

  const renderStars = (rating) => {
    return (
      <div className="product-rating">
        {[...Array(5)].map((_, index) => (
          <span key={index}>
            {index < rating ? (
              <IconStarFilled className="star filled" size={16} />
            ) : (
              <IconStar className="star" size={16} />
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="product-grid">
      <h2 className="grid-title">Explore Our Top Picks</h2>
      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-top" style={{ backgroundColor: '#202020' }}>
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              {renderStars(product.rating)}
              <p className="product-price">{product.price}</p>
              <div className="button-container">
                <button className="add-to-cart">add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Grid;
