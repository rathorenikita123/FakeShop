import React, { useState, useEffect } from "react";
import { NavLink} from 'react-router-dom';
import "./Products.css";

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setfilter] = useState([data]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setData(data);
            setfilter(data);
        }
        getProducts();
    }, []);

    const filterProduct = (cat) => {
        const updatedList = data.filter(item => item.category === cat);
        console.log(updatedList);
        setfilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-4 pb-4 ">
                    <button className="btn btn-outline-dark me-2" onClick={() => setfilter(data)} >All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men Wear</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women Wear</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewellery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>
                {filter.length > 0 ? filter.map(product => (
                    <div className="details col-md-3 mb-4" key={product.id}>
                        <div className="card h-100 text-center p-4" >
                            <img className="card-img-top" src={product.image} alt={product.title} height={250} />
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title text-center m-3">{product.title}</h5>
                                <p className="card-text lead fw-bold">$ {product.price}</p>
                                <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                            </div>
                        </div>
                    </div>)) :
                    data.map((product) => {
                        return (
                            <>
                                <div className="details col-md-3 mb-4" key={product.id}>
                                    <div className="card h-100 text-center p-4" >
                                        <img className="card-img-top" src={product.image} alt={product.title} height={250} />
                                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                            <h5 className="card-title text-center m-3">{product.title}</h5>
                                            <p className="card-text lead fw-bold m-3">$ {product.price}</p>
                                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark m-3">Buy Now</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )
    }

    return (
        <div className="container my-4 py-4">
            <div className="row">
                <div className="col-md-12 mb-4">
                    <h1 className="display-6 fw-bold text-center">Latest Products</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <ShowProducts />
            </div>
        </div>

    );
}

export default Products;
