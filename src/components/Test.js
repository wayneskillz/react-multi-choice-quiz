import React, { Component, TextInput } from "react";
import quizQuestions from "../api/quizQuestions";
import Quiz from "./Quiz";
import Result from "./Result";
import { CSSTransitionGroup } from "react-transition-group";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { MDBInput, MDBBtn, MDBAlert } from "mdbreact";
// import Landing from "./components/Landing";
import logo from "../svg/logo.svg";
// import "../App.css";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: "",
      intro: true,
      fullname: "",
      email: "",
      phone: "",
      error: false
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ""
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "Undetermined" });
    }
  }

  covidPositive() {
    return (
      <div>
        <p>
          We have identified that you’re someone at risk of severe illness if
          you catch coronavirus. Please remain at home for a minimum of 12
          weeks. You can also chat with our medical professionals as we will be
          monitoring the progress of your country. Home is the safest place for
          you. Staying in helps you stay well, you can open a window but do not
          leave your home. Also, try and stay 3 steps away from others indoors.
        </p>
      </div>
    );
  }

  covidNegative() {
    return <div>You are low risk. </div>;
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("form submitted");
    console.log(
      "submitted",
      this.state.fullname,
      this.state.email,
      this.state.phone
    );

    if (
      this.state.fullname === "" ||
      this.state.email === "" ||
      this.state.phone === ""
    ) {
      this.setState({ error: true });
    } else {
      this.setState({ intro: false, error: false });
    }
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  renderQuiz() {
    return this.state.intro ? (
      <React.Fragment>
        <CSSTransitionGroup
          className="container"
          component="div"
          transitionName="fade"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionAppear
          transitionAppearTimeout={500}
        >
          <form
            // className="needs-validation"
            onSubmit={this.handleSubmit}
            noValidate
          >
            <div className="form-group">
              <MDBInput
                value={this.state.fullname}
                onChange={this.changeHandler}
                name="fullname"
                label="Full Name"
                size="lg"
                validate
              />
              <MDBInput
                value={this.state.email}
                onChange={this.changeHandler}
                name="email"
                label="Email"
                type="email"
                size="lg"
                validate
              />
              <MDBInput
                value={this.state.phone}
                onChange={this.changeHandler}
                name="phone"
                label="Phone"
                size="lg"
                validate
              />
            </div>

            {this.state.error ? (
              <MDBAlert color="warning" dismiss>
                Please fill out all fields to proceed!
              </MDBAlert>
            ) : (
              ""
            )}
            <MDBBtn outline color="secondary" type="submit">
              Continue
            </MDBBtn>
          </form>
        </CSSTransitionGroup>
      </React.Fragment>
    ) : (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderIntro() {}

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  //   showLanding() {
  //     return <Landing {...this.state} />;
  //   }

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <div className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div className="icon-q">
              <i className="fas fa-head-side-mask fa-4x"></i>
            </div>
            <p> Answer the questions below to tell us more about you</p>
          </div>
          {this.state.result ? this.renderResult() : this.renderQuiz()}
        </React.Fragment>
      </div>
    );
  }
}

export default Test;
