// import { render } from "react-dom";
import React from "react";
// import Header from "./template/header";
// import  Footer from "./template/footer";
import {BrowserRouter,Route} from 'react-router-dom';
import Cart from "./pages/cart";
import HomeScreen from "./pages/HomeScreen";
import Login from "./pages/Login";
import Product from "./pages/Product";
class App extends React.Component {
    render(){
        
        return( 
            <BrowserRouter>
            <div>
            <main>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/login-signup" component={Login}></Route>
            <Route path="/product" component={Product}></Route>
            <Route path="/cart" component={Cart}></Route>
            </main>
            </div>
            </BrowserRouter>
        );

    }
}
export default App;