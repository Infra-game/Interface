import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from './pages/Home';
import UserList from "./pages/UserList";
import User from './pages/User/User';
import NewUser from './pages/newUser/NewUser';
import Config from './pages/Config';
import FTP from './pages/ftp';
import  BugReport from './pages/bugReport';
import Login from './pages/login/Login';
import NotFound from './pages/notFound/NotFound';
import Games from './pages/Games';
import ProtectedRoute from './ProtectedRoute';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faEnvelope, faSearch, faThLarge, faSlidersH, faChartPie, faUsers } from '@fortawesome/free-solid-svg-icons';

library.add(
    faBell,
    faEnvelope,
    faSearch,
)

function App() {
  return (
      <Router> 
          <Switch>
            <ProtectedRoute path="/" exact component={Home} pageName="home"/>
            <ProtectedRoute path="/users" exact component={UserList} pageName="user"/>
            <ProtectedRoute path="/user/:userId" exact component={User} pageName="user"/>
            <ProtectedRoute path="/newUser" exact component={NewUser} pageName="user"/>
            <ProtectedRoute path="/games" exact component={Games} pageName="games"/>
            <ProtectedRoute path="/config" exact component={Config} pageName="config"/>
            <ProtectedRoute path="/ftp" exact component={FTP} pageName="ftp"/>
            <ProtectedRoute path="/bugreport" exact component={BugReport} pageName="bugreport"/>
            <Route path="/login" exact component={Login} />
            <Route component={ NotFound } />
          </Switch>
      </Router>
  ) 
}


export default App;
