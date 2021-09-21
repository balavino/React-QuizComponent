import React, { Component } from 'react'
<<<<<<< HEAD
=======
import QuizQuestion from './QuizQuestion.js'
>>>>>>> 178b30b4974b82049132a7595644889bc5c4f21c

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = { quiz_position: 1 }
  }
  render() {
    return (
      <div>
<<<<<<< HEAD
        <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div>
=======
        <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
>>>>>>> 178b30b4974b82049132a7595644889bc5c4f21c
      </div>
    )
  }
}

export default Quiz