import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles/index.scss';

function App() {
  const [users, setUsers] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [id, setID] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logEmail, setLogEmail] = useState("");
  const [logUsername, setLogUsername] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [message, setMessage] = useState("");

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

  const updateUser = () => {
    axios.put("http://localhost:5000/users/"+id, {email, username, password})
    .then((res) => {
      setMessage(res.data.message);
    });
  }

  const handleUpdate = (user) => {
    if(isUpdating){
      setIsUpdating(false);
      setID("");
      setEmail("");
      setUsername("");
      setPassword("");
    } else {
      setIsUpdating(true);
      setID(user.id);
      setEmail(user.email);
      setUsername(user.username);
      setPassword(user.password);
    }
  }

  const login = () => {
    axios
    .post("http://localhost:5000/login", {
      email : logEmail,
      username : logUsername,
      password : logPassword
    })
    .then((res) => setMessage(res.data.message))
  }

  useEffect(() => {
      axios.get("http://localhost:5000/users")
      .then((res) => setUsers(res.data))
  },[users])

  return (
    <div className="App">
        <div className="register">
          <h1>Register</h1>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="username">Username :</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <label htmlFor="password">Password :</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="button" onClick={() => isUpdating ? updateUser() : addUser()}>{isUpdating ? "Modifier" : "S'inscrire"}</button>
        </div>

        <div className="login">
          <h1>Login</h1>
          <label htmlFor="email">Email :</label>
          <input type="email" id="log-email" value={logEmail} onChange={(e) => setLogEmail(e.target.value)}/>
          <label htmlFor="username">Username :</label>
          <input type="text" id="log-username" value={logUsername} onChange={(e) => setLogUsername(e.target.value)}/>
          <label htmlFor="password">Password :</label>
          <input type="password" id="log-password" value={logPassword} onChange={(e) => setLogPassword(e.target.value)}/>
          <button type="button" onClick={() => login()}>{isUpdating ? "Modifier" : "S'inscrire"}</button>
        </div>

        <div className="listusers">
          <h1>List users</h1>
          {users && users.map((user,index) => {
              return (
                <div key={index}>
                  <p>Email : {user.email} Username : {user.username}</p>
                  <button onClick={() => deleteUser(user.id)}>Supprimer</button>
                  <button onClick={() => handleUpdate(user)}>Modifier</button>
                </div>
                )
          })}
        </div>
        <h1>{message}</h1>
    </div>
  );
}

export default App;
