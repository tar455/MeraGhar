import React, { useState } from "react";

export default function ProductShow({ product }) {
    const [quantity, setQuantity] = useState(1);

    const price = Number(product?.price || 0);
    const category = product?.category || "General";
    const name = product?.name || "Premium product";
    const image = product?.image || "/images/placeholder.jpg";

    const changeQuantity = (delta) => {
        setQuantity((current) => Math.max(1, current + delta));
    };

    return (
        <article className="product-card">
            <div className="product-badge">{category}</div>
            <img className="product-image" src={image} alt={name} />
            <div className="product-body">
                <p className="product-category">{category}</p>
                <h3>{name}</h3>
                <p className="product-copy">
                    Crafted for reliability, modern finishes, and effortless installation.
                </p>
                <div className="product-meta">
                    <div>
                        <span className="price-label">Starting at</span>
                        <div className="product-price">
                            <i className="fas fa-rupee-sign"></i>
                            <strong>{price}</strong>
                        </div>
                    </div>
                    <div className="quantity-controls">
                        <button type="button" onClick={() => changeQuantity(-1)}>
                            -
                        </button>
                        <span>{quantity}</span>
                        <button type="button" onClick={() => changeQuantity(1)}>
                            +
                        </button>
                    </div>
                </div>
                <div className="product-actions">
                    <a href="/cart" className="btn btn-danger">
                        Add to cart
                    </a>
                </div>
            </div>
        </article>
    );
}
