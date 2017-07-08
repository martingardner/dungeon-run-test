import React from 'react';

import AppComp from '../components/App.js';

class App extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			message : 'React-Starter'
		}
	}

	render(){

		return (
			<AppComp message={this.state.message} />
		)
	}
} 

/*
for Redux usage
function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(App);
*/
export default App;