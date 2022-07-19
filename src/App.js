import { useState } from 'react';
import './App.css';
import { questions } from './questions';

function App() {

  const [currentQuestion, setcurrentQuestion] = useState(0)

  return (
    <div className="App">

      <div className='question-part'>
        <p>1 / 4</p>
        <hr />
        <p className='question-text'>merhaba burada soru olacak</p>
      </div>

      <div className='options-part'>
        {
          questions[currentQuestion].options.map((option, index) => (
            <button className='option' key={index}>{option.answer}</button>
          ))
        }
      </div>

    </div>
  );
}

export default App;
