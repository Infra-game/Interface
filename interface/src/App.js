import './App.css';
import Topbar from './component/topbar/Topbar';
import Sidebar from './component/sidebar/Sidebar';

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
      </div>
     </div>

  ) 
}


export default App;
