import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'




const PatientLogin = ()=>{
	//const ProfilePage = ()=>{
	 //history.push('/Form')
//}



	return (
	<div className="mycard">
          <div className="card auth-card input-field">
            <h2>Patient Login</h2>
            <input
            type="text"
            placeholder="AADHAR CARD NUMBER "
            />            
            	    <h6>
                <Link to="/Home">Authenticate</Link>
            </h6>
            
    
        </div>
      </div>

	
	)

}



export default PatientLogin

