import React from 'react';

import Login from './login/login.js';

class pageLoader extends React.Component {
	
	constructor(props){
		super(props);

		this.state = {
			page : 'login'
		}
	}

	returnPageView = () => {
		let pageview;
		console.log('this.state.page', this.state.page);
		switch(this.state.page){
			case 'login':
				pageview = <Login />
				break;
			default : 
				pageview = <Login />
				break;
		}

		return pageview;
	}


	render(){
		let page = this.returnPageView();

		return(
			<div className="dungeon-run-game">
				{page}
			</div>
		)
	}
}

export default pageLoader;