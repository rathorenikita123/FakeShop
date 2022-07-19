import React, { useState, useEffect } from "react";
// import products from "./data";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action/index";
import { useParams } from "react-router";
import { NavLink } from 'react-router-dom';

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        }
        getProduct();
    }, []);

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6" key={product.id}>
                    <img src={product.image} alt={product.title} width={400} height={400} />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder"> Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star mx-1"></i>
                    </p>
                    <h3 className="display-6 fw-blod my-4">${product.price}</h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark" onClick={() => addProduct(product)}>Add to Cart</button>
                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">Go to Cart</NavLink>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-4">
                <div className="row py-4">
                    <ShowProduct />
                </div>

            </div>
        </div>
    )

}

export default Product;