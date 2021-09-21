import React, { Component } from 'react'
<<<<<<< HEAD
=======
import QuizQuestion from './QuizQuestion.js'
<<<<<<< HEAD
>>>>>>> 178b30b4974b82049132a7595644889bc5c4f21c
=======
import QuizEnd from './QuizEnd.js'
>>>>>>> c3440dc13d3545aa41d6d4a887a44f543098e39c

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = { quiz_position: 1 }
  }
  render() {
    const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length)
    return (
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div>
=======
        <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
>>>>>>> 178b30b4974b82049132a7595644889bc5c4f21c
=======
        {isQuizEnd ? <QuizEnd /> : <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />}
>>>>>>> c3440dc13d3545aa41d6d4a887a44f543098e39c
      </div>
    )
  }
}

export default Quiz