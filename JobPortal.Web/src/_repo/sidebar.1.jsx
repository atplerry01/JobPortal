import React from 'react';
import { NavLink } from "react-router-dom";

const SideBar = () => (

    <div class="admin-sidebar">

        <div class="admin-user-item">

            <div class="image">
                <img src="assets/images/avatar.png" alt="image" class="img-circle" />
            </div>

            <h4>Akinsanya Olanrewaju</h4>
            <p class="user-role">Professional</p>

        </div>


        <ul class="admin-user-menu clearfix">
            <li>
                <a href="#"><i class="fa fa-tachometer"></i> Dashboard</a>
            </li>
            <li>
                <a href="#"><i class="fa fa-user"></i> Profile</a>
            </li>
            <li>
                <a href="#"><i class="fa fa-key"></i> Change Password</a>
            </li>
            <li>
                <a href="#"><i class="fa fa-bell"></i> My Alert</a>
            </li>
            <li>
                <a href="#"><i class="fa fa-bookmark"></i> Saved Jobs</a>
            </li>
            <li>
                <a href="#"><i class="fa fa-pencil"></i> Resume Lists</a>
            </li>
            <li>
                <a href="#"><i class="fa fa-sign-out"></i> Logout</a>
            </li>
        </ul>

    </div>

)

export default SideBar