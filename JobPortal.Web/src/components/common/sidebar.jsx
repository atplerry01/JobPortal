import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";

class SideBar extends Component {
   
    render() {

        // const ls = localStorage.getItem("wss.auth");
        // const jwtToken = JSON.parse(ls);
        //const { firstName, lastName, email } = this.props.user;
      
      
		const userHtml = () => {
            
            
			if(this.props.user) {
                const {firstName, lastName, email } = this.props.user;

				return (<div>

                        <h4>{firstName} {lastName}</h4>
                        <p className="user-role">{email}</p>

                </div>)
			}
		}


        return (

            <div className="GridLex-col-3_sm-4_xs-12">

                <div className="admin-sidebar">

                    <div className="admin-user-item">

                        <div className="image">
                            <img src="assets/images/avatar.png" alt="image" className="img-circle" />
                        </div>

{userHtml()}
                    </div>


                    <ul className="admin-user-menu clearfix">
                        <li>
                            <NavLink to="/dashboard"><i className="fa fa-tachometer"></i> Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile"><i className="fa fa-user"></i> Manage Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/career-preference"><i className="fa fa-check-circle" aria-hidden="true"></i> Career Preference</NavLink>
                        </li>
                        <li>
                            <NavLink to="/alert"><i className="fa fa-bell"></i> My Alert</NavLink>
                        </li>
                        <li>
                            <NavLink to="/saved-jobs"><i className="fa fa-bookmark"></i> Saved Jobs</NavLink>
                        </li>
                        <li>
                            <NavLink to="#"><i className="fa fa-key"></i> Change Password</NavLink>
                        </li>

                        <li>
                            <NavLink to="#"><i className="fa fa-pencil"></i> Resume Lists</NavLink>
                        </li>
                        <li>
                            <NavLink to="#"><i className="fa fa-sign-out"></i> Logout</NavLink>
                        </li>
                    </ul>

                </div>

            </div>

        )
    }

}

export default SideBar