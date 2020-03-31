import React from "react";
// import PropTypes from 'prop-types';
import { CSSTransitionGroup } from "react-transition-group";
// import Question from '../components/Question';
// import QuestionCount from '../components/QuestionCount';
// import AnswerOption from '../components/AnswerOption';
// import logo from "../svg/logo.svg";
import landingImage from "../png/landing-img.png";
import "../App.css";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Test from "./Test";

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      landing: props.landing,
      show: false
    };
  }

  startTest() {}

  setShow(val) {
    this.setState({
      show: val
    });

    console.log("show", this.state.show);
  }

  //   testModal() {
  //     return (
  //       <Modal
  //         show={this.state.show}
  //         onHide={() => this.setShow(false)}
  //         dialogClassName="modal-90w"
  //         aria-labelledby="example-custom-modal-styling-title"
  //       >
  //         <Modal.Header closeButton>
  //           <Modal.Title id="example-custom-modal-styling-title">
  //             Questions Modal
  //           </Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>
  //           <Test />
  //         </Modal.Body>
  //       </Modal>
  //     );
  //   }

  render() {
    return (
      <div className="landing-bg">
        <CSSTransitionGroup
          className="container"
          component="div"
          transitionName="fade"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionAppear
          transitionAppearTimeout={500}
        >
          <Modal
            show={this.state.show}
            onHide={() => this.setShow(false)}
            dialogClassName="questions-modal"
            aria-labelledby="example-custom-modal-styling-title"
            backdrop="static"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Covid-19 Symptoms Tracker For Africa
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Test />
            </Modal.Body>
          </Modal>
          <Container>
            <Row style={{ paddingTop: 60 }}>
              <Col>
                <Row
                  className="align-items-center flex-column"
                  style={{ padding: 15 }}
                >
                  <Col className="intro-row">
                    <img
                      src={landingImage}
                      className="landing-img"
                      alt="Illustration"
                    />
                  </Col>
                  <Col className="intro-row">
                    <h1> COVID-19 Symptoms Tracker for Africa</h1>
                    <p>
                      We aim to help determine COVID-19 risk cases sooner and if
                      you need to call <br />
                      the Disease Control Hotline. This is an assessment tool
                      and not diagnostics tool
                    </p>
                  </Col>
                  <Col className="intro-row">
                    <Button
                      variant="outline-secondary"
                      color="white"
                      size="lg"
                      onClick={() => this.setShow(true)}
                    >
                      Get Started
                    </Button>
                  </Col>
                </Row>

                {/* <Row
                    className="align-items-center flex-column"
                    style={{ padding: 15 }}
                  >
                    <Col>
                      <p>
                        We aim to help determine COVID-19 risk cases sooner and if you
                        need to call the Disease Control Hotline. This is an
                        assessment tool and not diagnostics tool
                      </p>
                    </Col>
                    <Col className="intro-row">
                      <Button variant="outline-success" size="lg">
                        Get Started
                      </Button>
                    </Col>
                  </Row> */}
              </Col>
            </Row>
          </Container>

          {/* <div className="landing-container">
                <img src={logo} className="App-logo" alt="logo" />
                <h2> Covid19 Symptoms Checker</h2>
              </div> */}
        </CSSTransitionGroup>
      </div>
    );
  }
}

// function Landing(props) {

// startTest() {

// }
//   return (
//     // <CSSTransitionGroup
//     //   className="container"
//     //   component="div"
//     //   transitionName="fade"
//     //   transitionEnterTimeout={800}
//     //   transitionLeaveTimeout={500}
//     //   transitionAppear
//     //   transitionAppearTimeout={500}
//     // >
//     <div className="landing-bg">
//       <Container>
//         <Row style={{ paddingTop: 60 }}>
//           <Col>
//             <Row
//               className="align-items-center flex-column"
//               style={{ padding: 15 }}
//             >
//               <Col className="intro-row">
//                 <img
//                   src={landingImage}
//                   className="landing-img"
//                   alt="Illustration"
//                 />
//               </Col>
//               <Col className="intro-row">
//                 <h1> COVID-19 Symptoms Tracker for Africa</h1>
//                 <p>
//                   We aim to help determine COVID-19 risk cases sooner and if you
//                   need to call <br />
//                   the Disease Control Hotline. This is an assessment tool and
//                   not diagnostics tool
//                 </p>
//               </Col>
//               <Col className="intro-row">
//                 <Button variant="outline-secondary" size="lg" onPress={this.startTest()}>
//                   Get Started
//                 </Button>
//               </Col>
//             </Row>

//             {/* <Row
//               className="align-items-center flex-column"
//               style={{ padding: 15 }}
//             >
//               <Col>
//                 <p>
//                   We aim to help determine COVID-19 risk cases sooner and if you
//                   need to call the Disease Control Hotline. This is an
//                   assessment tool and not diagnostics tool
//                 </p>
//               </Col>
//               <Col className="intro-row">
//                 <Button variant="outline-success" size="lg">
//                   Get Started
//                 </Button>
//               </Col>
//             </Row> */}
//           </Col>
//         </Row>
//       </Container>

//       {/* <div className="landing-container">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2> Covid19 Symptoms Checker</h2>
//         </div> */}
//     </div>

//     // </CSSTransitionGroup>
//   );
// }

export default Landing;
