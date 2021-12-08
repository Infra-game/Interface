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
import FTP from './pages/ftp/ftp';

//Erreur : is defined but never used no-unused--vars
// eslint-disable-next-line
import  BugReport from './pages/bugReport/bugReport';

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
            <Route path="/FTP">
              <FTP/>
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
            <Route path="/bugReport">
              <BugReport />
            </Route>
          </Switch>
        </div>
      </Router>
  ) 
}


export default App;
