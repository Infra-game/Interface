import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles/index.scss';

function App() {
  const [users, setUsers] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addUser = () => {
      axios.post("http://localhost:5000/users/add",{email,username,password})
      .then((res) => console.log(res.data.message));
  }

  const deleteUser = (id) => {
      axios.delete("http://localhost:5000/users/"+id)
      .then((res) => {
        console.log(res.data.message);
        setUsers(users.filter(element => element.id !== id));
      });
  }

  const updateUser = (id) => {
    
  }

  useEffect(() => {
      axios.get("http://localhost:5000/users")
      .then((res) => setUsers(res.data))
  },[users])

  return (
    <div className="App">
        <div className="register">
          <label htmlFor="email">Email :</label>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="username">Username :</label>
          <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <label htmlFor="password">Password :</label>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="button" onClick={() => addUser()} >S'inscrire</button>
        </div>
        <div className="listusers">
          {users && users.map((user,index) => {
              return (
                <div key={index}>
                  <p>Email : {user.email} Username : {user.username}</p>
                  <button onClick={() => deleteUser(user.id)}>Supprimer</button>
                  <button onClick={() => updateUser(user.id)}>Modifier</button>
                </div>
                )
          })}
        </div>
    </div>
  );
}

export default App;
