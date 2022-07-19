import React from "react";
// import login from "../../../public/assests/login.jpg"

const Login = () => {
    return (
        <div className="login">
            <section className="vh-100">
                <div className="container h-75 p-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="card text-black" >
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center">
                                        <img src="/assests/login.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                        <form className="m-3 mx-md-4">
                                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                                <button type="button" className="btn btn-dark btn-floating mx-1">
                                                    <i className="fa fa-facebook-f"></i>
                                                </button>

                                                <button type="button" className="btn btn-dark btn-floating mx-1">
                                                    <i className="fa fa-twitter"></i>
                                                </button>

                                                <button type="button" className="btn btn-dark btn-floating mx-1">
                                                    <i className="fa fa-linkedin"></i>
                                                </button>
                                            </div>
                                            <div className="divider d-flex align-items-center my-4">
                                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                                    placeholder="Enter a valid Email address" />
                                            </div>
                                            <div className="form-outline mb-3">
                                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                                    placeholder="Enter password" />
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                                    <label className="form-check-label" for="form2Example3">
                                                        Remember me
                                                    </label>
                                                </div>
                                                <a href="#!" className="text-body">Forgot password?</a>
                                            </div>
                                            <div className="text-center text-lg-start d-flex flex-column justify-content-center mt-4 pt-2">
                                                <button type="button" className="btn btn-dark btn-lg mx-5 ">Login</button>
                                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
                                                    className="link-danger">Register</a></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;