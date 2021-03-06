import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


const Products = () => {
    const [products, setProducts] = useState([]);
    const [value, setValue] = useState(
        localStorage.getItem("likedProduct") ? JSON.parse(localStorage.getItem("likedProduct")) : []
    );

    useEffect(() => {
        const json = JSON.stringify(value);
        localStorage.setItem("likedProduct", json);
    }, [value]);

    async function getProducts() {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, []);

    async function getProductsByCategory(category) {
        const res = await fetch('https://fakestoreapi.com/products/category/' + category)
        const data = await res.json()

        setProducts(data);
    }

    const checkProduct = (prod) => {
        const exists = value.find(p => p.id === prod.id) === undefined ? false : true;

        if (exists) {
            deleteLikedProd(prod.id);
        } else {
            addProduct(prod);
        }
    }

    const addProduct = (prod) => {
        const likedProd = {
            id: prod.id,
            name: prod.category,
            price: prod.price,
            image: prod.image
        };
        setValue([...value, likedProd]);
    };

    const deleteLikedProd = (idToDelete) => {
        const filteredProducts = value.filter((prod) => prod.id !== idToDelete);
        setValue(filteredProducts);
    };

    const btnClick = (e) => {
        const btns = document.querySelectorAll('.prod-cat-btns');
        btns.forEach(btn => {
            if (btn.classList.contains('prod-btns-active')) {
                btn.classList.remove('prod-btns-active')
            }
        })
        e.target.classList.add('prod-btns-active');
        getProductsByCategory(e.target.name);
    }

    return (
        <div style={{ margin: "6em auto" }}>
            <div className="prod-cat">
                <input type="button" className="prod-cat-btns prod-btns-active" onClick={(e) => { btnClick(e); getProducts() }} value="All" />
                <input type="button" name="men's clothing" className="prod-cat-btns" onClick={btnClick} value="Men" />
                <input type="button" name="women's clothing" className="prod-cat-btns" onClick={btnClick} value="Women" />
                <input type="button" name="jewelery" className="prod-cat-btns" onClick={btnClick} value="Jewelery" />
                <input type="button" name="electronics" className="prod-cat-btns" onClick={btnClick} value="Electronics" />
            </div>
            <div className="product-grid">
                {
                    products.map((product) => {
                        return (
                            <div className="product" key={product.id}>
                                <img src={product.image} alt="product-pic" className="prod-img" />
                                <Link to={`${process.env.PUBLIC_URL}/shop/${product.id}`}>
                                    <input type="button" value="SHOP NOW" className="prod-btn-shop btn-shop" />
                                </Link>
                                <div className="prod-description">
                                    <div className="prod-desc">
                                        <p>{product.category}</p>
                                        <span className="prod-like" onClick={checkProduct.bind(this, product)}>
                                            {value.find(p => p.id === product.id) === undefined ?
                                                <img src={`${process.env.PUBLIC_URL}/assets/icons/love.png`} alt="like" className="prod-icon" />
                                                :
                                                <img src={`${process.env.PUBLIC_URL}/assets/icons/love_color.png`} alt="like" className="prod-icon" />
                                            }
                                        </span>
                                    </div>
                                    <p className="prod-price">${product.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Products;