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
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
import Registerlogin from './pages/Registerlogin';
import Monitoring from './pages/Monitoring';



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
            <ProtectedRoute path="/" exact component={Home} pageName="home"/>
            <ProtectedRoute path="/users" exact component={UserList} pageName="user"/>
            <ProtectedRoute path="/user/:userId" exact component={User} pageName="user"/>
            <ProtectedRoute path="/newUser" exact component={NewUser} pageName="user"/>
            <ProtectedRoute path="/monitoring" exact component={Monitoring} pageName="monitoring"/>
            <ProtectedRoute path="/games" exact component={Games} pageName="games"/>
            <ProtectedRoute path="/config" exact component={Config} pageName="config"/>
            <ProtectedRoute path="/ftp" exact component={FTP} pageName="ftp"/>
            <ProtectedRoute path="/bugreport" exact component={BugReport} pageName="bugreport"/>
            <Route path="/login" exact render={()=><Registerlogin type="login"/>}/>
            <Route path="/register" exact render={()=><Registerlogin type="register"/>}/>
            <Route component={ NotFound } />
          </Switch>
        </div>
      </Router>
  ) 
}


export default App;
