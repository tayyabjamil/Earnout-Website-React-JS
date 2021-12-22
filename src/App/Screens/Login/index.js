import React from "react";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { withRouter } from 'react-router-dom';

import Validations from "../../Helper/Validations";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        username: '',
        password: ''
      }
    }
  }

  validateForm() {
    const isEmailValid = Validations.checkEmail(this.state.form.email)
    const isUsernameValid = Validations.checkRequired(this.state.form.username)
    const isPasswordValid = Validations.checkRequired(this.state.form.password)

    if (isEmailValid === false) {
      alert("Invalid Email")
      return false

    } else if (isUsernameValid === false) {
      alert("Invalid Email")
      return false

    } else if (isPasswordValid === false) {
      alert("Invalid Email")
      return false

    }
    if (isEmailValid === true && isUsernameValid === true && isPasswordValid === true) {
      this.Login()
      return true
    }
  }
  Login() {

    this.props.history.push('/home');

  }
  handleChange(event) {
    let fieldName = event.target.name;
    let fleldVal = event.target.value;
    this.setState({ form: { ...this.state.form, [fieldName]: fleldVal } })
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <Row >
          <Col lg={4} ></Col>
          <Col lg={4} >
            <Row style={styles.cardView}></Row>
            <Row style={styles.card}>
              <Form style={{ backgroundColor: 'white', padding: 0 }}>
                <div style={styles.flexSpaceCol}>
                  <h5 style={{ textAlign: 'center', color: '#8b9dee', fontSize: 16 }}>Login</h5>
                  <h6 style={{ textAlign: 'center', color: '#999999', fontSize: 14 }}>Get your free Minible account now</h6>

                  <Form.Group style={{ marginBottom: 20 }} controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: 14 }}>Email</Form.Label>
                    <Form.Control
                      onChange={this.handleChange.bind(this)}

                      name={'email'}

                      style={styles.font12} type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group style={{ marginBottom: 20 }} controlId="formBasicUsername">
                    <Form.Label style={{ fontSize: 14 }}>UserName</Form.Label>
                    <Form.Control
                      name={'username'}
                      onChange={this.handleChange.bind(this)}

                      style={styles.font12} placeholder="Enter username" />
                  </Form.Group>

                  <Form.Group style={{ marginBottom: 20 }} controlId="formBasicPassword">
                    <Form.Label style={{ fontSize: 14 }}>Password</Form.Label>
                    <Form.Control
                      onChange={this.handleChange.bind(this)}
                      name={'password'}

                      style={styles.font12} type="password" placeholder="Enter password" />
                  </Form.Group>
                  <Form.Group style={{ marginBottom: 20 }} controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I accept Terms and Conditions" style={styles.font12} />
                  </Form.Group>
                  <div onClick={()=>this.validateForm()}
                    style={styles.loginBtn} type="submit">
                    Login
                  </div>
                  <div class="btn" onClick={() => this.props.history.push('/signUp')}
                    style={{ textAlign: 'center', color: '#8b9dee', fontSize: 14, marginTop: 10, }}>
                    <span > Create an Account ? Sign Up</span>
                  </div>
                </div>
                 <div style={styles.bottomView}>
                  <img src={require('../../assets/Google.png')} />

                  <img src={require('../../assets/FB.png')} />
                  <img src={require('../../assets/Apple.png')} />
                  <img src={require('../../assets/Microsoft.png')} />
                </div>
              </Form>
            </Row>
            <Row style={styles.cardView}></Row>

          </Col>
          <Col lg={4} ></Col>
        </Row>

      </div>

    );
  }
}
export default withRouter(Login)
const styles = {
  wrapper: {
    height: '100%', width: '100%', overflow: 'hidden', backgroundColor: '#22114f'
  },
  cardView: {
    backgroundColor: '#241856', height: 100
  },
  card: {
    backgroundColor: '#22114f', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  flexSpaceCol: {
    padding: '5%', display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'space-between',
  },
  font12: {
    fontSize: 12

  },
  loginBtn: {
    backgroundColor: '#0397ff', color: 'white', borderTopRightRadius: 12, borderBottomLeftRadius: 12, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  bottomView: {
    height: 100, paddingLeft: '10%', paddingRight: '10%', backgroundColor: '#f2f2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-between'
  }
}