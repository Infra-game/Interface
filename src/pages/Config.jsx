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
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { FillWidget } from '../component/Widgets'

/**
 * definition of the Langue consistency 
 * filling in the possible choices 
 */
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

/**
 * definition of the Langue consistency 
 * filling in the possible choices 
 */
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

/**
 * definition of the VideoGame consistency 
 * filling in the possible choices 
 */
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

/**
 * Config page used to create server with parameters 
 * @param { string } userRole 
 * @returns { HTMLElement }
 */
export default function Config({userRole}) {
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
        <div className="page config">
            <FillWidget size="80">
                <div className="configContainer">
                    <div className="subdomainContainer">
                        <h3>Choix du Nom de Sous Domaine</h3>
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
                        <h3>MOTD</h3>
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
                    <div className="languageContainer">
                        <h3>Langue</h3>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField
                                id="outlined-select-langue"
                                select
                                label="Choisir la langue du serveur"
                                value={language}
                                onChange={handleLanguageChange}
                            >
                                {langue.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                    </div>
                    <div className="difficultyContainer">
                        <h3>
                            Difficulté
                        </h3>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-select-Level"
                                select
                                label="Choix de la difficulté"
                                value={Level}
                                onChange={handleLevelChange}
                                >
                                {differentLevel.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                    </div>
                    <div className="mapContainer">
                        <h3>
                            Nom de la map
                        </h3>
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
                    <div className="gameContainer">
                        <h3>
                            Choix du Jeux
                        </h3>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-select-game"
                                select
                                label="Choisir un jeux"
                                value={game}
                                onChange={handleGameChange}
                            >
                                {videoGame.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                    </div>
                    <div className="versionContainer">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Choix de Version</FormLabel>
                            <RadioGroup row aria-label="vesion" name="row-radio-buttons-group">
                                <FormControlLabel value="1.0" control={<Radio />} label="1.0" />
                                <FormControlLabel value="2.0" control={<Radio />} label="2.0" />
                                <FormControlLabel value="3.0" control={<Radio />} label="3.0" />
                                <FormControlLabel
                                value="Latest"
                                control={<Radio />}
                                label="Derniere Version"
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="deliveryOption">
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
                <div className="send">
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Envoyer
                        </Button>
                    </Stack>
                </div>
            </FillWidget>
        </div>
    )
}
