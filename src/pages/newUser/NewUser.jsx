import "./newUser.css";
import axios from 'axios';
import { useState } from 'react';


export default function NewUser() {
  
const addUser = () => {
  axios.post("http://localhost:5000/users/add",{email,username,password,fullName,phone,addresse})
}
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setfullName] = useState("");
  const [phone, setPhone] = useState("");
  const [addresse, setAddresse] = useState("");

  
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nouvelle Utilisateur</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Pseudo</label>
          <input type="text" placeholder="john" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Nom Complet</label>
          <input type="text" placeholder="John Smith" value={fullName} onChange={(e) => setfullName(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Mot de passe</label>
          <input type="password" placeholder="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Téléphone</label>
          <input type="text" placeholder="+1 123 456 78" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Adresse</label>
          <input type="text" placeholder="New York | USA" value={addresse} onChange={(e) =>  setAddresse(e.target.value)}/>
        </div>
        <button className="newUserButton" onClick={() => addUser()}>Create</button>
      </form>
    </div>
  );
}