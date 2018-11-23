import React from 'react';
import SideBar from '../components/common/sidebar';

const Dashboard = () => (

    <div class="main-wrapper">


        <div class="breadcrumb-wrapper">

            <div class="container">

                <ol class="breadcrumb-list booking-step">
                    <li><a href="">All Employers</a></li>
                    <li><span>Expedia</span></li>
                </ol>

            </div>

        </div>


        <div class="admin-container-wrapper">

            <div class="container">

                <div class="GridLex-gap-15-wrappper">

                    <div class="GridLex-grid-noGutter-equalHeight">

                        <SideBar />

                        <div class="col-sm-8 col-md-8">

                            <div class="company-detail-wrapper">

                                <div class="company-detail-wrapper">

                                    <div className="job-detail-header bb mb-30">

                                        <h2 className="heading mb-15">Dashboard</h2>

                                        <div className="meta-div clearfix mb-25">
                                            <span className="job-label label label-success">
                                                <a data-toggle="modal" href="#departmentCreateModal" style={{ color: "#fff" }}>Create Department</a>
                                            </span>

                                        </div>

                                    </div>

                                    <div class="admin-empty-dashboard">

                                        <div class="icon">
                                            <i class="ion-ios-book-outline"></i>
                                        </div>

                                        <h4>You have no any activities yet!</h4>

                                        <a href="#" class="btn btn-primary" style={{ marginRight: 5 }}>Create Resume</a>
                                        <a href="#" class="btn btn-primary" style={{ marginRight: 5 }}>Create Alert</a>
                                        <a href="#" class="btn btn-primary">Browse Jobs</a>

                                    </div>

                                </div>


                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </div>

    </div>
)

export default Dashboard