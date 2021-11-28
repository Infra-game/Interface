import './App.css';
import Topbar from './component/topbar/Topbar';
import Sidebar from './component/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from "./pages/userList/UserList";
import User from './pages/User/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Config from './pages/Config/Config';

import { BrowserRouter as Router,Switch,Route } from "react-router-dom";


// doc router https://reactrouter.com/web/guides/quick-start 
function App() {
  return (
      <Router> 
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList /> 
            </Route>
            <Route path="/user/:userId">
              <User /> 
            </Route>
            <Route path="/newUser">
              <NewUser/>
            </Route>
            <Route path="/products">
              <ProductList /> 
            </Route>
            <Route path="/product/:productsId">
               <Product />
            </Route>
            <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/Config">
            <Config />
          </Route>
          </Switch>
        </div>
      </Router>
  ) 
}


export default App;
