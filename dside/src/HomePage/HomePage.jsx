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
            <div className="col-md-6 col-md-offset-3">
                <h4>Greetings Dr {user.firstName}!</h4>
                <p>Active Symptoms to be looked :</p>
                {users.loading && <em>Loading ...</em>}
                {users.length &&
                    <ul>
                        {users.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName}
                            </li>
                        )}
                    </ul>
                }
                <p>Regular Patients to be looked into:</p>
                {users.loading && <em>Loading Patients...</em>}
                {users.length &&
                    <ul>
                        {users.map((user, index) =>
                            <li key={user.id}><Link to ="/form-style-1.html">
                                {user.firstName + ' ' + user.lastName}</Link>
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

export { HomePage };