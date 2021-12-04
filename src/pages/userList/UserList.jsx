import "./userList.css";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function UserList() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:5000/users")
        .then((res) => {
            console.log(res.data)
            if(JSON.stringify(users)!==JSON.stringify(res.data)){
                setUsers(res.data) ; 
            }
        })
    },[users]) 
    
      const [open, setOpen] = React.useState(false);
      const [selected,setSelected] = React.useState("");
      
      const handleClickOpen = (id) => {
        setOpen(true);
        setSelected(id)
      };
          const handleClose = () => {
        setOpen(false);
        setSelected("")
      };

        const handleDelete = () => {
        axios.delete(`http://localhost:5000/users/${selected}`)
        .then((res) => {
          setUsers(users.filter(element => element.id !== selected ));
        });
      };
    // doc https://mui.com/components/tables/#main-content
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        {
            field: 'fullName',
            headerName: 'Nom et prénom',
            width: 250,
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'role',
            headerName: 'Role',
            width: 120,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">
                                Edit
                            </button>
                        </Link>
                        {/* <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)} /> */}
                        <DeleteOutline className="userListDelete" onClick={() => handleClickOpen(params.row.id)} />
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                            {"Suppression d'utilisateur"}
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Etes-vous sur de vouloir supprimer cette utilisateur ? 
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={() => handleClose()}>Disagree</Button>
                            <Button onClick={() => { handleDelete() ; handleClose() ; }} autoFocus>
                                Agree
                            </Button>
                            </DialogActions>
                        </Dialog>

                    </>
                )
            }
        },
    ];

    return (
        
        <div className="userList">
            <Link  to ="/newUser">
                <button className="userAddButton">
                    Create
                </button>
                </Link>
            <div style={{ height: 700, width: '100%' }}>
                {users.length>0 && 
                <DataGrid
                    rows={users}
                    enableSelectionOnClick
                    columns={columns}
                    pageSize={15}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    
                />}
            </div>
        </div>
    )
}
