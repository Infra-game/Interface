import "./userList.css";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
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

        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 250,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                // On en peut pas mettre deux composant dans le return du coup on rajoute <> 
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">
                                Edit
                            </button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
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
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}
