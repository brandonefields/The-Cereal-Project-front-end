
import React from 'react';
import './App.css';
import CerealPage from './CerealPage';
  
function App() {
 
  return (
    <div className="App">
      <h1 className="anim" >the Cereal Project</h1>
      <section className="first-section">
        <img className="main-image" src="https://images.unsplash.com/photo-1578831914933-6339766eb29b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="cereal box" > 
        </img>
      <CerealPage /> 

      </section>
    </div>
  )
}

export default App