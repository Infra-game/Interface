import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

import "./Config.css"

const langue = [
    {
        value: 'US',
        label: 'Anglais',
    },
    {
        value: 'FR',
        label: 'Français',
    },
    {
        value: 'DU',
        label: 'Allemand',
    },
    {
        value: 'JPY',
        label: 'Japonnais',
    },
];


const differentLevel = [
    {
        value: 'Hard',
        label: 'Difficile',
    },
    {
        value: 'Medium',
        label: 'Moyen',
    },
    {
        value: 'Easy',
        label: 'Facile',
    },
];
const videoGame = [
    {
        value: 'Mine',
        label: 'Minecraft',
    },
    {
        value: 'tee',
        label: 'teeworld',
    },
    {
        value: 'Cs',
        label: 'Cs GO',
    },
];

export default function Config() {
    const [language, setlanguage] = React.useState('FR');
    const [Level, setLevel] = React.useState('Hard');
    const [game, setGame] = React.useState('Mine');

    const handleLanguageChange = (event) => {
        setlanguage(event.target.value);
    };
    const handleLevelChange = (event) => {
        setLevel(event.target.value);
    };
    const handleGameChange = (event) => {
        setGame(event.target.value);
    };

    return (
        <div className="config">
            <div className="configContainer">
                <div className="subdomainContainer">
                    <div className="subdomain">
                        <h3>
                            Choix du Nom de Sous Domaine
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
                        <TextField id="configSubname" label="Sous Domaine" variant="outlined" />
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="Domaine"
                            defaultValue="infragame.com"
                        />
                    </Box>
                </div>
                <div className="motdContainer">
                    <div>
                        <h3>
                            MOTD
                        </h3>
                    </div>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '52ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="motdMessage" label="MOTD" variant="outlined" />
                        </Box>

                    </div>
                </div>
                <div className="choiceContainer">
                <div className="languageContainer">
                    <div>
                        <h3>
                            Langue
                        </h3>
                    </div>
                    <div>
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
                                    id="outlined-select-langue"
                                    select
                                    label="Choisir la langue du serveur"
                                    value={language}
                                    onChange={handleLanguageChange}
                                    helperText="Choisisez une langue"
                                >
                                    {langue.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                        </Box>
                    </div>
                </div>
                <div className="levelContainer">
                    <div>
                        <h3>
                            Difficulté
                        </h3>
                    </div>
                    <div>
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
                                    id="outlined-select-Level"
                                    select
                                    label="Choix de la difficulté"
                                    value={Level}
                                    onChange={handleLevelChange}
                                    helperText="Choisir un niveaux"
                                >
                                    {differentLevel.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                        </Box>
                    </div>
                </div>
                </div>
                <div className="mapContainer">
                    <div>
                        <h3>
                            Nom de la map
                        </h3>
                    </div>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '52ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="mapMessage" label="Nom de la map" variant="outlined" />
                        </Box>

                    </div>
                </div>
                </div>
            <div className="optionContainer">
            <div className="subdomainContainer2">
                    <div className="gameChoice">
                        <h3>
                            Choix du Jeux
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
                                    id="outlined-select-game"
                                    select
                                    label="Choisir un jeux"
                                    value={game}
                                    onChange={handleGameChange}
                                    helperText="Choisisez votre jeux"
                                >
                                    {videoGame.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                    </Box>
                </div>
                <div className="versionContainer">
                    <div>
                    <FormControl component="fieldset">
                    <FormLabel component="legend">Choix de Version</FormLabel>
                    <RadioGroup row aria-label="vesion" name="row-radio-buttons-group">
                        <FormControlLabel value="1.0" disabled control={<Radio />} label="1.0" />
                        <FormControlLabel value="2.0" disabled control={<Radio />} label="2.0" />
                        <FormControlLabel value="3.0" disabled control={<Radio />} label="3.0" />
                        <FormControlLabel
                        value="Latest"
                        disabled
                        control={<Radio />}
                        label="Derniere Version"
                        />
                    </RadioGroup>
                    </FormControl>

                    </div>
                </div>
                <div className="deliveryOption">
                <div className="optionLivraison">
                    <h3>
                        Option de livraison
                    </h3>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Redemarrage auto" />
                    <FormControlLabel control={<Checkbox />} label="WhiteList" />
                    <FormControlLabel control={<Checkbox  />} label="Commande Block" />
                    <FormControlLabel control={<Checkbox />} label="PVP" />
                    <FormControlLabel control={<Checkbox />} label="PNJ" />
                    <FormControlLabel  control={<Checkbox />} label="Monstre" />
                    <FormControlLabel  control={<Checkbox />} label="Animaux" />
                    <FormControlLabel  control={<Checkbox />} label="Mode Survie" />
                    <FormControlLabel  control={<Checkbox />} label="Mode Hardcore" />
                    <FormControlLabel  control={<Checkbox />} label="Autoriser autre joueurs" />

                </FormGroup>
                </div>
                </div>



            </div>
        </div>
    )


}
