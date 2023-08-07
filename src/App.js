import { useState } from 'react';
import './App.css';
import FeedBack from './components/feedback/FeedBack';
import { Route, Routes } from "react-router-dom";
import FeedBackThankYou from './components/feedback/FeedBackThankYou';  
function App() {
  const [feedbackRate,setFeedbackRate]=useState(null);
  return (
    <div className="App">
      <Routes>
        <Route 
        path='/'
         element={ 
          <FeedBack setFeedbackRate={setFeedbackRate} />
         }> 
        </Route>
        <Route
         path='/ThankYou' 
         element={ 
          <FeedBackThankYou feedbackRate={feedbackRate}/>
         }> 
        </Route>
        </Routes>
    
    </div>
  );
}

export default App;
