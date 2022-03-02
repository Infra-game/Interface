import React  from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FillWidget } from "../component/Widgets";
import { Button } from "@material-ui/core";

/**
 * definition of the acces consistency 
 * filling in the possible choices 
 */
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

/**
 * FTP Page for ftp access
 * @param { string } userRole
 * @returns { HTMLElement }
 */
const FTP = ({userRole}) => {
    const [accesFTP, setacces] = React.useState('Total');
    const [Password, setpassword] = React.useState('');
    const [ConfPassword, setConfpassword] = React.useState('');
    const [reponse, setreponse] = React.useState('');

    const handleAccesChange = (event) => {
        setacces(event.target.value);
    }

    const handleSubmit = () => {
        if (Password === ConfPassword){
            setreponse ("Mot de passe correct")
        } else {
            setreponse ("Mot de passe incorrect")
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
        <div className="page FTP">
            <FillWidget size={80}>
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
                        <TextField
                            id="FTPSubname"
                            label="FTP"
                            variant="outlined"
                        />
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
                <h3>
                    Mot de passe
                </h3>
                <form onSubmit={e => e.preventDefault()}>
                    <div className="password">
                        <TextField
                            id="mdp"
                            label="Mot de passe"
                            variant="outlined"
                            value={Password}
                            onChange = {e => setpassword(e.target.value) }
                        />
                        <TextField
                            id="mdpConfirm"
                            label="Confirmer le mot de passe"
                            variant="outlined"
                            value={ConfPassword}
                            onChange = {e => setConfpassword(e.target.value) }
                        />
                        <Button variant="contained" className="send" onClick={() => handleSubmit()}>
                            Envoyer
                        </Button>
                    </div>
                </form>
                {reponse}
            </FillWidget>
        </div>
    )
}

export default FTP;