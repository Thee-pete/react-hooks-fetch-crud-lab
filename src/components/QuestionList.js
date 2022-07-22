import React, { useEffect} from "react";
import QuestionItem from "./QuestionItem";



function QuestionList({questions , setQuestions ,onDeleteQuestion, onUpdateQuestions }) {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(data => setQuestions(data))
  },[]);


 

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
       { questions.map((question => {
        return <QuestionItem question={question} onDeleteQuestion= {onDeleteQuestion} onUpdateQuestions={onUpdateQuestions} />

       }))}
     
       </ul>
    </section>
  );
}

export default QuestionList;
