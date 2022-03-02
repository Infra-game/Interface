import axios from '../axiosConfig';
import { useState } from 'react';
import { tokenHeaders } from "../Utils";
import { FillWidget } from '../component/Widgets';


/**
 * Home page 
 * @param { string } userRole 
 * @returns { HTMLElement }
 */
export default function NewUser({userRole}) {

const addUser = () => {
  axios.post("/users/add",{email,username,password,fullName,role}, tokenHeaders)
}
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setfullName] = useState("");
 

  
  return (
    <div className="page newUser">
      <FillWidget size="80">
        <h1 className="newUserTitle">Nouvel Utilisateur</h1>
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
            <label>Role</label>
            <div className="newUserRole">
              <input type="radio" name="role" id="admin"  onChange={e => setRole('Admin')}/>
              <label for="admin">Admin 
              </label>
              <input type="radio" name="role" id="utilisateur" onChange={e => setRole('utilisateur')}/>
              <label for="utilisateur">Utilisateur</label>
              <input type="radio" name="role" id="joueur" onChange={e => setRole('joueur')} />
              <label for="joueur">Joueur</label> 
            </div>
          </div>
          <button className="newUserButton" onClick={() => addUser()}>Create</button>
        </form>
      </FillWidget>
    </div>
  );
}