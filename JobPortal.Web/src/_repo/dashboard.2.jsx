import React from 'react';
import SideBar from '../components/common/sidebar';

const Dashboard = () => (

    <div class="admin-container-wrapper">

        <div class="container">

            <div class="GridLex-gap-15-wrappper">

                <div class="GridLex-grid-noGutter-equalHeight">

                    <div class="GridLex-col-3_sm-4_xs-12">
                        <SideBar></SideBar>
                    </div>

                    <div class="GridLex-col-9_sm-8_xs-12">

                        <div class="admin-content-wrapper">
                        
                            <h2 className="heading mb-15">Dashboard</h2>


                            <div class="admin-empty-dashboard">

                                <div class="icon">
                                    <i class="ion-ios-book-outline"></i>
                                </div>

                                <h4>You have no any activities yet!</h4>

                                <a href="#" class="btn btn-primary" style={{marginRight: 5}}>Create Resume</a>
                                <a href="#" class="btn btn-primary" style={{marginRight: 5}}>Create Alert</a>
                                <a href="#" class="btn btn-primary">Browse Jobs</a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>


)

export default Dashboard