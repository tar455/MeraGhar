// import { render } from "react-dom";
import React from "react";
// import Header from "./template/header";
// import  Footer from "./template/footer";
import {BrowserRouter,Route} from 'react-router-dom';
import Cart from "./pages/cart";
import HomeScreen from "./pages/HomeScreen";
import Login from "./pages/Login";
import Product from "./pages/Product";
import About from "./pages/about";
class App extends React.Component {
    render(){
        const number=[1,2,3,4,5,6]
        return( 
            <BrowserRouter>
            <div>
            <main>
            <Route key={number.toString} path="/" component={HomeScreen} exact></Route>
            <Route key="login" path="/login-signup" component={Login}></Route>
            <Route key="products" path="/products" component={Product}></Route>
            <Route key="cart" path="/cart" component={Cart}></Route>
            <Route key="about" path="/about" component={About}></Route>
            </main>
            </div>
            </BrowserRouter>
        );

    }
}
export default App;