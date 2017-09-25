import React, {Component} from 'react'
var firebase = require('firebase');
var uuid = require('uuid')

var config = {
	apiKey: "AIzaSyACHQm_73BMNs_dulJSwbuH5ghgyZLpCaU",
	authDomain: "iqmultiform.firebaseapp.com",
	databaseURL: "https://iqmultiform.firebaseio.com",
	projectId: "iqmultiform",
	storageBucket: "iqmultiform.appspot.com",
	messagingSenderId: "578556501121"
	};
firebase.initializeApp(config);

class IQ extends Component{
	userSubmit(event){
		var username = this.refs.name.value;
		this.setState({username: username})
	}

	constructor(props){
		super(props)

		this.state ={
			uid: uuid.v1(),
			username: '',
			answers: {
				ans1: '',
				ans2: '',
				ans3: '',
				ans4: '',
				ans5: '',
				ans6: ''
			},
			isSubmitted: false
		}

	this.userSubmit = this.userSubmit.bind(this)
	}
	render(){
		var username;
		var questions;

		if(this.state.username==='' && this.state.isSubmitted === false){
			username = <div>
				<h1>hello user please tell us your name</h1>
					<form onSubmit={this.userSubmit}>
						<input className="username" type="text" placeholder="enter your name" ref="name" />
					</form>
			</div>
			questions = ''
		} else if (this.state.username !== '' && this.state.isSubmitted === false )	{
			username = <h1> Welcome {this.state.username}</h1>
		}

		return(
			<div>
				Initial test
			</div>
			)
	}
}

export default IQ