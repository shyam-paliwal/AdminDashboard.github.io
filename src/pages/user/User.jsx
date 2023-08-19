import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import "./user.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"


export const User = () => {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
               <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://assets.leetcode.com/users/avatars/avatar_1684156727.png" 
                    alt="" 
                    className="userShowImg"
                    />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Becker</span>
                        <span className="userShowUserTItle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+1 123 456 67</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">annabeck99@gmaial.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label htmlFor="">Username</label>
                            <input 
                            type="text"
                            placeholder="annabeck99"
                            className="userUpdateInput"
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Fullname</label>
                            <input 
                            type="text"
                            placeholder="Anna Becker"
                            className="userUpdateInput"
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Email</label>
                            <input 
                            type="text"
                            placeholder="annabeck99@gmail.com"
                            className="userUpdateInput"
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Phone</label>
                            <input 
                            type="text"
                            placeholder="+1 123 456 67"
                            className="userUpdateInput"
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label htmlFor="">Address</label>
                            <input 
                            type="text"
                            placeholder="New York | USA"
                            className="userUpdateInput"
                            />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img className="userUpdateImg" src="https://assets.leetcode.com/users/avatars/avatar_1684156727.png" 
                            alt="" />
                            <label htmlFor="file">
                                <Publish className="userUpdateIcon"/>
                            </label>
                            <input type="file" id="file" style={{display: "none"}} />
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
