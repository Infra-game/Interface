import "./user.css"
import { PermIdentity , CalendarToday , PhoneAndroid,  AlternateEmail , LocationOn  } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Sidebar from "../../component/Sidebar"

export default function User({userRole}) {
    if(userRole.toLowerCase()==="admin") {
        return (
            <div className="user">
                <Sidebar role={userRole} />
                <div className="content">
                    <div className="userTitleContainer">
                        <h1 className="userTitle">
                            Edit User
                        </h1>
                        <Link  to ="/newUser">
                        <button className="userAddButton">
                            Create
                        </button>
                        </Link>
                    </div>
                    <div className="userContainer">
                        <div className="userShow">
                            <div className="userShowBottom">
                                <div className="userShowTopTitle">
                                    <span className="userShowUsername">Anna Becker</span>
                                    <span className="userShowUserTitle">Software Engineer</span>
                                </div>
                            </div>
                            <div className="userSHowBottom">
                                <span className="userShowTitle">Account Details</span>
                                <div className="userShowInfo">
                                    <PermIdentity className="userShowIcon" />
                                    <span className="userShowInfoTitle"> Kebabstreet</span>
                                </div>
                                <div className="userShowInfo">
                                    <CalendarToday className="userShowIcon" />
                                    <span className="userShowInfoTitle"> 10.12.1999</span>
                                </div>
                                <span className="userShowTitle">Contact Details</span>
                                <div className="userShowInfo">
                                    <PhoneAndroid  className="userShowIcon" />
                                    <span className="userShowInfoTitle"> +1 123 456 67</span>
                                </div>
                                <div className="userShowInfo">
                                    <AlternateEmail className="userShowIcon" />
                                    <span className="userShowInfoTitle"> Lolptdr@ynov.com </span>
                                </div>
                                <div className="userShowInfo">
                                    <LocationOn className="userShowIcon" />
                                    <span className="userShowInfoTitle"> New York | USA </span>
                                </div>         
                            </div>
                        </div>
                        <div className="userUpdate">
                            <span className="userUpdateTitle">Edit</span>
                            <form className="userUpdateForm">
                                <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label>Username</label>
                                    <input
                                    type="text"
                                    placeholder="annabeck99"
                                    className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Full Name</label>
                                    <input
                                    type="text"
                                    placeholder="Anna Becker"
                                    className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Email</label>
                                    <input
                                    type="text"
                                    placeholder="annabeck99@gmail.com"
                                    className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Phone</label>
                                    <input
                                    type="text"
                                    placeholder="+1 123 456 67"
                                    className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Address</label>
                                    <input
                                    type="text"
                                    placeholder="New York | USA"
                                    className="userUpdateInput"
                                    />
                                </div>
                                </div>
                                <div className="userUpdateRight">
                            {/*  Reintegre l'icone publish si reintégration 
                                <div className="userUpdateUpload">
                                    <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                    </label>
                                    <input type="file" id="file" style={{ display: "none" }} />
                                </div> */}  
                                <button className="userUpdateButton">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="error">
                <Sidebar />
                <div className="content">Vous n'avez pas les droits requis.</div>
            </div>
        )
    }
}
