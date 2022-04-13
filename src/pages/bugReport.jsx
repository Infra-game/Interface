import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { FillWidget } from "../component/Widgets";
import axios from "../axiosConfig";
import { CheckCircle } from "@mui/icons-material";

/**
 * definition of the Bug constancy
filling in the possible choices 
 */
const BugTypes = [
  {
    value: "VIS",
    label: "Visuel",
  },
  {
    value: "GA",
    label: "Lié a un serveur de Jeux vidéo",
  },
  {
    value: "OTH",
    label: "Autres",
  },
];
/**
 * Bug report page
 * @param { string } userRole
 * @returns { Promise }
 */

export default function BugReport({ userRole }) {
  const [bugList, setBugList] = useState([]);
  const [bugListTypes, setBugListTypes] = useState([]);
  const [bugType, setBugType] = useState("");
  const [bugMessage, setBugMessage] = useState("");

  const handleSubmit = () => {
    axios.post("/feedback", { bugType, bugMessage }).then((res) => {
      console.log(res.data);
    });
  };

  const handleValidate = (id) => {
    axios.put("/feedback/validate/"+id).then((res) => {
      console.log(res.data);
    })
  }

  useEffect(() => {
    if (userRole !== "admin") {
      axios.get("/feedback").then((res) => {
        setBugList(res.data);
        setBugListTypes(
          res.data
            .map((bug) => bug.bugType)
            .filter((value, index, self) => self.indexOf(value) === index)
        );
      });
    }
  }, [userRole]);

  return (
    <div className="page bug">
      <FillWidget size="80">
        {userRole !== "admin" ? (
          <div className="bugList">
            {bugList.length !== 0 &&
              bugListTypes.map((type, index) => {
                return (
                  <div className="bugType" key={index}>
                    <h2>{BugTypes.find((element) => element.value === type).label}</h2>
                    {bugList.filter((bug) => bug.bugType===type).map((bug,i) => {
                        return (
                            <div className="bugItem" key={i}>
                                <p>{bug.bugMessage}</p>
                               <IconButton children={<CheckCircle/>} color={"primary"} onClick={() => handleValidate(bug.id)}/>
                            </div>
                        )
                    })}
                  </div>
                );
              })}
          </div>
        ) : (
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-select-game"
              select
              label="Type de bug rencontré "
              value={bugType}
              onChange={(e) => setBugType(e.target.value)}
            >
              {BugTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div className="message">
              <TextField
                id="motdMessage"
                label="Signalement du bug"
                variant="outlined"
                value={bugMessage}
                onChange={(e) => setBugMessage(e.target.value)}
              />
            </div>
            <Stack>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                className="send"
                onClick={() => handleSubmit()}
              >
                Envoyer
              </Button>
            </Stack>
          </Box>
        )}
      </FillWidget>
    </div>
  );
}
