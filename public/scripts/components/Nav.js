import React from 'react';
import {Link, browserHistory} from 'react-router';
import Rayon from 'rayon';
import $ from 'jquery';
import user from './../models/UserModel';

//import Submission from './../collections/SubmissionCollection';

export default React.createClass({
		getInitialState: function() {
        	return {
            	errors: {},
            	user: user,
            	loginModalVisible: false,
            	registerModalVisible: false
        	};
    	},
    	componentDidMount: function() {
	    		this.state.user.on('change', ()=>{
				this.setState({
					user: user
				});
			});	
    	},
    	componentWillUnmount:function(){
    		this.state.user.off('change');
    	},
		render: function(){
			if(this.state.user.get('id')){
				return (
					<nav>
						<div className = 'nav-logo' > 
							<Link to="/App"><img src="../../images/talentShow.jpg" /></Link>
						</div>
						<Link className="nav-link" to="/Submission">Talent Submission</Link>
						<Link className="nav-link" to="/SubmissionList">Schools</Link>
						<Link className="nav-link" to="/SubmissionDetails">Details</Link>
						<Link className="nav-link" to="/TalentRead">Talent</Link>
						<div className="nav-reg-link-container">
							<span className="nav-link">{this.state.user.get('firstName')}</span>
							<a href = '#' className="nav-link" onClick={this.logout}>Logout</a>	
						</div>
					</nav>);
			} else {
				return (
					<nav>
						<div className = 'nav-logo'>
							<Link to="/"><img src="../../images/talentShow.jpg" /></Link>	
						</div>
						<div className="nav-reg-link-container">	
							<a href ='#' className="nav-link" onClick={this.loginOpenModal}>Login</a>
							<Rayon isOpen={this.state.loginModalVisible} onClose={this.closeModal}>
			                    <form onSubmit={this.login} className="login-box"> <h1>Login</h1>
									<input className="u-full-width" type="text" placeholder="email" ref='email' title="Should be a valid email address" required="required"/>
									<div className="error">{this.state.errors.email ? this.state.errors.email.message : null} </div> 
									<input className="u-full-width" type="password" placeholder="password" ref='password' title="Password is required and cannot left blank" required="required"/>
									<div className="error">{this.state.errors.password ? this.state.errors.password.message : null}</div>
									<button className="button-primary" type='submit'> Login </button>
			                        <button onClick={this.closeModal}>Close</button>								
								</form>
			                </Rayon>
						</div>
						<div className="nav-reg-link-container">
							<a href = '#' className="nav-link" onClick={this.registerOpenModal}>{this.props.registerModalVisible}Register</a>
							<Rayon isOpen={this.state.registerModalVisible} onClose={this.closeModal}>
								<form onSubmit={this.register} className = 'register'>
				                    <label>First Name</label>
									<input type = 'text' ref = 'firstName'></input>
									<label>Last Name</label>
									<input type = 'text' ref = 'lastName'></input>
									<label>Email</label>
									<input type = 'email' ref = 'email'></input>
									<label>Password</label>
									<input type = 'password' ref = 'password'></input>
									<button type = "submit">Submit User</button>
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
        	closeModal();
    	},
    	loginOpenModal: function() {
        	this.setState({
           	loginModalVisible: true
        });
        	closeModal();
   		 },
    	closeModal: function() {
        	this.setState({
            registerModalVisible: false,
            loginModalVisible: false
        });
    	},
		logout: function(e) {
    		e.preventDefault();
    		this.state.user.clear();
    		$.ajax({
    			type: 'POST',
    			url: '/auth/logout'
    		});
    	 	browserHistory.push('/App');
    	},
    	login: function(e) {
			console.log('login');
			e.preventDefault();
			$.ajax({
			url: '/auth/login',
			type: 'POST',
			data: {
				email: this.refs.email.value,
				password: this.refs.password.value
				},

			success: (loggedArg) => {
					console.log('success');
				
				this.state.user.set(loggedArg);
				browserHistory.push('/App');
				this.closeModal();
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
                lastname: this.refs.lastName.value
            },
            success: (regUser)=>{
                this.state.user.set(regUser);                           
                hashHistory.push('/App');
            },
            error: (err)=>{
                this.setState({errors: err.responseJSON});
            }
        });
    }
});



