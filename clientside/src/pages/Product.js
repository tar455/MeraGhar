import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingBox from "./LoadingBox";
import MessageBox from "./messageBox";
import { useSelector, useDispatch } from "react-redux";
import { listProduct } from "../actions/productActions";
import ProductShow from "./productshow";

export default function Product() {
    const dispatch = useDispatch();
    const location = useLocation();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    const searchQuery = useMemo(() => new URLSearchParams(location.search).get("search") || "", [location.search]);
    const [searchTerm, setSearchTerm] = useState(searchQuery);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        dispatch(listProduct());
    }, [dispatch]);

    useEffect(() => {
        setSearchTerm(searchQuery);
    }, [searchQuery]);

    useEffect(() => {
        dispatch(listProduct());
    }, [dispatch]);

    const productData = Array.isArray(products?.data) ? products.data : [];

    const categories = useMemo(() => {
        const uniqueCategories = Array.from(
            new Set(productData.map((product) => product.category || "General"))
        );
        return ["All", ...uniqueCategories];
    }, [productData]);

    const filteredProducts = useMemo(() => {
        return productData.filter((product) => {
            const productText = `${product.name || ""} ${product.category || ""}`.toLowerCase();
            const matchesSearch = productText.includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "All" || (product.category || "General") === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [productData, searchTerm, selectedCategory]);

    return (
        <div className="catalog-shell">
            <section className="catalog-hero">
                <div>
                    <p className="eyebrow">MeraGhar collection</p>
                    <h1>Premium building essentials for modern living.</h1>
                    <p className="hero-copy">
                        Discover durable products, elegant finishes, and trusted quality curated for every renovation and construction project.
                    </p>
                    <div className="hero-actions">
                        <a href="/about" className="btn btn-danger">Explore the brand</a>
                        <a href="/cart" className="btn btn-outline-light">View cart</a>
                    </div>
                </div>
                <div className="hero-stats">
                    <div>
                        <strong>200+</strong>
                        <span>Products</span>
                    </div>
                    <div>
                        <strong>24/7</strong>
                        <span>Support</span>
                    </div>
                    <div>
                        <strong>4.9/5</strong>
                        <span>Customer love</span>
                    </div>
                </div>
            </section>

            <section className="catalog-controls">
                <div className="catalog-search">
                    <i className="fas fa-search"></i>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder="Search products"
                    />
                </div>
                <div className="catalog-chips">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={`chip ${selectedCategory === category ? "active" : ""}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {loading ? (
                <LoadingBox />
            ) : error ? (
                <MessageBox>{error}</MessageBox>
            ) : (
                <>
                    <div className="catalog-header">
                        <h2>Featured catalog</h2>
                        <p>{filteredProducts.length} products available</p>
                    </div>
                    {filteredProducts.length ? (
                        <div className="catalog-grid">
                            {filteredProducts.map((product) => (
                                <ProductShow key={product._id || product.id || product.name} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            No products match your current search. Try another keyword or category.
                        </div>
                    )}
                </>
            )}
        </div>
    );
}