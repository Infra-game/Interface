import "./FTP.css";
import React, { useRef } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from 'react-hook-form'

const acces = [
    {
        value: 'Total',
        label: 'Accès Total',
    },
    {
        value: 'Lecture',
        label: 'Accès Limité',
    },
];



export default function FTP() {
    
   
    const [accesFTP, setacces] = React.useState('Total');
    const [Password, setpassword] = React.useState('');
    const [ConfPassword, setConfpassword] = React.useState('');
    const [reponse, setreponse] = React.useState('');
    const handleAccesChange = (event) => {
        setacces(event.target.value);
    
    }
  
    const handleSubmit = () => {
        if (Password === ConfPassword){
            setreponse ("Mot de passe correcte")
        

        } else {
            setreponse ("Mot de passe incorrecte")
        }

    }
    
      /*const { register, errors, handleSubmit, watch } = useForm({});
      const password = useRef({});
      password.current = watch("password", "");
      const onSubmit = async data => {
        alert(JSON.stringify(data));
      };
      */

   return ( 
    <div className="FTP">
    <div className="FTPContainer">
        <div className="subdomainContainer">
            <div className="subdomain">
                <h3>
                   Création Compte FTP
                </h3>
            </div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="FTPSubname" label="FTP" variant="outlined" />
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Ex: 1574_"
                    defaultValue="infragame.com"
                />
            </Box>
        </div>
        <div className="optionContainer">
            <div className="subdomainContainer2">
                    <div className="FTPChoice">
                        <h3>
                            Choix des droit
                        </h3>
                    </div>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                      <div>
                                <TextField
                                    id="outlined-select-FTP"
                                    select
                                    label="Choisir un droit"
                                    value={accesFTP}
                                    onChange={handleAccesChange}
                                    helperText="Choisisez votre jeux"
                                >
                                    {acces.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                    </Box>
                </div>
                </div>
               
       

 
    <form onSubmit={e => e.preventDefault()}>
      <label>Mot de passe</label>
      <input
        name="password"
        type="password"
        value ={Password}
        onChange = {e => setpassword(e.target.value) }
      />

      <label>Comfirme mot de passe</label>
      <input
        name="password_repeat"
        type="password"
        value ={ConfPassword}
        onChange = {e => setConfpassword(e.target.value) }
     
      />
      {reponse}

      <input type="submit" onClick={() => handleSubmit()} />
    </form>
       
       
    </div>
       </div> )
   
 }