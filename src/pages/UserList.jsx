import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from '../axiosConfig';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { tokenHeaders } from "../Utils";
import { FillWidget } from '../component/Widgets';


/**
 * UserList page to show existing users 
 * @param { function UserList(users, setUsers) }
 * @returns { Promise }
 */
export default function UserList({user}) {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get("/users", tokenHeaders)
        .then((res) => {
            setUsers([...res.data]); 
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
        axios.delete(`/users/${selected}`, tokenHeaders)
        .then((res) => {
            if(!res.data.error) {
                setUsers(users.filter(element => element.id !== selected ));
            } else {
                console.log(res.data.message);
            }
        });
      };
    // doc https://mui.com/components/tables/#main-content
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'username', headerName: 'Username', width: 200, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        {
            field: 'fullname',
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

    if(user.role.toLowerCase()==="admin") {
        return (
            <div className="page userList">
                <FillWidget size="80">
                    <h1>Liste des utilisateurs</h1>
                    {users.length>0 && 
                    <DataGrid
                        rows={users}
                        enableSelectionOnClick
                        columns={columns}
                        pageSize={15}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                        autoHeight
                    />} 
                    <Link  to ="/newUser">
                        <button className="userAddButton">
                            Create
                        </button>
                    </Link>
                </FillWidget>
            </div>
        )
    } else {
        return (
            <div className="page error">
                <div className="content">Vous n'avez pas les droits requis.</div>
            </div>
        )
    }
}
