import React from "react";
import Header from "./components/Header";
import Score from "./components/Score";
import {JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS, ENGLISH_RESULTS } from "./data"; 
function App() {
  return (
    <>
      <Header BatchName="React Js" />
      <main className="scores-container">
        <Score courseName="Java" courseResult={JAVA_RESULTS}/>
        <Score courseName="Python" courseResult={PYTHON_RESULTS}/>
        <Score courseName="HTML" courseResult={HTML_RESULTS}/>
        <Score courseName="English" courseResult={ENGLISH_RESULTS}/>
      </main>
    </>
  );
}

export default App;
