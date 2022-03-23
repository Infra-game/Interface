import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from './pages/Home';
import UserList from "./pages/UserList";
import User from './pages/User';
import NewUser from './pages/NewUser';
import Config from './pages/Config';
import FTP from './pages/ftp';
import  BugReport from './pages/bugReport';
import NotFound from './pages/NotFound';
import Games from './pages/Games';
import ProtectedRoute from './ProtectedRoute';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
import Registerlogin from './pages/Registerlogin';
import Monitoring from './pages/Monitoring';

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
            <ProtectedRoute path="/monitoring" exact component={Monitoring} pageName="monitoring"/>
            <ProtectedRoute path="/games" exact component={Games} pageName="games"/>
            <ProtectedRoute path="/config" exact component={Config} pageName="config"/>
            <ProtectedRoute path="/ftp" exact component={FTP} pageName="ftp"/>
            <ProtectedRoute path="/bugreport" exact component={BugReport} pageName="bugreport"/>
            <Route path="/login" exact render={()=><Registerlogin type="login"/>}/>
            <Route path="/register" exact render={()=><Registerlogin type="register"/>}/>
            <Route component={ NotFound } />
          </Switch>
      </Router>
  )
}


export default App;
