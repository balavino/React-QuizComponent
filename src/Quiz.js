import React, { Component } from 'react'
<<<<<<< HEAD
=======
import QuizQuestion from './QuizQuestion.js'
<<<<<<< HEAD
>>>>>>> 178b30b4974b82049132a7595644889bc5c4f21c
=======
import QuizEnd from './QuizEnd.js'
<<<<<<< HEAD
>>>>>>> c3440dc13d3545aa41d6d4a887a44f543098e39c
=======
import { stat } from 'fs';
>>>>>>> b31a6b6d2dfb6c2ca793608b7c1143364c036a4b

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = { quiz_position: 1 }
  }
  showNextQuestion() {
    this.setState((state) => {
      return { quiz_position: state.quiz_position + 1 }
    })
  }
  handleResetClick() {
    this.setState({ quiz_position: 1 })
  }
  render() {
    const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length)
    return (
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div>
=======
        <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
>>>>>>> 178b30b4974b82049132a7595644889bc5c4f21c
=======
        {isQuizEnd ? <QuizEnd /> : <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />}
>>>>>>> c3440dc13d3545aa41d6d4a887a44f543098e39c
=======
        {isQuizEnd ? <QuizEnd /> : <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)} />}
>>>>>>> b31a6b6d2dfb6c2ca793608b7c1143364c036a4b
=======
        {isQuizEnd ? <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} /> : <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)} />}
>>>>>>> 9dbe2da278406ba454bfc851b51e422478ed15dc
      </div>
    )
  }
}

export default Quiz