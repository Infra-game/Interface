import './App.css';
import Topbar from './component/topbar/Topbar';
import Home from './pages/home/Home';
import UserList from "./pages/userList/UserList";
import User from './pages/User/User';
import NewUser from './pages/newUser/NewUser';
import Login from './pages/login/Login';
import NotFound from './pages/notFound/NotFound';

import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Games from './pages/games/Games';
import ProtectedRoute from './ProtectedRoute';



// doc router https://reactrouter.com/web/guides/quick-start 
function App() {
  return (
      <Router> 
        <Topbar/>
        <div className="container">
          <Switch>
            <ProtectedRoute path="/" exact component={Home} />
            <ProtectedRoute path="/users" exact component={ UserList } />
            <ProtectedRoute path="/user/:userId" exact component={ User } />
            <ProtectedRoute path="/newUser" exact component={ NewUser } />
            <ProtectedRoute path="/games" exact component={ Games } />
            <Route path="/login" exact component={Login} />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </Router>
  ) 
}


export default App;
