import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Card.css';

export default function Card({ title, imageSrcList, description, price }) {
    const [quantity, setQuantity] = useState(1);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        setQuantity(1);

        console.log(`Added ${quantity} ${title} to cart`);
    };

    return (
        <div className="card">
            <Slider {...settings}>
                {imageSrcList.map((src, index) => (
                    <div key={index}>
                        <img src={src} alt={title} className="card-image" />
                    </div>
                ))}
            </Slider>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <p className="card-price">{price}</p>
                <div className="quantity-selector">
                    <p className="quantity-label">Quantity: {quantity}</p>
                    <div className="quantity-buttons">
                        <button className="quantity-button decrease" onClick={decreaseQuantity}>-</button>
                        <button className="quantity-button increase" onClick={increaseQuantity}>+</button>
                    </div>
                </div>
                <div className="add-to-cart-logo" onClick={handleAddToCart}>
                    <img src="src/assets/cart.png" alt="Add to Cart" />
                </div>
            </div>
        </div>
    );
}
