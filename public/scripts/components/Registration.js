import React from 'react';
import Nav from './Nav';
import {hashHistory} from 'react-router';
import user from '../models/UserModel';
import $ from 'jquery';


const Register = React.createClass({
	getInitialState: function () {
		     return {
            errors:{},
            user: user
           
        };
	},
	render: function(){
		return (
			<div>
				<div className = "nav">
					<Nav/>
				</div>
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
			</div>
		);
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

export default Register;