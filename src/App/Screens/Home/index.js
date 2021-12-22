import React from "react";
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapView: false
    }
  }

  render() {
    return (
      <div style={styles.wrapper}>

        <div style={{ marginLeft: 5 }}>
          <Row style={{ backgroundColor: 'white' }}>
            <Col lg={8} style={styles.inputContainer}>
              {/* <p style={{ paddingTop: 10 }}>logo</p> */}
              <input style={styles.input} placeholder={'Search...'} />
            </Col>
            <Col lg={4} style={styles.flexSpace}>
              <p>logo</p>
              <p>logo</p>
              <p>logo</p>
              <p>logo</p>

            </Col>
          </Row>
        </div>

        <h6 style={{ marginLeft: 20, marginTop: 20 }}><strong>Dashboard</strong></h6>
        {/* {this.state.mapView === false && */}
        <div>
          <Row style={{ padding: 10 }}>
            <Col lg={9}>
              <div style={styles.flexSpace}>

                <div style={styles.box1}>
                  <p style={styles.font12Bold}>FINANCES TO DATE</p>
                  <div>
                    <p style={{ fontSize: 26, marginBottom: 0 }}>$88,254</p>
                    <p style={{ fontSize: 12, color: '#22114f' }}>TOTAL EARNING</p>

                  </div>

                </div>
                <div style={styles.box1}>
                  <div style={styles.flexSpace}>
                    <p style={styles.font12Bold}>INVOICES</p>
                    <p style={styles.font12Bold}>VIEW NOW</p>
                  </div>
                  <div style={styles.flexSpace}>
                    <div style={styles.innerBox}>
                      <div style={{ backgroundColor: 'rgb(154 152 175)', padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <p style={styles.p}>5</p>
                        <p style={styles.p}>DRAFTS</p>
                      </div>
                    </div>
                    <div style={styles.innerBox}>
                      <div style={{ backgroundColor: 'rgb(38 33 96)', padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <p style={styles.p}>5</p>
                        <p style={styles.p}>DRAFTS</p>
                      </div>
                    </div>
                    <div style={styles.innerBox}>
                      <div style={{ backgroundColor: 'rgb(237 61 91)', padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <p style={styles.p}>5</p>
                        <p style={styles.p}>DRAFTS</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={styles.box1}>
                  <p style={styles.font12Bold}>TODAY</p>
                  <p style={{ fontSize: 22, color: 'grey' }}>5 Appointments</p>
                  <p style={{ fontSize: 12, color: 'grey' }}>1/5 completed</p>

                </div>

              </div>
              <div style={{ backgroundColor: 'white', marginTop: 10, padding: 20 }}>
                <p style={styles.font12Bold}>WORK LOCATIONS</p>
                <img src={require('../../assets/map.png')} style={{ width: '100%' }} />

              </div>

            </Col>
            <Col lg={3}>
              <div >
                <div style={styles.box3}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#22114f' }}>UPCOMMING SCHEDULE</p>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <p>paragraph paragraph paragraph paragraph paragraph paragraph </p>
                    <p>paragraph paragraph paragraph paragraph paragraph paragraph </p>
                    <p>paragraph paragraph paragraph paragraph paragraph paragraph </p>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 15, marginTop: 10, borderRadius: 5, backgroundColor: '#22114f', height: 150 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>BUY A BEACON</p>
                  <div style={styles.viewButtonLg}>
                    View
                  </div>

                </div>
              </div>


            </Col>
          </Row>
          <div style={{ margin: 20, backgroundColor: 'white', borderRadius: 5, padding: 20 }}>
            <h5 style={styles.font14Blue}>LATEST INVOICES</h5>
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, backgroundColor: '#f0f3f8', height: 35, alignItems: 'center' }}>
              <Col> <p style={styles.pbold}> Order ID</p></Col>
              <Col> <p style={styles.pbold}> Biling Name</p></Col>
              <Col> <p style={styles.pbold}> Date</p></Col>
              <Col> <p style={styles.pbold}> Total</p></Col>
              <Col> <p style={styles.pbold}> Payment Status</p></Col>
              <Col> <p style={styles.pbold}> Payment Method</p></Col>

              <Col> <p style={{ fontSize: 13, fontWeight: 500 }}> View Details</p></Col>

            </Row>
            <Row style={styles.tableRow}>
              <Col> <p style={styles.font14}> 1345 </p></Col>
              <Col> <p style={styles.font14}> Neal Mathews</p></Col>
              <Col> <p style={styles.font14}> 9/1/2021</p></Col>
              <Col> <p style={styles.font14}> $400</p></Col>
              <Col> <p style={styles.font14}>Paid</p></Col>
              <Col> <p style={styles.font14}>Master Card</p></Col>

              <div style={styles.viewDetail}>
                View Details
              </div>

            </Row>
            <div style={styles.line}></div>
            <Row style={styles.tableRow}>
              <Col> <p style={styles.font14}> 1345 </p></Col>
              <Col> <p style={styles.font14}> Neal Mathews</p></Col>
              <Col> <p style={styles.font14}> 9/1/2021</p></Col>
              <Col> <p style={styles.font14}> $400</p></Col>
              <Col> <p style={styles.font14}>Paid</p></Col>
              <Col> <p style={styles.font14}>Master Card</p></Col>

              <div style={styles.viewDetail}>
                View Details
              </div>

            </Row>
            <div style={styles.line}></div>
            <Row style={styles.tableRow}>
              <Col> <p style={styles.font14}> 1345 </p></Col>
              <Col> <p style={styles.font14}> Neal Mathews</p></Col>
              <Col> <p style={styles.font14}> 9/1/2021</p></Col>
              <Col> <p style={styles.font14}> $400</p></Col>
              <Col> <p style={styles.font14}>Paid</p></Col>
              <Col> <p style={styles.font14}>Master Card</p></Col>

              <div style={styles.viewDetail}>
                View Details
              </div>

            </Row>
          </div>
        </div>
        {/* } */}

        <div>
          <h6 style={{ marginLeft: 20, marginTop: 20 }}><strong>WORK LOCATIONS</strong></h6>
          <div style={{ margin: 20, alignItems: 'center', justifyContent: 'center' }}>
            <img src={require('../../assets/map.png')} style={{ width: '100%' }} />

          </div>

          <div style={{ margin: 20, backgroundColor: 'white', borderRadius: 5, padding: 20 }}>
            <h5 style={styles.font14Blue}>WORKERS</h5>
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, backgroundColor: '#f0f3f8', height: 35, alignItems: 'center' }}>
              <Col> <p style={styles.pbold}> Client or Location</p></Col>
              <Col> <p style={styles.pbold}> Worker</p></Col>
              <Col> <p style={styles.pbold}> Date</p></Col>
              <Col> <p style={styles.pbold}> Appointments</p></Col>
              <Col> <p style={styles.pbold}> Current Status</p></Col>
              <Col> <p style={styles.pbold}> Checked In</p></Col>

              <Col> <p style={{ fontSize: 13, fontWeight: 500 }}> View Appointments</p></Col>

            </Row>
            <Row style={styles.tableRow}>
              <Col> <p style={styles.font14}> Client </p></Col>
              <Col> <p style={styles.font14}> Worker</p></Col>
              <Col> <p style={styles.font14}> 9/1/2021</p></Col>
              <Col> <p style={styles.font14}> 05/2/2021 08: 30 AM</p></Col>
              <Col> <p style={styles.font14}> Checked In</p></Col>
              <Col> <p style={styles.font14}> 08: 30 AM</p></Col>

              <div style={styles.viewButton}>
                View
              </div>

            </Row>
            <div style={styles.line}></div>
            <Row style={styles.tableRow}>
              <Col> <p style={styles.font14}>Client  </p></Col>
              <Col> <p style={styles.font14}>Worker </p></Col>
              <Col> <p style={styles.font14}>9/1/2021 </p></Col>
              <Col> <p style={styles.font14}>05/2/2021 08: 30 AM </p></Col>

              <Col> <p style={styles.font14}>On my way</p></Col>
              <Col> <p style={styles.font14}> 08: 30 AM</p></Col>

              <div style={styles.viewButton}>
                View
              </div>

            </Row>
            <div style={styles.line}></div>
            <Row style={styles.tableRow}>
              <Col> <p style={styles.font14}>Client  </p></Col>
              <Col> <p style={styles.font14}>Worker </p></Col>
              <Col> <p style={styles.font14}>9/1/2021 </p></Col>
              <Col> <p style={styles.font14}>05/2/2021 08: 30 AM </p></Col>
              <Col> <p style={styles.font14}>Late </p></Col>
              <Col> <p style={styles.font14}> 08: 30 AM</p></Col>

              <div style={styles.viewButton}>
                View
              </div>

            </Row>
          </div>
        </div>



      </div>
    );
  }
}
export default Home

const styles = {
  wrapper: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f3f8'
  },
  inputContainer: {
    height: 80, display: 'flex', flexDirection: 'row', alignItems: 'center',
  },
  input: {
    border: 'none', width: '90%', marginLeft: 20, fontSize: 14
  },
  flexSpace: {
    alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
  },
  box1: {
    padding: 5, borderRadius: 5, backgroundColor: 'white', width: '32%', height: 150
  },
  font12Bold: {
    fontSize: 12, fontWeight: 700, color: 'rgb(38 33 96)'
  },
  innerBox: {

    borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
  }, p: {
    color: 'white', marginBottom: 0
  },
  box3: {
    padding: 15, borderRadius: 5, backgroundColor: 'white', height: 350
  },
  pbold: {
    fontSize: 14, fontWeight: 500
  },
  font14: {
    fontSize: 14
  },
  line: {
    height: 1, marginTop: 5, marginBottom: 5, backgroundColor: '#f0f3f8'
  },
  viewButton: {
    backgroundColor: '#0397ff', color: 'white', height: 25,
    width: 90, borderTopRightRadius: 12, borderBottomLeftRadius: 12,
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  tableRow: {
    display: 'flex', flexDirection: 'row', height: 35, paddingTop: 10, justifyContent: 'space-between'
  },
  font14Blue: {
    fontSize: 14, color: '#22114f', fontWeight: 500
  },
  viewButtonLg: {
    backgroundColor: '#0397ff', color: 'white', height: 35, width: "90%", borderTopRightRadius: 12, borderBottomLeftRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  viewDetail: {
    fontSize: 12, backgroundColor: 'rgb(88 112 239)', color: 'white', height: 25, width: 90, borderTopRightRadius: 12, borderBottomLeftRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center'
  }
};
