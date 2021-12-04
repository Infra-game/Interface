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
import NotFound from './pages/notFound/NotFound';


import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';


// doc router https://reactrouter.com/web/guides/quick-start 
function App() {
  return (
      <Router> 
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" exact component={ UserList } />
            <Route path="/user/:userId" exact component={ User } />
            <Route path="/newUser" exact component={ NewUser } />
            <Route path="/products" exact component={ ProductList } />
            <Route path="/product/:productsId" exact component={ Product } />
            <ProtectedRoute type="Admin" path="/newproduct" exact component={ NewProduct } />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </Router>
  ) 
}


export default App;
