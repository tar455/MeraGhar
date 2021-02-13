import React from 'react';
import Footer from '../template/footer';
import Header2 from '../template/header2';

export default function signup() {
  return (
    <>
    <Header2/>
    <div className="container">
        <div className="row">
            <div className="col-12 col-sm-6 mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title mx-auto">Signup</h3>
                        <div className="alert alert-danger" role="alert">
                            Fill it Properly
                        </div>
                    </div>
                    <div className="card-body">
                        <form className="form-signup">
                            <div className="form-group">
                                <label >Name</label>
                                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder="Enter Full Name"/>
                            </div>
                            <div className="form-group">
                                <label >Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                    <input type="password" autoComplete="on" className="form-control" id="examplePassword" placeholder="Enter Password"/>
                            </div>
                            <div className="form-group">
                                <label>confirm Password</label>
                                    <input type="password" autoComplete="on" className="form-control" id="exampleConPassword" placeholder="ReEnter Password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="exampleCheckPass"/>
                                Show Password
                            </div>
                            <div className="form-group">
                                <input type="submit" id="signupButton" className="btn me-2"/>
                            </div>
                            If Already Have An Account <a href="/login-signup">Login</a>  
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer">
        <Footer/>
    </div>
    </>
  );
}
