import React from 'react';
import Products from '../Products/Products';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <div className="home">
            <div className="card bg-dark text-white border-0">
                <img className="card-img " src="/assests/bg.jpg " alt="background" height={550} />
                <div className="card-img-overlay">
                    <div className="c-container text-center">
                        <h5 className="card-title display-3 fw-bolder mb-0 ">Stay Home and Shop Online </h5>
                        <p className="card-text lead fs-3 fw-bold">Check latest products!!</p>
                    </div>
                    <div className="img_container">
                        <Carousel>
                            <Carousel.Item>
                                <div className="d-flex justify-content-center">
                                    <img
                                        className="carousel-img d-block w-50 m-4"
                                        src="/assests/1.jpg"
                                        alt="First slide"
                                        height={350}
                                    />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-img d-flex justify-content-center">
                                    <img
                                        className="d-block w-50 m-4"
                                        src="/assests/2.jpg"
                                        alt="First slide"
                                        height={350}
                                    />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-img d-flex justify-content-center">
                                    <img
                                        className="d-block w-50 m-4"
                                        src="/assests/3.jpg"
                                        alt="First slide"
                                        height={350}
                                    />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-img d-flex justify-content-center">
                                    <img
                                        className="d-block w-50 m-4"
                                        src="/assests/4.jpg"
                                        alt="First slide"
                                        height={350}
                                    />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    );
}

export default Home;