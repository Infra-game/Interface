import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { FillWidget } from "../component/Widgets";
import axios from "../axiosConfig"

/**
 * definition of the Langue consistency
 * filling in the possible choices
 */
const difficulties = [
  {
    value: "Peaceful",
    label: "Paisible",
  },
  {
    value: "Easy",
    label: "Facile",
  },
  {
    value: "Normal",
    label: "Normal",
  },
  {
    value: "Hard",
    label: "Difficile",
  },
];

/**
 * Config page used to create server with parameters
 * @param { object } user
 * @returns { HTMLElement }
 */
export default function Config({ user }) {
  const [name, setName] = useState("");
  const [motd, setMotd] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleSubmit = () => {
    axios
    .post("/testconfig", {name, motd, difficulty})
    .then((res) => {
        console.log(res);
    })
  }

  return (
    <div className="page config">
      <FillWidget size="80">
        <TextField label="Nom du serveur" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/>
        <TextField label="MOTD" variant="outlined" value={motd} onChange={(e) => setMotd(e.target.value)}/>
        <TextField
          select
          label="Choix de la difficulté"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          {difficulties.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<SendIcon />} onClick={() => handleSubmit()}>
            Envoyer
          </Button>
        </Stack>
      </FillWidget>
    </div>
  );
}
