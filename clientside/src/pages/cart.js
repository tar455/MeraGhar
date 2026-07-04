import React, { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";

const initialItems = [
    {
        id: 1,
        name: "Over Brand",
        category: "Premium Tiles",
        price: 11,
        quantity: 2,
        image: "/images/OverBrand.jpg",
    },
    {
        id: 2,
        name: "A1 Collection",
        category: "Modern Finish",
        price: 15,
        quantity: 1,
        image: "/images/A1.jpg",
    },
];

export default function Cart() {
    const [items, setItems] = useState(initialItems);
    const history = useHistory();

    const subtotal = useMemo(() => {
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }, [items]);

    const shipping = subtotal > 0 ? 120 : 0;
    const total = subtotal + shipping;

    const updateQuantity = (id, delta) => {
        setItems((currentItems) =>
            currentItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };

    const removeItem = (id) => {
        setItems((currentItems) => currentItems.filter((item) => item.id !== id));
    };

    return (
        <div className="cart-page">
            <section className="cart-hero">
                <div>
                    <p className="eyebrow">MeraGhar cart</p>
                    <h1>Ready to checkout with confidence.</h1>
                    <p>
                        Review your selected pieces, update quantities, remove anything you no longer need,
                        and continue to secure payment in seconds.
                    </p>
                </div>
                <div className="cart-summary-card">
                    <h3>Order summary</h3>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <strong>₹{subtotal}</strong>
                    </div>
                    <div className="summary-row">
                        <span>Delivery</span>
                        <strong>₹{shipping}</strong>
                    </div>
                    <div className="summary-row summary-total">
                        <span>Total</span>
                        <strong>₹{total}</strong>
                    </div>
                    <button type="button" className="btn btn-danger btn-block" onClick={() => history.push("/billing")}>
                        Proceed to payment
                    </button>
                </div>
            </section>

            <section className="cart-items-section">
                {items.length ? (
                    <div className="cart-list">
                        {items.map((item) => (
                            <article className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div className="cart-item-info">
                                    <h3>{item.name}</h3>
                                    <p>{item.category}</p>
                                    <div className="cart-item-price">₹{item.price * item.quantity}</div>
                                </div>
                                <div className="cart-item-actions">
                                    <div className="quantity-controls">
                                        <button type="button" onClick={() => updateQuantity(item.id, -1)}>
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button type="button" onClick={() => updateQuantity(item.id, 1)}>
                                            +
                                        </button>
                                    </div>
                                    <button type="button" className="text-action" onClick={() => removeItem(item.id)}>
                                        Remove
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="empty-state">
                        <h3>Your cart is empty</h3>
                        <p>Pick a few favorites from the catalog and they will appear here.</p>
                        <button type="button" className="btn btn-danger" onClick={() => history.push("/")}>
                            Continue shopping
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}