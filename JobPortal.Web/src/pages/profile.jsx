import React, { Component } from 'react';
import axios from "axios";
import Dropzone from 'react-dropzone';
import jwtDecode from "jwt-decode";

import SelectInput from "../components/common/SelectInput";
import { lookupDropDown } from "../_selector/selectors";
import { myConfig } from "../app/config";

import SideBar from '../components/common/sidebar';

class Profile extends Component {

	constructor(props, context) {
		super(props, context);

		const ls = localStorage.getItem("wss.auth");
		const jwtToken = JSON.parse(ls);
		var access_token = jwtDecode(jwtToken.access_token);

		this.state = {
			userId: access_token.nameid,
			biodata: "",
			firstName: "",
			lastName: "",
			middleName: "",
			phoneNumber: "",
			addressLine1: "",
			countryId: "",
			cityId: "",
			genderId: "",

			resumeDocumentId: '',
			coverDocumentId: '',

			userDocument: "",

			profile: "",
			genders: [],
			countries: [],
			states: [],
			cities: [],

			resumeUpload: '',
			coverUpload: '',

			uploadedResumeFile: null,
			uploadedResumeFileUrl: '',
			uploadedCoverFile: null,
			uploadedCoverFileUrl: '',

			docUploading: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleProfileRegister = this.handleProfileRegister.bind(this);
		this.handleBioData = this.handleBioData.bind(this);
	}


	onResumeImageDrop(files) {
		this.setState({
			uploadedResumeFile: files[0]
		});
	}

	onCoverImageDrop(files) {
		this.setState({
			uploadedCoverFile: files[0]
		});
	}

	onHandleClick = (e, resumeFile, coverFile) => {

		this.setState({docUploading: true});

		e.preventDefault();

		if (resumeFile) {
			const resumeFormData = new FormData();
			resumeFormData.append('file', resumeFile)
			const resumeConfig = {
				headers: {
					'content-type': 'multipart/form-data'
				},
				acceptedFiles: "image/jpeg,image/png",
			}
	
			this.postResumeFileUpload(resumeFormData, resumeConfig);
		}

		// if (coverFile) {
		// 	const coverFormData = new FormData();
		// 	coverFormData.append('file', coverFile)
		// 	const converConfig = {
		// 		headers: {
		// 			'content-type': 'multipart/form-data'
		// 		},
		// 		acceptedFiles: "image/jpeg,image/png",
		// 	}
	
		// 	this.postResumeFileUpload(coverFormData, converConfig);
		// }

	}

	componentDidMount() {
		const { userId } = this.state;
		this.getUserProfile(userId);
		this.getUserDocument(userId);
		this.getProfileBioData(userId);

		this.getGender();
		this.getContries();

	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });

