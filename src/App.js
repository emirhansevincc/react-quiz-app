import { useState } from 'react';
import './App.css';
import { questions } from './questions';

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [finish, setFinish] = useState(false)

  const nextQuestion = (isCorrect) => {

    if (isCorrect) {
      setScore(score + 1)
    }

    if ((currentQuestion + 1) < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setFinish(true)
    }

  }

  return (
    <div className="App">

      {
        finish ? 
        (
        <h2>
        <p>Your score: {score}</p>
        <small>Max score: {questions.length}</small>
        </h2>
        ) : (

          <>
            <div className='question-part'>
              <p>1 / 4</p>
              <hr />
              <p className='question-text'>
                {questions[currentQuestion].question}
              </p>
            </div>

            <div className='options-part'>
              {
                questions[currentQuestion].options.map((option, index) => (
                  <button
                    className='option'
                    key={index}
                    onClick={() => { nextQuestion(option.isCorrect) }}
                  >
                    {option.answer}
                  </button>
                ))
              }
            </div>
          </>
        )
      }

    </div>
  );
}

export default App;