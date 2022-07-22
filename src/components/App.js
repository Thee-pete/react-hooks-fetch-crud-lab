import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";


function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
 

  function handlePostQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }


  function handleDeleteQuestion(deletedQuestion){
    const newQuestions = questions.filter(question => question.id !== deletedQuestion.id);
    setQuestions(newQuestions)

    
  }
  function handleUpdateQuestions(updatedQuestion){
    const newQuestions = questions.map(question => {
      if(question.correctIndex === updatedQuestion.correctIndex){
        return updatedQuestion
      }
      setQuestions([...questions, newQuestions])
    })


  }
  

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onPostQuestion={handlePostQuestion} /> : 
      <QuestionList questions ={questions} setQuestions={setQuestions} onDeleteQuestion ={handleDeleteQuestion} onUpdateQuestions = {handleUpdateQuestions} />}
    </main>
  );
}

export default App;
