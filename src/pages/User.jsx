import {
  ArrowBack,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FillWidget } from "../component/Widgets";

/**
 * User page wich allow to create, modify and delete them
 * @param { object } user
 * @returns {Promise}
 */
export default function User({ user }) {
  if (user.role.toLowerCase() === "admin") {
    return (
      <div className="page user">
        <FillWidget size="80">
          <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/users">
              <ArrowBack/>
            </Link>
          </div>
          <div className="userContainer">
            <div className="userUpdate">
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
                  <button className="userUpdateButton">Update</button>
                </div>
              </form>
            </div>
          </div>
        </FillWidget>
      </div>
    );
  } else {
    return (
      <div className="page error">
        <div className="content">Vous n'avez pas les droits requis.</div>
      </div>
    );
  }
}
