import './App.css';
import Topbar from './component/topbar/Topbar';
import Home from './pages/home/Home';
import UserList from "./pages/userList/UserList";
import User from './pages/User/User';
import NewUser from './pages/newUser/NewUser';
//non utilisé
//import ProductList from './pages/productList/ProductList';
//import Product from './pages/product/Product';
//import NewProduct from './pages/newProduct/NewProduct';
import Config from './pages/Config/Config';
import FTP from './pages/ftp/ftp';

//Erreur : is defined but never used no-unused--vars
// eslint-disable-next-line
import  BugReport from './pages/bugReport/bugReport';
import Login from './pages/login/Login';
import NotFound from './pages/notFound/NotFound';

import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Games from './pages/games/Games';
import ProtectedRoute from './ProtectedRoute';



// doc router https://reactrouter.com/web/guides/quick-start 
/**
 * Protect routes to open other pages 
 * @returns { Promise }
 */
function App() {
  return (
      <Router> 
        <Topbar/>
        <div className="container">
          <Switch>
            <ProtectedRoute path="/" exact component={Home} />
            <ProtectedRoute path="/users" exact component={ UserList } />
            <ProtectedRoute path="/user/:userId" exact component={ User } />
            <ProtectedRoute path="/newUser" exact component={ NewUser } />é
            <ProtectedRoute path="/games" exact component={ Games } />
            <ProtectedRoute path="/config" exact component={ Config } />
            <ProtectedRoute path="/ftp" exact component={ FTP } />
            <ProtectedRoute path="/bugreport" exact component={ BugReport } />
            <Route path="/login" exact component={Login} />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </Router>
  ) 
}


export default App;
