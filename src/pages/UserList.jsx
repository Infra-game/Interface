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


export default function UserList() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get("/users", tokenHeaders)
        .then((res) => {
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
        <div className="page userList">
            <FillWidget size="80">
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
            </FillWidget>
        </div>
    )
}
