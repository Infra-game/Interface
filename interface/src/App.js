import './App.css';
import Topbar from './component/topbar/Topbar';
import Sidebar from './component/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from "./pages/userList/UserList";


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
          </Switch>
        </div>
      </Router>
  ) 
}


export default App;
