import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const Bug = [
    {
        value: 'VIS',
        label: 'Visuel',
    },
    {
        value: 'GA',
        label: 'Lié a un serveur de Jeux vidéo',
    },
    {
        value: 'OTH',
        label: 'Autres',
    },
];

export default function BugReport({userRole}) {

     const [BugR, setBug] = React.useState('VIS');

     const handleBugReport = (event) => {
        setBug(event.target.value);
    };    

        return (
        <div className="bug">
            <div className="typeBug">
                <Box 
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
                >
                    <div>
                        <TextField
                            id="outlined-select-game"
                            select
                            label="Type de bug rencontré "
                            value={BugR}
                            onChange={handleBugReport}
                            helperText="Selectionner le bug"
                        >
                            {Bug.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className="message">
                        <TextField id="motdMessage" label="Signalement du bug" variant="outlined" />
                    </div>
                    <Stack>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Envoyer
                        </Button>
                    </Stack>
                </Box>
                <div className="send"></div>
            </div>
        </div>
    )
}
