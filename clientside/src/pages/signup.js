import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { signup } from '../actions/UserActions';
import Footer from '../template/footer';
import Header2 from '../template/header2';

export default function Signup() {
    const [name,setName] =useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirm,setConfirm] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(signup(name,email,password,confirm));
    }
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
                        <form className="form-signup" onSubmit={submitHandler}>
                            <div className="form-group">
                                <label >Name</label>
                                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder="Enter Full Name"
                                    required
                                    onChange={(e)=>setName(e.target.value)}
                                    />
                            </div>
                            <div className="form-group">
                                <label >Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                    required
                                    onChange={(e)=>setEmail(e.target.value)}
                                    />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                    <input type="password" autoComplete="on" className="form-control" id="examplePassword" placeholder="Enter Password"
                                    required
                                    onChange={(e)=>setPassword(e.target.value)}
                                    />
                            </div>
                            <div className="form-group">
                                <label>confirm Password</label>
                                    <input type="password" autoComplete="on" className="form-control" id="exampleConPassword" placeholder="ReEnter Password"
                                    required
                                    onChange={(e)=>setConfirm(e.target.value)}
                                    />
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
