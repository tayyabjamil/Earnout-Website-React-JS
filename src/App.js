import logo from './logo.svg';
import './App.css';
import Login from './App/Screens/Login'
import Home from './App/Screens/Home'
import Signup from './App/Screens/SignUp'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { createBrowserHistory as history } from 'history';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router history={history}>
      <Switch >
        <Route path="/signUp">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Row style={styles.wrapper}>
           <Col lg={2} style={{
              backgroundColor: 'white',
              boxShadow: "3px 3px 3px #9E9E9E"

            }}>

              <div style={{ display: 'flex', height: 80, alignItems: 'center', flexDirection: 'colums', justifyContent: 'space-between' }}>
                <img src={require('./App/assets/whiteLogo.png')} style={{ height: 40, width: 140 }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: 5 }}>
                <div>
                  <p style={{ fontSize: 14, marginBottom: 0, paddingLeft: 5, color: '#22114f', fontWeight: 500 }}>Dashboard</p>
                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>  Map View</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: 5 }}>
                <div>
                  <p style={{ fontSize: 14, marginBottom: 0, paddingLeft: 5, color: '#22114f', fontWeight: 500 }}>Appointments</p>
                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>Today</p>
                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>Week</p>
                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>Month</p>

                </div>

              </div>
              <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: 5 }}>
                <div>
                  <p style={{ fontSize: 14, paddingLeft: 5, color: '#22114f', fontWeight: 500 }}>Contacts</p>

                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }} >My Contacts</p>
                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>Groups</p>

                </div>

              </div>
              <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: 5 }}>
                <p style={{ fontSize: 14, marginBottom: 10, paddingLeft: 5, color: '#22114f', fontWeight: 500 }}>Projects</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: 5 }}>
                <p style={{ fontSize: 14, paddingLeft: 5, marginBottom: 0, color: '#22114f', fontWeight: 500 }}>Service Agreements</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: 5 }}>
                <div>
                  <p style={{ fontSize: 14, marginBottom: 0, paddingLeft: 5, color: '#22114f', fontWeight: 500 }}>Invoices</p>

                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>Sent</p>
                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>Recieved</p>

                </div>

              </div>
              <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: 5 }}>
                <div>
                  <p style={{ fontSize: 14, paddingLeft: 5, marginBottom: 0, color: '#22114f', fontWeight: 500 }}>Services</p>

                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>Tasks</p>
                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>Reminders</p>
                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>Checklists</p>

                </div>

              </div>
              <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: 5 }}>
                <div>
                  <p style={{ fontSize: 14, paddingLeft: 5, marginBottom: 0, color: '#22114f', fontWeight: 500 }}>Reports</p>

                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>Timesheet</p>
                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>Referrals</p>
                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>Financials</p>
                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>Projects</p>


                </div>

              </div>
              <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: 5 }}>
                <p style={{ fontSize: 14, marginBottom: 0, paddingLeft: 5, color: '#22114f', fontWeight: 500 }}>Help Vedios</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: 5 }}>
                <div>
                  <p style={{ fontSize: 14, marginBottom: 0, paddingLeft: 5 }}>Settings</p>

                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>My Services</p>
                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>Account Profile</p>
                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>Wallet</p>
                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>Beacons</p>
                  <p style={{ color: 'lightgrey', marginBottom: 0, paddingLeft: 10, fontSize: 12 }}>Order Additional Beacons</p>

                </div>

              </div>

            </Col>
            
            <Col lg={10}>
              <Home />

            </Col>
          </Row>

        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const styles = {
  wrapper: {
   
     backgroundColor: '#f0f3f8'
  },

};
