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
	render(){
		return(
			<div>
				Initial test
			</div>
			)
	}
}

export default IQ