		if (name === 'countryId' && value) this.getStateByCountryId(value);
		if (name === 'stateId' && value) this.getCityByStateId(value);
	}

	handleBioData(e) {
		e.preventDefault();

		const { userId, biodata } = this.state;
		var model = {
			userId, biodata
		}

		this.postProfileBioData(model);

	}

	handleProfileRegister(e) {
		e.preventDefault();
		const { userId, firstName, lastName, middleName, phoneNumber, gender, addressLine1, country, state, city } = this.state;

		var entityModel = {
			userId, firstName, lastName, middleName, phoneNumber, genderId: 1, cityId: 1, addressLine1, country, state, city
		};

		this.postUserProfile(entityModel);
	}


	render() {

		const { profileInfo, profileBiodata, biodata, userDocument, phoneNumber, genderId, countryId, stateId, cityId, addressLine1, firstName, lastName, middleName, countries, states, cities, genders } = this.state;

		const newGenders = lookupDropDown(genders);
		const newCountries = lookupDropDown(countries);
		const newStates = lookupDropDown(states);
		const newCities = lookupDropDown(cities);
		let resumeTextValue;

		if (userDocument) {
			resumeTextValue = "Document Uploaded"
		} else {
			resumeTextValue = <span style={{ fontSize: 10 }}>No Document Uploaded</span>
		}

		const profileHtml = () => {

			if (profileInfo) {
				return (<div>
					<p>Name: <span className="font600 text-primary">{profileInfo.firstName} {profileInfo.lastName}</span></p>
					{/* <p>Age: <span className="font600 text-primary">{profileInfo.dateOfBirth}</span></p> */}
					<p>Address: <span className="font600 text-primary">{profileInfo.addressLine1}</span></p>
					<p>City: <span className="font600 text-primary">{profileInfo.city.name} {profileInfo.city.state.name}, {profileInfo.city.state.country.name}</span></p>
				</div>)
			}
		}

		const biodataHtml = () => {
			if (profileBiodata) {
				return (<span>{profileBiodata.bioData}</span>)
			}
		}

		const dropGenders = () => {
			if (newGenders) {
				return (
					<SelectInput
						name="genderId"
						label=" Gender"
						value={genderId}
						onChange={this.handleChange}
						defaultOption="Select Gender"
						options={newGenders}
					/>
				);
			}
		};

		const dropCountries = () => {
			if (newCountries) {
				return (
					<SelectInput
						name="countryId"
						label=" Country"
						value={countryId}
						onChange={this.handleChange}
						defaultOption="Select Country"
						options={newCountries}
					/>
				);
			}
		};

		const dropStates = () => {
			if (newStates) {
				return (
					<SelectInput
						name="stateId"
						label=" State/ Province"
						value={stateId}
						onChange={this.handleChange}
						defaultOption="Select State"
						options={newStates}
					/>
				);
			}
		};

		const dropCities = () => {
			if (newCountries) {
				return (
					<SelectInput
						name="cityId"
						label=" City"
						value={cityId}
						onChange={this.handleChange}
						defaultOption="Select City"
						options={newCities}
					/>
				);
			}
		};

		return (

			<div className="main-wrapper">

				<div className="breadcrumb-wrapper">

					<div className="container">

						<ol className="breadcrumb-list booking-step">
							<li><a href="">All Employers</a></li>
							<li><span>Expedia</span></li>
						</ol>

					</div>

				</div>

				<div className="admin-container-wrapper">

					<div className="container">

						<div className="GridLex-gap-15-wrappper">

							<div className="GridLex-grid-noGutter-equalHeight">

								<SideBar user={profileInfo} />

								<div className="col-sm-8 col-md-8">

									<div className="company-detail-wrapper">

										<h3>Candidate Profile</h3>

										<p>

											{biodataHtml()}

											<span><a data-toggle="modal" href="#biodataModal"> &nbsp;&nbsp; edit profile...<i className="fa fa-pencil" aria-hidden="true"></i></a></span>
										</p>

										<ul className="list-icon clearfix">

											<li>

												<div className="icon">

													<i className="flaticon-line-icon-set-user-1"></i>

												</div>

												<h5>My Document</h5>
												<p>Resume: <span className="font600 text-primary">{resumeTextValue}</span></p>
												{/* <p>Cover Page: <span className="font600 text-primary"> {resumeTextValue}</span></p> */}

												<div className="job-detail-header mb-20" style={{ paddingTop: 10 }}>
													<div className="meta-div clearfix mb-25">
														<span className="job-label label label-success">
															<a data-toggle="modal" href="#documentModal" style={{ color: "#fff" }}>Update Document</a>
														</span>
													</div>
												</div>

											</li>

											<li>
												<div className="icon">

													<i className="flaticon-line-icon-set-home"></i>

												</div>

												<h5>Profile Information</h5>

												{profileHtml()}

												<div className="job-detail-header mb-20" style={{ paddingTop: 10 }}>
													<div className="meta-div clearfix mb-25">
														<span className="job-label label label-success">
															<a data-toggle="modal" href="#ProfileModal" style={{ color: "#fff" }}>Update Profile</a>
														</span>
													</div>
												</div>

											</li>

										</ul>

									</div>


								</div>


							</div>

						</div>

					</div>

				</div>

				<div id="documentModal" className="modal fade login-box-wrapper" tabIndex="-1" data-width="550" data-style="display: none;" data-backdrop="static" data-keyboard="false" data-replace="true">

					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 className="modal-title text-center">Document Update</h4>
					</div>

					<div className="modal-body">
						<div className="row gap-20">

							<div style={{ paddingBottom: 10 }}>
								Accepted file types: Docs, PDF, CSV, Images, and Text
            </div>

							<div className="col-sm-6 col-md-6">

								<div className="FileUpload">
									<Dropzone
										onDrop={this.onResumeImageDrop.bind(this)}
										multiple={false}
									>
										<div><strong>Resume:</strong> Drop resume file or click to select a file to upload.</div>
									</Dropzone>
								</div>

								<div>

									{this.state.docUploading && 
									
									<div style={{color: 'red'}}>
										Please wait
										<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /> 
									</div> }
									
									{this.state.resumeUpload === '' ? null :
										<div>
											<p>{this.state.resumeUpload.fileName}</p>
											<img src={this.state.resumeUpload} alt="" />
										</div>}
								</div>

							</div>

							{/* <div className="col-sm-6 col-md-6">

								<div className="FileUpload">
									<Dropzone
										onDrop={this.onCoverImageDrop.bind(this)}
										multiple={false}
									>
										<div>Drop job file or click to select a file to upload.</div>
									</Dropzone>
								</div>


								<div>
									{this.state.coverUpload === '' ? null :
										<div>
											<p>{this.state.coverUpload.fileName}</p>
											<img src={this.state.coverUpload} alt="" />
										</div>}
								</div>

							</div> */}


						</div>
					</div>

					<div className="modal-footer text-center">
						<button type="button" className="btn btn-primary" onClick={(e) => this.onHandleClick(e, this.state.uploadedResumeFile, this.state.uploadedCoverFile)}>Update Document</button>
						<button id="hideDocumentModal" type="button" data-dismiss="modal" className="btn btn-primary btn-inverse">Close</button>
					</div>

				</div>

				<div id="ProfileModal" className="modal fade login-box-wrapper" tabIndex="-1" data-width="750" data-style="display: none;" data-backdrop="static" data-keyboard="false" data-replace="true">

					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 className="modal-title text-center">Profile Update</h4>
					</div>

					<div className="modal-body">
						<div className="row gap-20">

							<div className="col-sm-4 col-md-4">

								<div className="form-group">
									<label>First Name</label>
									<input value={firstName} onChange={this.handleChange} name="firstName" className="form-control" placeholder="" type="text" />
								</div>

								<div className="form-group">
									<label>Middle Name</label>
									<input value={middleName} onChange={this.handleChange} name="middleName" className="form-control" placeholder="" type="text" />
								</div>

								<div className="form-group">
									<label>Last Name</label>
									<input value={lastName} onChange={this.handleChange} name="lastName" className="form-control" placeholder="" type="text" />
								</div>

							</div>


							<div className="col-sm-4 col-md-4">

								<div className="form-group">
									<label>Phone Number</label>
									<input value={phoneNumber} onChange={this.handleChange} name="phoneNumber" className="form-control" placeholder="" type="text" />
								</div>

								<div className="form-group">
									{dropGenders()}
								</div>

								<div className="form-group">
									<label>Address Line 1</label>
									<input value={addressLine1} onChange={this.handleChange} name="addressLine1" className="form-control" placeholder="" type="text" />
								</div>

							</div>


							<div className="col-sm-4 col-md-4">

								<div className="form-group">
									{dropCountries()}
								</div>

								<div className="form-group">
									{dropStates()}
								</div>

								<div className="form-group">
									{dropCities()}
								</div>

							</div>



						</div>
					</div>

					<div className="modal-footer text-center">
						<button type="button" className="btn btn-primary" onClick={this.handleProfileRegister}>Update Document</button>
						<button id="hideProfilemodal" type="button" data-dismiss="modal" className="btn btn-primary btn-inverse">Close</button>
					</div>

				</div>

				<div id="biodataModal" className="modal fade login-box-wrapper" tabIndex="-1" data-width="750" data-style="display: none;" data-backdrop="static" data-keyboard="false" data-replace="true">

					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 className="modal-title text-center">Biodata Update</h4>
					</div>

					<div className="modal-body">
						<div className="row gap-20">

							<div className="col-sm-12 col-md-12">

								<div className="form-group">
									<label>Short Description</label>
									<textarea value={biodata} onChange={this.handleChange} name="biodata" className="form-control" placeholder="" type="text" />
								</div>

							</div>



						</div>
					</div>

					<div className="modal-footer text-center">
						<button type="button" className="btn btn-primary" onClick={this.handleBioData}>Update Document</button>
						<button id="hideBioDataModal" type="button" data-dismiss="modal" className="btn btn-primary btn-inverse">Close</button>
					</div>

				</div>


			</div>


		);
	}


	// getuser profile
	getUserProfile(userId) {
		axios
			.get(myConfig.apiUrl + "/api/resume/profile/" + userId)
			.then(response => {
				this.setState({ profileInfo: response.data });
			})
			.catch(function (error) {
			});
	}

	getProfileBioData(userId) {
		axios
			.get(myConfig.apiUrl + "/api/resume/profile/biodata/" + userId)
			.then(response => {
				this.setState({ profileBiodata: response.data });
			})
			.catch(function (error) {
			});
	}


	getUserDocument(userId) {
		axios.get(myConfig.apiUrl + "/api/resume/document/" + userId)
			.then(response => {
				this.setState({ userDocument: response.data });
			}).catch(function (error) {
			});
	}

	postUserProfile(model) {
		return axios.post(myConfig.apiUrl + "/api/resume/profile", model).then(response => {
			this.getUserProfile(model.userId);
			document.getElementById("hideProfilemodal").click();
		})
	}

	postProfileBioData(model) {
		return axios.post(myConfig.apiUrl + "/api/resume/profile/biodata", model).then(response => {
			this.getProfileBioData(model.userId);
			document.getElementById("hideBioDataModal").click();
		})
	}

	// Gender
	getGender() {
		axios.get(myConfig.apiUrl + "/api/lookups/gender")
			.then(response => {
				this.setState({ genders: response.data });
			})
	}

	getContries() { axios.get(myConfig.apiUrl + "/api/lookups/country").then(response => { this.setState({ countries: response.data }); }) }
	getStateByCountryId(entityId) {
		axios
			.get(myConfig.apiUrl + "/api/lookups/states/" + entityId)
			.then(response => {
				this.setState({ states: response.data });
			})
			.catch(function (error) { });
	}
	getCityByStateId(entityId) {
		axios
			.get(myConfig.apiUrl + "/api/lookups/cities/" + entityId)
			.then(response => {
				this.setState({ cities: response.data });
			})
			.catch(function (error) { });
	}

	postResumeFileUpload(model, config) {
		return axios.post(myConfig.apiUrl + "/api/document-upload", model, config).then(response => {
			this.setState({
				resumeUpload: response.data
			});

			var modelEntity = {
				name: response.data.fileName,
				filePath: "",
				fileOwnerId: this.state.userId,
				category: 1
			};

			this.postDocumentUploadUpdate(modelEntity, 1);
		})
	}

	postCoverFileUpload(model, config) {
		return axios.post(myConfig.apiUrl + "/api/document-upload", model, config).then(response => {
			this.setState({
				coverUpload: response.data
			});

			var modelEntity = {
				name: response.data.fileName,
				filePath: "",
				fileOwnerId: this.state.userId,
				category: 2
			};

			this.postDocumentUploadUpdate(modelEntity, 2);
		})
	}

	// documentUploadFile
	postDocumentUploadUpdate(model, category) {
		return axios.post(myConfig.apiUrl + "/api/document-upload/profile", model).then(response => {
			//toastr.success("Save Successful.", "Department Creation");
			//this.getDepartments();
			if (category === 1) {
				this.setState({
					resumeDocumentId: response.data.id
				});
			} else {
				this.setState({
					coverDocumentId: response.data.id
				})
			}

			///Todo
			this.setState({docUploading: false});
			document.getElementById("hideDocumentModal").click();
		})
	}

	postUserDocumentUpdate(model) {
		return axios.post(myConfig.apiUrl + "/api/document-upload/profile", model).then(response => {
			//toastr.success("Save Successful.", "Department Creation");
			//this.getDepartments();
		})
	}


}



export default Profile