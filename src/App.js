
import React from 'react';
import './App.css';
import CerealPage from './CerealPage';
  
function App() {
 
  return (
    <div className="App">
      {/* //<h1 className="anim" >the Cereal Project</h1> */}
      <section className="first-section">
        <img className="main-image" src="https://github.com/brandonefields/the_cereal_project/blob/main/Untitled_Artwork%205.jpg?raw=true" alt="cereal box" > 
        </img>
        <h1>the Cereal Project</h1>
      <CerealPage /> 

      </section>
    </div>
  )
}

export default App