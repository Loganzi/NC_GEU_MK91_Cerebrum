import React from 'react';
import { Link } from 'react-router-dom';

import { userService } from '../_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            users: []
        };
    }
    
    componentDidMount() {
        this.setState({ 
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { user, users } = this.state;
        return (
          <div className="row">
                <h4>Greetings Dr {user.firstName}!</h4>
                
                <div class="col s12 m6">
                <div class="card light-blue lighten-4">
                    <div class="card-content black-text">
                     <span class="card-title">Active Symptoms:</span>
                     <div class="collection">
                        <a href="#!" class="collection-item"><span class="new badge red">15</span>A Symptom</a>
                        <a href="#!" class="collection-item"><span class="new badge">4</span>B Symptom</a>
                        <a href="#!" class="collection-item">C Symptom</a>
                        <a href="#!" class="collection-item">D Symptom</a>
                     </div>
                        {users.loading && <em>Loading ...</em>}
                    </div>
                </div>
                </div>
                <div class="col s12 m6">
                <div class="card light-blue lighten-4">
                    <div class="card-content black-text">
                     <span class="card-title">Regular Patients:</span>
                     <div class="collection">
                        <a href="#!" class="collection-item">Patient A</a>
                        <a href="#!" class="collection-item"><span class="new badge"> </span>Patient B</a>
                        <a href="#!" class="collection-item">Patient C</a>
                        <a href="#!" class="collection-item">Patient D</a>
                     </div>
                        {users.loading && <em>Loading ...</em>}
                    </div>
                </div>
                </div>
                <div class="col s12 m6">
                <div class="card light-blue lighten-4">
                    <div class="card-content black-text">
                     <span class="card-title">Telemedicine Schedule:</span>
                     <div class="collection">
                        <a href="#!" class="collection-item"><span class="new badge orange darken-3 ">13:30</span>Patient 1</a>
                        <a href="#!" class="collection-item"><span class="new badge orange darken-3 ">14:30</span>Patient 2</a>
                     </div>
                        {users.loading && <em>Loading ...</em>}
                    </div>
                </div>
                </div>
                <div class="col s12 m6">
                <div class="card light-blue lighten-4">
                    <div class="card-content black-text">
                     <span class="card-title">Requested Pharma:</span>
                     <div class="collection">
                        <a href="#!" class="collection-item"><span class="new badge brown lighten-2">Avail!</span>PMed 1</a>
                        <a href="#!" class="collection-item"><span class="new badge brown lighten-2">N/A</span>PMed 2</a>
                        <a href="#!" class="collection-item"><span class="new badge brown lighten-2">Avail</span>PMed 3</a>
                     </div>
                        {users.loading && <em>Loading ...</em>}
                    </div>
                </div>
                </div>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

export { HomePage };
