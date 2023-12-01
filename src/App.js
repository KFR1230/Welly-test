import './App.css';
import { useState } from 'react';
import Question1 from './QA/Question1';
import Question2 from './QA/Question2';
import Question3 from './QA/Question3';
import Question4 from './QA/Question4';
import Question5 from './QA/Question5';

function App() {
  const [title, setTitle] = useState('Question1');

  function onClickHandler(e) {
    if (e.target.tagName !== 'BUTTON') {
      return;
    }
    setTitle(e.target.name);
  }

  function question_num(q) {
    switch (q) {
      case 'Question1':
        return <Question1 />;
      case 'Question2':
        return <Question2 />;
      case 'Question3':
        return <Question3 />;
      case 'Question4':
        return <Question4 />;
      case 'Question5':
        return <Question5 />;
      default:
        return <Question1 />;
    }
  }

  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="button_wrapper" onClick={onClickHandler}>
            <button className="question" name="Question1">
              Question1
            </button>
            <button className="question" name="Question2">
              Question2
            </button>
            <button className="question" name="Question3">
              Question3
            </button>
            <button className="question" name="Question4">
              Question4
            </button>
            <button className="question" name="Question5">
              Question5
            </button>
          </div>
        </header>
        <h1 className="Title">{title}</h1>
        <main>{question_num(title)}</main>
      </div>
    </div>
  );
}

export default App;
