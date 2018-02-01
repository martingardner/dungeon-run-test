import React from 'react';

class login extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			un : '',
			pw : '',
			error : ''
		}

	}

	updateVal = (param, val) => {
		this.setState({ [param] : val });
	}

	validateLogin = () => {
		if(this.state.un === 'admin' && this.state.pw === 'password'){
			this.setState({error : ''});
		} else {
			this.setState({error : 'Your user name and/or password are invalid'})
		}
	}

	render(){

		return(
			<div className="login-page">
				<h1>Login Page</h1>
				<form onSubmit={ (e)=> {e.preventDefault(); this.validateLogin()} }>
					<fieldset>
						<label>User Name</label>
						<input type="text" id="userName" value={this.state.un} onChange={ (e)=> this.updateVal('un', e.target.value)} />
					</fieldset>
					<fieldset>
						<label>Password</label>
						<input type="password" id="password" value={this.state.pw} onChange={ (e)=> this.updateVal('pw', e.target.value)} />
					</fieldset>
					<fieldset>
						<button id="loginSubmit">Submit</button>
						<span>{this.state.error}</span>
					</fieldset>
				</form>
			</div>
		)
	}
}

export default login;