import React from 'react';
import {Link, browserHistory} from 'react-router';
import Rayon from 'rayon';
import $ from 'jquery';
import user from './../models/UserModel';
import schoolCollection from './../collections/SchoolCollection';
//import school from './../models/SchoolModel';


export default React.createClass({
		getInitialState: function() {
        	return {
            	errors: {},
            	user: user,
            	loginModalVisible: false,
            	registerModalVisible: false,
            	school: schoolCollection,
            	userType: ''
        	};
    	},
    	componentDidMount: function() {
	    	this.state.user.on('update', ()=>{
				this.setState({
					user: user
				});
			});	
    	},
    	//componentWillUnmount:function(){
    	// 	this.state.user.off('update');
    	// },
		render: function(){
			if(this.state.user.get('userType') === 'school'){
				return (
					<nav>
						<div className = 'nav-logo' > 
							<Link to="/" className = 'logo'>Talent Show</Link>
						</div>
						
						<Link className="nav-link" to="/SubmissionList">{this.state.user.get('school').schoolName}</Link>
						
						<div className="nav-reg-link-container">
							<span className="nav-link">{this.state.user.get('firstName')}</span>
							<a href = '#' className="nav-link" onClick={this.logout}>Logout</a>	
						</div>
					</nav>);
			} else if (this.state.user.get('userType') === 'talent') {
				return (
					<nav>
						<div className = 'nav-logo' > 
							<Link to="/" className = 'logo'>Talent Show</Link>
						</div>
						<Link className="nav-link" to="/TalentRead">Your Submissions</Link>	
						<Link className="nav-link" to="/Submission">Create a Submission</Link>
						<div className="nav-reg-link-container">
							<span className="nav-link">{this.state.user.get('firstName')}</span>
							<a href = '#' className="nav-link" onClick={this.logout}>Logout</a>	
						</div>
					</nav>);
			} else {
				return (	
					<nav>
						<div className = 'nav-logo'>
							<Link to="/" className = 'logo'>Talent Show</Link>	
						</div>

						<div className="nav-reg-link-container">	
							<a href ='#' className="nav-link" onClick={this.loginOpenModal}>Login</a>
							<Rayon isOpen={this.state.loginModalVisible} onClose={this.closeModal}>
			                    <form onSubmit={this.login} className="login-box"> 
									<div className = 'form-wrapper'>
										<h1 className= 'logReg'>Login</h1>
										<input className="u-full-width log-email" type="text" placeholder="email" ref='email' title="Should be a valid email address" required="required"/>
										<div className="error">{this.state.errors.email ? this.state.errors.email.message : null} </div> 
										<input className="u-full-width log-password" type="password" placeholder="password" ref='password' title="Password is required and cannot left blank" required="required"/>
										<div className="error">{this.state.errors.password ? this.state.errors.password.message : null}</div>
										<div className= 'logregButtonContainer'>
											<button className="buttonPrimary" type='submit'> Login </button>
				                        	<button className = 'navLoginClose'onClick={this.closeModal}>Close</button>								
										</div>
									</div>
								</form>
			                </Rayon>
						</div>
						<div className="nav-reg-link-container">
							<a href = '#' className="nav-link" onClick={this.registerOpenModal}>{this.props.registerModalVisible}Register</a>
							<Rayon isOpen={this.state.registerModalVisible} onClose={this.closeModal}>
								<form  className = 'register'> 
									<div className="form-wrapper">
										<h1 className= 'logReg'>Register</h1>
					                    <label>First Name</label>
										<input type = 'text' ref = 'firstName' placeholder = 'First Name'></input>
										<label>Last Name</label>
										<input type = 'text' ref = 'lastName' placeholder = 'Last Name'></input>
										<label>Email</label>
										<input type = 'email' ref = 'email' placeholder = 'Email Address'></input>
										<label>Password</label>
										<input type = 'password' ref = 'password' placeholder = 'Password'></input>
										<label>School Information</label>
										
										<div className= 'schoolRegContainer' style={{display: 'none'}}>
											<input type='text' ref = 'schoolName' placeholder = 'School Name'></input>
											<input type='text' ref = 'address' placeholder ='State'></input>
										</div>
										<div className= 'logregButtonContainer'>
											<div>
											<button  type = 'button' className = 'showSchool' onClick = {this.showSchool}>Register as a School</button>
											</div>
											<button onClick={this.register} type = "submit" className="buttonPrimary">Submit</button>
											<button onClick={this.closeModal}>Close</button>
										</div>
									</div>
            					</form>	
            				</Rayon>	
						</div>
					</nav>);
			}
		},
		registerOpenModal: function() {
        	this.setState({
           	registerModalVisible: true
        });
    	},
    	loginOpenModal: function() {
        	this.setState({
           	loginModalVisible: true
        });
   		 },
    	closeModal: function() {
        	this.setState({
            registerModalVisible: false,
            loginModalVisible: false
        });
    	},
    	showSchool: function(){
    		$('.schoolRegContainer').css('display', 'block');
    		this.setState({userType: 'school'});
    		$('.showSchool').css('display', 'none');
    	},
		logout: function(e) {
    		e.preventDefault();
    		this.state.user.clear();
    		$.ajax({
    			type: 'POST',
    			url: '/auth/logout'
    		});
    	 	browserHistory.push('/');
    	},
    	login: function(e) {
			e.preventDefault();
			$.ajax({
			url: '/auth/login',
			type: 'POST',
			data: {
				email: this.refs.email.value,
				password: this.refs.password.value
			},
			success: (loggedArg) => {
				 if (loggedArg.userType === 'talent'){
					this.state.user.set(loggedArg);
					this.closeModal();
					browserHistory.push('/TalentRead');
					
				} else {
					this.state.user.set(loggedArg);
					this.state.school.fetch({
						data: {
							withRelated: ['user'],
							where: {userId: this.state.user.get('id')}
						},
						success: (school) => {	
							this.state.user.set('school', school.at(0).toJSON());
							this.closeModal();
							browserHistory.push('/SubmissionList');	 
						}
					});
				}
				
			},
			error: (errorArg) => {
					console.log('error');

					this.setState({errors: errorArg.responseJSON});
					}	
			});
		},
		register: function(e){
	      	e.preventDefault();
        	$.ajax({
            url: '/auth/register', 
            type: 'POST',
            headers: {
                Accept: 'application/json'
            },
            data: {
                email: this.refs.email.value,
                password: this.refs.password.value,
                firstName: this.refs.firstName.value,
                lastName: this.refs.lastName.value,
                userType: this.state.userType || 'talent'
            },
         	success: (user) => {
         			if(this.state.userType !== 'school') {
         				this.state.user.set(user);
         				browserHistory.push('/Submission');
         			} else {
         				this.state.school.create(
		    			{
		    				schoolName: this.refs.schoolName.value,
		    				address: this.refs.address.value,
		    				userId: user.id
		    			},
						{
			            success: (school)=>{
			                this.state.user.set(user); 
			                this.state.user.set('school', school);  
			                this.closeModal();                        
			                browserHistory.push('/SubmissionList');
			                

			            	}
			            });
         			}
	    	
		    },
            error: (err)=>{
                this.setState({errors: err.responseJSON});
            }
        });
    }
});



